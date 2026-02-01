const firstAidData = {
    bleeding: {
        title: "Bleeding",
        description: "How to stop bleeding and treat wounds",
        steps: [
            "Apply direct pressure to the wound using a clean cloth or bandage",
            "Elevate the injured area above the heart level if possible",
            "Keep pressure on the wound for at least 10-15 minutes",
            "If bleeding continues, apply additional dressings on top (don't remove the first one)",
            "Once bleeding stops, clean the wound gently with clean water",
            "Cover with a sterile bandage or dressing"
        ],
        emergencyNote: "Seek immediate medical help if bleeding is severe, doesn't stop after 15 minutes, or if the wound is deep or caused by a serious injury.",
        videoId: "NxO5LvgqZe0",
        videoUrl: "https://www.youtube.com/watch?v=NxO5LvgqZe0",
        videoTitle: "First Aid: How to Stop Bleeding"
    },
    burns: {
        title: "Burns",
        description: "First aid for burn injuries",
        steps: [
            "Remove the person from the source of heat immediately",
            "Cool the burn with cool (not cold) running water for at least 10 minutes",
            "Remove any clothing or jewelry near the burn (unless stuck to the skin)",
            "Cover the burn loosely with a sterile, non-stick dressing",
            "Do not apply ice, butter, or ointments to the burn",
            "Keep the person warm and comfortable"
        ],
        emergencyNote: "Seek immediate medical help for severe burns, burns larger than your palm, burns on face/hands/feet/genitals, chemical or electrical burns, or if the person has difficulty breathing.",
        videoId: "d24vz8-kk3Y",
        videoUrl: "https://www.youtube.com/watch?v=d24vz8-kk3Y",
        videoTitle: "First Aid: How to Treat Burns"
    },
    fractures: {
        title: "Fractures (Broken Bones)",
        description: "How to handle suspected fractures",
        steps: [
            "Keep the person still and don't move the injured area",
            "If there's bleeding, apply pressure with a clean cloth (without pressing on the fracture)",
            "Immobilize the injured area using a splint or by keeping it still",
            "Apply a cold pack wrapped in cloth to reduce swelling",
            "Elevate the injured limb if possible",
            "Do not try to straighten or realign the bone"
        ],
        emergencyNote: "Seek immediate medical help. Call emergency services if the bone is visible, the injury is to the head/neck/back, or if the person is unconscious.",
        videoId: "hq3yt1bQa4E",
        videoUrl: "https://www.youtube.com/watch?v=hq3yt1bQa4E",
        videoTitle: "First Aid: How to Handle Fractures"
    },
    choking: {
        title: "Choking",
        description: "First aid for choking victims",
        steps: [
            "If the person can cough or speak, encourage them to keep coughing",
            "If they cannot cough, speak, or breathe, perform the Heimlich maneuver:",
            "Stand behind the person and wrap your arms around their waist",
            "Make a fist with one hand and place it just above the navel",
            "Grasp your fist with your other hand and give quick, upward thrusts",
            "Continue until the object is expelled or the person becomes unconscious",
            "If unconscious, begin CPR and call emergency services"
        ],
        emergencyNote: "Call emergency services immediately if the person is choking, becomes unconscious, or if the Heimlich maneuver doesn't work after several attempts.",
        videoId: "7CgtIgSyAiU",
        videoUrl: "https://www.youtube.com/watch?v=7CgtIgSyAiU",
        videoTitle: "First Aid: How to Help Someone Choking"
    },
    seizures: {
        title: "Seizures",
        description: "How to help someone having a seizure",
        steps: [
            "Stay calm and time the seizure",
            "Clear the area of any dangerous objects",
            "Do not restrain the person or put anything in their mouth",
            "Place something soft under their head",
            "Turn them onto their side to help with breathing",
            "Loosen any tight clothing around the neck",
            "Stay with them until the seizure ends"
        ],
        emergencyNote: "Seek immediate medical help if the seizure lasts more than 5 minutes, if another seizure starts immediately, if the person is injured, pregnant, or has diabetes, or if it's their first seizure.",
        videoId: "gXwZCSOdXao",
        videoUrl: "https://www.youtube.com/watch?v=gXwZCSOdXao",
        videoTitle: "First Aid: How to Help Someone Having a Seizure"
    },
    poisoning: {
        title: "Poisoning",
        description: "First aid for poisoning",
        steps: [
            "If the person is unconscious or not breathing, call emergency services immediately",
            "If conscious, call poison control center or emergency services",
            "Do not give anything by mouth unless instructed by medical professionals",
            "If poison is on the skin, remove contaminated clothing and rinse skin with water for 15-20 minutes",
            "If poison is in the eyes, rinse with clean water for 15-20 minutes",
            "If inhaled, move the person to fresh air immediately",
            "Keep the poison container or label to show medical professionals"
        ],
        emergencyNote: "Call emergency services immediately for any suspected poisoning. Do not induce vomiting unless specifically instructed by medical professionals.",
        videoId: "W0K4kdSC3Ao",
        videoUrl: "https://www.youtube.com/watch?v=W0K4kdSC3Ao",
        videoTitle: "First Aid: How to Treat Poisoning"
    }
};

