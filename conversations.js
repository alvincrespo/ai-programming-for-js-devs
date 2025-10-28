// Ref: https://github.com/LinkedInLearning/ai-programming-for-javascript-developers-3810071/blob/04_03e/index.js

import OpenAI from "openai";
import "dotenv/config";
import readline from "readline";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your question for the speaker coach?  \n", async (prompt) => {
  try {
    const conversation = await openai.conversations.create();

    const response = await openai.responses.create({
      conversation: conversation.id,
      model: "gpt-4.1-mini",
      input: prompt,
    });

    console.log(response.output_text ?? "(no text output)");
  } catch (err) {
    console.error("Error during conversation:", err?.message || err);
  } finally {
    rl.close();
  }
});
