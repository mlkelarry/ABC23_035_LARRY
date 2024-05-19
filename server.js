const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = processMessage(userMessage);
    res.json({ response: botResponse });
});

function processMessage(message) {
    // Example processing function (can be improved with AI integration)
    message = message.toLowerCase();
    const responses = {
        greeting: "Hello! How can I assist you today?",
        help: "Sure! What do you need help with?",
        farewell: "Goodbye! Have a great day!",
        default: "I'm sorry, I didn't understand that. Can you please repeat?"
    };

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

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