// Make functions globally accessible
window.showCategory = function(categoryId) {
    const data = firstAidData[categoryId];
    if (!data) {
        console.error('Category not found:', categoryId);
        return;
    }

    const container = document.getElementById('firstAidContent');
    if (!container) {
        console.error('Container not found: firstAidContent');
        return;
    }
    container.innerHTML = `
        <button onclick="showCategories()" style="margin-bottom: 1.5rem; color: var(--medical-blue); background: none; border: none; cursor: pointer; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-arrow-left"></i> Back to Categories
        </button>

        <div class="content-card">
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">${data.title}</h2>
            <p style="font-size: 1.125rem; color: var(--gray-600); margin-bottom: 2rem;">${data.description}</p>

            ${data.videoId ? `
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; color: var(--medical-blue);">
                    <i class="fas fa-play-circle" style="color: #FF0000; font-size: 1.75rem;"></i>
                    Instructional Video
                </h3>
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 0.75rem; background: #000; box-shadow: 0 8px 16px rgba(0,0,0,0.2); margin-bottom: 1rem;">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/${data.videoId}?rel=0&modestbranding=1&showinfo=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        title="${data.videoTitle || data.title + ' First Aid Video'}"
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
                    </iframe>
                </div>
                <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 1rem; background: var(--gray-50); border-radius: 0.5rem; border: 1px solid var(--gray-200);">
                    <a href="${data.videoUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--gray-700); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; transition: color 0.3s;" onmouseover="this.style.color='#FF0000'" onmouseout="this.style.color='var(--gray-700)'">
                        <i class="fab fa-youtube" style="color: #FF0000; font-size: 1.25rem;"></i>
                        <span>Watch on YouTube</span>
                        <i class="fas fa-external-link-alt" style="font-size: 0.75rem; opacity: 0.7;"></i>
                    </a>
                </div>
            </div>
            ` : `
            <div style="margin-bottom: 2rem; padding: 1.5rem; background: linear-gradient(135deg, var(--blue-50) 0%, var(--medical-lightBlue) 100%); border-radius: 0.75rem; border: 2px solid var(--medical-blue); text-align: center;">
                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: var(--medical-blue);">
                    <i class="fas fa-video" style="color: #FF0000;"></i> Watch Instructional Video
                </h3>
                <p style="font-size: 0.95rem; color: var(--gray-700); margin-bottom: 1.5rem; line-height: 1.6;">
                    Learn how to perform first aid for <strong>${data.title}</strong> by watching instructional videos from trusted medical organizations.
                </p>
                <a href="${data.videoUrl || 'https://www.youtube.com/results?search_query=' + encodeURIComponent(data.title + ' first aid')}" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.875rem 2rem; background: #FF0000; border-radius: 0.5rem; transition: all 0.3s; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" onmouseover="this.style.background='#cc0000'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.3)'" onmouseout="this.style.background='#FF0000'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.2)'">
                    <i class="fab fa-youtube" style="font-size: 1.5rem;"></i>
                    <span>Watch Video on YouTube</span>
                </a>
            </div>
            `}

            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Step-by-Step Instructions</h3>
                <ol style="list-style: decimal; margin-left: 1.5rem; color: var(--gray-700); line-height: 1.8;">
                    ${data.steps.map(step => `<li style="margin-bottom: 0.75rem;">${step}</li>`).join('')}
                </ol>
            </div>

            <div class="alert alert-danger">
                <i class="fas fa-exclamation-triangle"></i>
                <p style="font-weight: 600;">${data.emergencyNote}</p>
            </div>
        </div>
    `;
}

window.showCategories = function() {
    const container = document.getElementById('firstAidContent');
    if (!container) {
        console.error('Container not found: firstAidContent');
        return;
    }
    container.innerHTML = `
        <div class="features-grid" id="categoriesGrid">
            <div class="feature-card" onclick="showCategory('bleeding')" style="cursor: pointer;">
                <i class="fas fa-tint feature-icon"></i>
                <h3>Bleeding</h3>
                <p>How to stop bleeding and treat wounds</p>
                <div style="margin-top: 1rem; color: var(--medical-blue); font-weight: 600;">
                    <i class="fas fa-video"></i> View Guide
                </div>
            </div>
            <div class="feature-card" onclick="showCategory('burns')" style="cursor: pointer;">
                <i class="fas fa-fire feature-icon"></i>
                <h3>Burns</h3>
                <p>First aid for burn injuries</p>
                <div style="margin-top: 1rem; color: var(--medical-blue); font-weight: 600;">
                    <i class="fas fa-video"></i> View Guide
                </div>
            </div>
            <div class="feature-card" onclick="showCategory('fractures')" style="cursor: pointer;">
                <i class="fas fa-bone feature-icon"></i>
                <h3>Fractures</h3>
                <p>How to handle suspected fractures</p>
                <div style="margin-top: 1rem; color: var(--medical-blue); font-weight: 600;">
                    <i class="fas fa-video"></i> View Guide
                </div>
            </div>
            <div class="feature-card" onclick="showCategory('choking')" style="cursor: pointer;">
                <i class="fas fa-lungs feature-icon"></i>
                <h3>Choking</h3>
                <p>First aid for choking victims</p>
                <div style="margin-top: 1rem; color: var(--medical-blue); font-weight: 600;">
                    <i class="fas fa-video"></i> View Guide
                </div>
            </div>
            <div class="feature-card" onclick="showCategory('seizures')" style="cursor: pointer;">
                <i class="fas fa-brain feature-icon"></i>
                <h3>Seizures</h3>
                <p>How to help someone having a seizure</p>
                <div style="margin-top: 1rem; color: var(--medical-blue); font-weight: 600;">
                    <i class="fas fa-video"></i> View Guide
                </div>
            </div>
            <div class="feature-card" onclick="showCategory('poisoning')" style="cursor: pointer;">
                <i class="fas fa-flask feature-icon"></i>
                <h3>Poisoning</h3>
                <p>First aid for poisoning</p>
                <div style="margin-top: 1rem; color: var(--medical-blue); font-weight: 600;">
                    <i class="fas fa-video"></i> View Guide
                </div>
            </div>
        </div>
    `;
}
