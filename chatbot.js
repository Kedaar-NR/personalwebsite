document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');
    const sendMessage = document.getElementById('send-message');

    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.toggle('chatbot-closed');
        chatbotToggle.textContent = chatbotContainer.classList.contains('chatbot-closed') ? 'Open' : 'Close';
    });

    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            showTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                const aiResponse = getAIResponse(message);
                addMessage('ai', aiResponse);
            }, 1000 + Math.random() * 1000);
        }
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'ai', 'typing-indicator');
        typingIndicator.textContent = 'Typing...';
        chatbotMessages.appendChild(typingIndicator);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = chatbotMessages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function getAIResponse(message) {
        const lowercaseMessage = message.toLowerCase();
        if (lowercaseMessage.includes('project') || lowercaseMessage.includes('work')) {
            return "Kedaar has worked on several interesting projects. You can find more details on the Projects page. Some highlights include web development, machine learning, and mobile app projects.";
        } else if (lowercaseMessage.includes('education') || lowercaseMessage.includes('study')) {
            return "Kedaar is currently pursuing a degree in Computer Science. He's passionate about learning new technologies and applying them to solve real-world problems.";
        } else if (lowercaseMessage.includes('hobby') || lowercaseMessage.includes('interest')) {
            return "Kedaar enjoys coding, problem-solving, and learning new technologies. In his free time, he also likes reading, hiking, photography, and cooking.";
        } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('reach')) {
            return "You can contact Kedaar using the form on the main page. He's always open to discussing new opportunities and collaborations!";
        } else {
            return "Kedaar Rentachintala is a passionate developer and student. He's always eager to learn and take on new challenges. Is there anything specific you'd like to know about his skills, projects, or background?";
        }
    }
});
