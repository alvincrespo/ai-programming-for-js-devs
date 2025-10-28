import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function betterSpeaker(prompt) {
  const assistant = await openai.beta.assistants.create({
    name: "Rowen the Enthusiastic Speaking Coach",
    instructions: "Help me improve my public speaking skills. Make it funnier and more engaging.",
    model: "gpt-4"
  });

  console.log(assistant)

  // const response = await openai.assistants.chat.completions.create({
  //   model: "gpt-4",
  //   messages: [
  //     {
  //       role: "user",
  //       content: prompt,
  //     },
  //   ],
  // });

  // return response;
}


betterSpeaker();
