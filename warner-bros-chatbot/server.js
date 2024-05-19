// server.js

const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');

const app = express();
const port = 3000;

// Dialogflow configuration
const projectId = 'your-project-id';
const sessionId = 'your-session-id';
const languageCode = 'en-US';
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

app.use(bodyParser.json());

// Handle incoming messages
app.post('/message', async (req, res) => {
  const { message } = req.body;

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: languageCode,
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json({ message: result.fulfillmentText });
  } catch (err) {
    console.error('Error processing message:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
