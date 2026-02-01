function generateAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Check for diagnostic/prescription requests
    if (lowerInput.includes("diagnose") || lowerInput.includes("what do i have") || lowerInput.includes("what's wrong")) {
        return "I cannot diagnose medical conditions. If you're experiencing symptoms that concern you, I recommend consulting with a healthcare professional who can properly evaluate your situation. Would you like general information about symptoms you're experiencing?";
    }

    if (lowerInput.includes("prescribe") || lowerInput.includes("what medicine") || lowerInput.includes("dosage")) {
        return "I cannot prescribe medications or provide specific dosages. Medication decisions should always be made by a qualified healthcare professional who can consider your medical history, current conditions, and other factors. Would you like general information about a medication or condition?";
    }

    // General health information responses
    if (lowerInput.includes("fever") || lowerInput.includes("temperature")) {
        return "Fever is your body's natural response to infection. Generally, a fever above 38°C (100.4°F) in adults may indicate an infection. Rest, stay hydrated, and consider over-the-counter fever reducers if appropriate. However, if your fever is very high (above 39°C), persists for more than 3 days, or is accompanied by severe symptoms, please consult a healthcare professional immediately.";
    }

    if (lowerInput.includes("headache")) {
        return "Headaches can have many causes including stress, dehydration, lack of sleep, or underlying conditions. For mild headaches, rest, hydration, and over-the-counter pain relievers may help. However, if you experience severe, sudden headaches, headaches after an injury, or headaches with vision changes, fever, or confusion, seek medical attention promptly.";
    }

    if (lowerInput.includes("cough") || lowerInput.includes("cold")) {
        return "Coughs and colds are usually caused by viral infections. Rest, stay hydrated, and you may find relief with over-the-counter remedies. Most colds resolve within 7-10 days. However, if your cough persists for more than 3 weeks, is accompanied by fever, chest pain, or difficulty breathing, or if you're coughing up blood, please see a healthcare professional.";
    }

    if (lowerInput.includes("diabetes") || lowerInput.includes("blood sugar")) {
        return "Diabetes is a condition where the body has trouble regulating blood sugar. Type 2 diabetes can often be managed with lifestyle changes including a healthy diet, regular exercise, and maintaining a healthy weight. However, proper diagnosis and treatment should be managed by a healthcare professional. If you're concerned about diabetes, I recommend getting tested by a doctor.";
    }

    if (lowerInput.includes("exercise") || lowerInput.includes("fitness")) {
        return "Regular exercise is important for overall health. The World Health Organization recommends at least 150 minutes of moderate-intensity exercise per week for adults. This can include walking, cycling, swimming, or other activities you enjoy. Start slowly if you're new to exercise and gradually increase intensity. Always consult with a healthcare provider before starting a new exercise program, especially if you have existing health conditions.";
    }

    if (lowerInput.includes("nutrition") || lowerInput.includes("diet") || lowerInput.includes("food")) {
        return "A balanced diet includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Aim to limit processed foods, added sugars, and excessive salt. Staying hydrated with clean water is also important. For personalized nutrition advice, consider consulting with a registered dietitian or nutritionist.";
    }

    // Default response
    return "Thank you for your question. I can provide general health education and information, but I cannot diagnose conditions or prescribe treatments. For specific medical concerns, symptoms that worry you, or if you need a diagnosis or treatment plan, please consult with a qualified healthcare professional. Is there general health information I can help you with?";
}

function sendMessage(event) {
    event.preventDefault();
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesContainer = document.getElementById('chatMessages');
    const sendBtn = document.getElementById('sendBtn');
    
    // Disable input
    input.disabled = true;
    sendBtn.disabled = true;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    messagesContainer.appendChild(userMessage);
    
    // Clear input
    input.value = '';
    
    // Show loading
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'message assistant';
    loadingMessage.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div style="display: flex; gap: 0.25rem;">
                <div style="width: 0.5rem; height: 0.5rem; background: var(--gray-400); border-radius: 50%; animation: bounce 1s infinite;"></div>
                <div style="width: 0.5rem; height: 0.5rem; background: var(--gray-400); border-radius: 50%; animation: bounce 1s infinite; animation-delay: 0.15s;"></div>
                <div style="width: 0.5rem; height: 0.5rem; background: var(--gray-400); border-radius: 50%; animation: bounce 1s infinite; animation-delay: 0.3s;"></div>
            </div>
        </div>
    `;
    messagesContainer.appendChild(loadingMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        
        // Remove loading
        loadingMessage.remove();
        
        // Add assistant message
        const assistantMessage = document.createElement('div');
        assistantMessage.className = 'message assistant';
        assistantMessage.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>${response}</p>
            </div>
        `;
        messagesContainer.appendChild(assistantMessage);
        
        // Re-enable input
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

// Add CSS animation for loading dots
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-0.25rem); }
    }
`;
document.head.appendChild(style);
