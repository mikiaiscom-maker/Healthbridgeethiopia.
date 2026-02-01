// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            // Change icon
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navLinks && navLinks.classList.contains('active')) {
                if (!navLinks.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });

        // Prevent body scroll when menu is open on mobile
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    if (navLinks.classList.contains('active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                }
            });
        });
        observer.observe(navLinks, { attributes: true });
    }
});

// Search Functionality
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('homeSearch');
    const query = searchInput.value.trim();
    
    if (query) {
        window.location.href = `medicines.html?search=${encodeURIComponent(query)}`;
    }
}

// Medicine and Disease Data
// Comprehensive medicines database is loaded from medicines-data.js
// This ensures all medicines A-Z are available

// Comprehensive diseases database is loaded from diseases-data.js
// This ensures all diseases A-Z are available

// Utility Functions
// These functions use the medicinesData from medicines-data.js
function getMedicineById(id) {
    const medicines = window.medicinesData || [];
    return medicines.find(med => med.id === id);
}

function getDiseaseById(id) {
    const diseases = window.diseasesData || [];
    return diseases.find(disease => disease.id === id);
}

function searchMedicines(query) {
    const medicines = window.medicinesData || [];
    const lowerQuery = query.toLowerCase();
    return medicines.filter(med =>
        med.name.toLowerCase().includes(lowerQuery) ||
        med.genericName?.toLowerCase().includes(lowerQuery) ||
        med.uses.some(use => use.toLowerCase().includes(lowerQuery))
    );
}

function searchDiseases(query) {
    const diseases = window.diseasesData || [];
    const lowerQuery = query.toLowerCase();
    return diseases.filter(disease =>
        disease.name.toLowerCase().includes(lowerQuery) ||
        disease.description.toLowerCase().includes(lowerQuery) ||
        disease.symptoms.some(symptom => symptom.toLowerCase().includes(lowerQuery))
    );
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.diseasesData = diseasesData;
    window.getMedicineById = getMedicineById;
    window.getDiseaseById = getDiseaseById;
    window.searchMedicines = searchMedicines;
    window.searchDiseases = searchDiseases;
}
