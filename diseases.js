document.addEventListener('DOMContentLoaded', function() {
    const diseases = window.diseasesData || [];
    
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    const searchInput = document.getElementById('diseaseSearch');
    if (searchInput && searchQuery) {
        searchInput.value = searchQuery;
    }
    
    initAlphabetFilter(diseases);
    displayDiseases(diseases, searchQuery);
});

let selectedLetter = null;

function initAlphabetFilter(diseases) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const filterContainer = document.getElementById('alphabetFilter');
    
    if (!filterContainer) return;
    
    const groupedByLetter = {};
    diseases.forEach(disease => {
        const letter = disease.name.charAt(0).toUpperCase();
        if (!groupedByLetter[letter]) groupedByLetter[letter] = [];
        groupedByLetter[letter].push(disease);
    });
    
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

function filterByLetter(letter) {
    selectedLetter = selectedLetter === letter ? null : letter;
    
    document.querySelectorAll('.alphabet-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === letter && selectedLetter === letter) {
            btn.classList.add('active');
        }
    });
    
    const searchInput = document.getElementById('diseaseSearch');
    if (searchInput) searchInput.value = '';
    
    const diseases = window.diseasesData || [];
    displayDiseases(diseases, null, selectedLetter);
}

function filterDiseases() {
    const searchInput = document.getElementById('diseaseSearch');
    const query = searchInput ? searchInput.value.trim() : '';
    
    selectedLetter = null;
    document.querySelectorAll('.alphabet-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const diseases = window.diseasesData || [];
    displayDiseases(diseases, query);
}

function displayDiseases(diseases, searchQuery, letterFilter = null) {
    const container = document.getElementById('diseasesList');
    if (!container) return;
    
    let filtered = diseases;
    
    if (searchQuery) {
        filtered = window.searchDiseases ? window.searchDiseases(searchQuery) : diseases;
    } else if (letterFilter) {
        filtered = diseases.filter(disease => disease.name.charAt(0).toUpperCase() === letterFilter);
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem;"><p style="color: var(--gray-600); font-size: 1.125rem;">No diseases found matching your search.</p></div>';
        return;
    }
    
    container.innerHTML = filtered.map(disease => `
        <a href="disease-detail.html?id=${disease.id}" class="content-card" style="display: block; text-decoration: none; color: inherit;">
            <div style="display: flex; align-items: start; justify-content: space-between;">
                <div style="flex: 1;">
                    <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">${disease.name}</h3>
                    <p style="color: var(--gray-600); margin-bottom: 0.75rem; line-height: 1.6;">${disease.description.substring(0, 150)}...</p>
                    <div>
                        <p style="font-size: 0.875rem; font-weight: 600; color: var(--gray-700); margin-bottom: 0.5rem;">Common Symptoms:</p>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--gray-600); font-size: 0.875rem;">
                            ${disease.symptoms.slice(0, 3).map(symptom => `<li>${symptom}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <i class="fas fa-heart" style="font-size: 2rem; color: var(--medical-green); margin-left: 1rem;"></i>
            </div>
        </a>
    `).join('');
}
