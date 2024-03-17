import dotenv from 'dotenv';
import express from 'express';
import { Ollama } from '@langchain/community/llms/ollama';

dotenv.config();

const llm = new Ollama({
  baseUrl: "http://localhost:3000", // Adjust if your Ollama service is hosted elsewhere
  model: "mistral", // Ensure this model name is correct
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('LangChain AI Backend with Ollama is running'));

app.post('/api/generate', async (req, res) => {
  console.log("Request: ", req.body);
  // Data which will write in a file.

  try {
    const { prompt } = req.body;
    // Adjust the API call according to Ollama's method structure
    // This example assumes `.complete()` method and parameters which might need adjustments
    const response = await llm.complete({
      prompt: prompt,
      parameters: {
        max_tokens: 100,
        temperature: 0.7,
      },
    });
    // Adjust response handling based on Ollama's actual response structure
    res.json({ text: response.choices[0].text.trim() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate text' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
