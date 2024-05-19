// Example JavaScript code for an AI chatbot

// Dummy chatbot responses
const responses = {
    greeting: "Hello! How can I assist you today?",
    help: "Sure! What do you need help with?",
    farewell: "Goodbye! Have a great day!",
    default: "I'm sorry, I didn't understand that. Can you please repeat?"
};

// Function to process user messages and generate responses
function processMessage(message) {
    message = message.toLowerCase();
    if (message.includes("hello")) {
        return responses.greeting;
    } else if (message.includes("help")) {
        return responses.help;
    } else if (message.includes("goodbye")) {
        return responses.farewell;
    } else {
        return responses.default;
    }
}

// Function to handle chatbot interaction
document.addEventListener("DOMContentLoaded", function() {
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatOutput = document.getElementById("chat-output");

    chatForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            const botResponse = processMessage(userMessage);
            chatOutput.innerHTML += `<div class="user-message">${userMessage}</div>`;
            chatOutput.innerHTML += `<div class="bot-response">${botResponse}</div>`;
            chatInput.value = "";
            chatOutput.scrollTop = chatOutput.scrollHeight;
        }
    });
});
