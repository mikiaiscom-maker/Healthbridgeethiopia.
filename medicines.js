// Medicines Page Script
document.addEventListener('DOMContentLoaded', function() {
    const medicines = window.medicinesData || [];
    
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    // Set search input if query exists
    const searchInput = document.getElementById('medicineSearch');
    if (searchInput && searchQuery) {
        searchInput.value = searchQuery;
    }
    
    // Initialize alphabet filter
    initAlphabetFilter(medicines);
    
    // Display medicines
    displayMedicines(medicines, searchQuery);
});

function initAlphabetFilter(medicines) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const filterContainer = document.getElementById('alphabetFilter');
    
    if (!filterContainer) return;
    
    // Group medicines by first letter
    const groupedByLetter = {};
    medicines.forEach(med => {
        const letter = med.name.charAt(0).toUpperCase();
        if (!groupedByLetter[letter]) groupedByLetter[letter] = [];
        groupedByLetter[letter].push(med);
    });
    
    // Create alphabet buttons
    alphabet.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'alphabet-btn';
        btn.textContent = letter;
        btn.onclick = () => filterByLetter(letter);
        
        if (!groupedByLetter[letter]) {
            btn.classList.add('disabled');
            btn.disabled = true;
        }
        
        filterContainer.appendChild(btn);
    });
}

let selectedLetter = null;

function filterByLetter(letter) {
    selectedLetter = selectedLetter === letter ? null : letter;
    
    // Update button states
    document.querySelectorAll('.alphabet-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === letter && selectedLetter === letter) {
            btn.classList.add('active');
        }
    });
    
    // Clear search
    const searchInput = document.getElementById('medicineSearch');
    if (searchInput) searchInput.value = '';
    
    // Display filtered medicines
    const medicines = window.medicinesData || [];
    displayMedicines(medicines, null, selectedLetter);
}

function filterMedicines() {
    const searchInput = document.getElementById('medicineSearch');
    const query = searchInput ? searchInput.value.trim() : '';
    
    // Clear letter filter
    selectedLetter = null;
    document.querySelectorAll('.alphabet-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const medicines = window.medicinesData || [];
    displayMedicines(medicines, query);
}

function displayMedicines(medicines, searchQuery, letterFilter = null) {
    const container = document.getElementById('medicinesList');
    if (!container) return;
    
    let filtered = medicines;
    
    if (searchQuery) {
        filtered = window.searchMedicines ? window.searchMedicines(searchQuery) : medicines;
    } else if (letterFilter) {
        filtered = medicines.filter(med => med.name.charAt(0).toUpperCase() === letterFilter);
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem;"><p style="color: var(--gray-600); font-size: 1.125rem;">No medicines found matching your search.</p></div>';
        return;
    }
    
    container.innerHTML = filtered.map(med => `
        <a href="medicine-detail.html?id=${med.id}" class="content-card" style="display: block; text-decoration: none; color: inherit;">
            <div style="display: flex; align-items: start; justify-content: space-between;">
                <div style="flex: 1;">
                    <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">${med.name}</h3>
                    ${med.genericName ? `<p style="color: var(--gray-600); margin-bottom: 0.75rem;">Generic: ${med.genericName}</p>` : ''}
                    <div>
                        <p style="font-size: 0.875rem; font-weight: 600; color: var(--gray-700); margin-bottom: 0.5rem;">Common Uses:</p>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--gray-600); font-size: 0.875rem;">
                            ${med.uses.slice(0, 3).map(use => `<li>${use}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <i class="fas fa-pills" style="font-size: 2rem; color: var(--medical-blue); margin-left: 1rem;"></i>
            </div>
        </a>
    `).join('');
}
