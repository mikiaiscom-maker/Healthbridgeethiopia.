const facilities = [
    {
        id: "1",
        name: "Black Lion Hospital",
        type: "hospital",
        address: "Addis Ababa, Ethiopia",
        phone: "+251 11 123 4567",
        latitude: 9.0054,
        longitude: 38.7636
    },
    {
        id: "2",
        name: "St. Paul's Hospital Millennium Medical College",
        type: "hospital",
        address: "Addis Ababa, Ethiopia",
        phone: "+251 11 123 4568",
        latitude: 9.0123,
        longitude: 38.7700
    },
    {
        id: "3",
        name: "Tikur Anbessa Specialized Hospital",
        type: "hospital",
        address: "Addis Ababa, Ethiopia",
        phone: "+251 11 123 4569",
        latitude: 9.0200,
        longitude: 38.7750
    },
    {
        id: "4",
        name: "Zewditu Memorial Hospital",
        type: "hospital",
        address: "Addis Ababa, Ethiopia",
        phone: "+251 11 123 4570",
        latitude: 9.0150,
        longitude: 38.7800
    },
    {
        id: "5",
        name: "Community Health Center - Bole",
        type: "health-center",
        address: "Bole Sub-city, Addis Ababa",
        phone: "+251 11 123 4571",
        latitude: 8.9900,
        longitude: 38.7900
    },
    {
        id: "6",
        name: "Private Medical Clinic - Cazanchis",
        type: "clinic",
        address: "Cazanchis, Addis Ababa",
        phone: "+251 11 123 4572",
        latitude: 9.0100,
        longitude: 38.7600
    }
];

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function getLocation() {
    const btn = document.getElementById('locationBtn');
    const errorDiv = document.getElementById('errorMessage');
    
    if (!navigator.geolocation) {
        showError("Geolocation is not supported by your browser.");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Finding your location...';
    errorDiv.style.display = 'none';

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            displayFacilities(latitude, longitude);
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-crosshairs"></i> Find Hospitals & Clinics Near Me';
        },
        (err) => {
            showError("Unable to retrieve your location. Please ensure location services are enabled.");
            displayFacilities(null, null);
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-crosshairs"></i> Find Hospitals & Clinics Near Me';
        }
    );
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.style.display = 'block';
    errorDiv.className = 'alert alert-danger';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <p>${message}</p>
    `;
}

function displayFacilities(userLat, userLng) {
    const container = document.getElementById('facilitiesList');
    const mapContainer = document.getElementById('mapContainer');
    const title = document.getElementById('facilitiesTitle');
    
    let facilitiesToShow = [...facilities];
    
    if (userLat && userLng) {
        title.textContent = "Nearby Facilities";
        facilitiesToShow = facilities.map(facility => ({
            ...facility,
            distance: calculateDistance(userLat, userLng, facility.latitude, facility.longitude)
        })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
        
        // Update map
        const bbox = `${userLng - 0.1},${userLat - 0.1},${userLng + 0.1},${userLat + 0.1}`;
        mapContainer.innerHTML = `
            <iframe
                width="100%"
                height="100%"
                frameborder="0"
                style="border: 0;"
                src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${userLat},${userLng}"
                allowfullscreen>
            </iframe>
        `;
    } else {
        title.textContent = "Healthcare Facilities";
    }
    
    const getTypeColor = (type) => {
        switch (type) {
            case "hospital": return "background: var(--red-50); color: var(--red-800); border-color: var(--red-200);";
            case "clinic": return "background: var(--blue-50); color: var(--blue-800); border-color: var(--blue-200);";
            case "health-center": return "background: var(--green-50); color: var(--green-800); border-color: var(--green-200);";
            default: return "background: var(--gray-100); color: var(--gray-800); border-color: var(--gray-200);";
        }
    };
    
    container.innerHTML = facilitiesToShow.map(facility => `
        <div class="content-card">
            <div style="display: flex; align-items: start; justify-content: space-between; margin-bottom: 0.75rem;">
                <h3 style="font-size: 1.25rem; font-weight: bold;">${facility.name}</h3>
                <span style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; border: 1px solid; ${getTypeColor(facility.type)}">
                    ${facility.type.replace("-", " ").toUpperCase()}
                </span>
            </div>
            <div style="color: var(--gray-600); font-size: 0.875rem;">
                <p style="margin-bottom: 0.5rem; display: flex; align-items: start; gap: 0.5rem;">
                    <i class="fas fa-map-marker-alt" style="color: var(--medical-green); margin-top: 0.25rem;"></i>
                    <span>${facility.address}</span>
                </p>
                <p style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-phone" style="color: var(--medical-blue);"></i>
                    <a href="tel:${facility.phone}" style="color: var(--medical-blue); text-decoration: none;">${facility.phone}</a>
                </p>
                ${facility.distance !== undefined ? `
                    <p style="display: flex; align-items: center; gap: 0.5rem; color: var(--medical-blue); font-weight: 600;">
                        <i class="fas fa-crosshairs"></i>
                        <span>${facility.distance.toFixed(1)} km away</span>
                    </p>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Display facilities on page load
document.addEventListener('DOMContentLoaded', function() {
    displayFacilities(null, null);
});
