// Example JavaScript code for an AI chatbot

// Dummy chatbot responses
const responses = {
    greeting: "Hello! How can I assist you today?",
    help: "Sure! What do you need help with?",
    farewell: "Goodbye! Have a great day!"
};

// Function to process user messages and generate responses
function processMessage(message) {
    if (message.toLowerCase().includes("hello")) {
        return responses.greeting;
    } else if (message.toLowerCase().includes("help")) {
        return responses.help;
    } else if (message.toLowerCase().includes("goodbye")) {
        return responses.farewell;
    } else {
        return "I'm sorry, I didn't understand that. Can you please repeat?";
    }
}

