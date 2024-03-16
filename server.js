require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
// Assuming you have additional routes and controllers set up as discussed
const {aiRoutes} = require('./routes/aiRoute'); // AI-related routes
// const skillRoutes = require('./routes/skillRoutes'); // Skills-related routes

const app = express();
const PORT = process.env.PORT || 3000;

// Express now has built-in body parsing functionality
app.use(express.json());

// Use the AI routes
app.use('/backend/routes', aiRoute);

// // Use the Skills routes
// app.use('/api/skills', skillRoutes);

// Add a root route for basic health check or welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Curve Backend API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const { LLM } = require('langchain');

const generateText = async (req, res) => {
    const llm = new LLM({
        apiKey: process.env.LANGCHAIN_API_KEY,
    });

    try {
        const { prompt, model = 'gpt-3.5-turbo', max_tokens = 100, temperature = 0.7 } = req.body;

        // Constructing the parameters dynamically based on the request
        const parameters = {
            prompt,
            model,
            parameters: {
                max_tokens,
                temperature,
            },
        };

        // Allow for additional parameters like 'stop', 'n', 'presence_penalty', etc.
        if (req.body.stop) parameters.parameters.stop = req.body.stop;
        if (req.body.n) parameters.parameters.n = req.body.n;
        if (req.body.presence_penalty) parameters.parameters.presence_penalty = req.body.presence_penalty;
        if (req.body.frequency_penalty) parameters.parameters.frequency_penalty = req.body.frequency_penalty;

        const response = await llm.complete(parameters);

        res.json({ text: response.choices[0].text.trim() });
    } catch (error) {
        console.error('Failed to generate text with error:', error);
        res.status(500).json({ error: 'Failed to generate text' });
    }
};
