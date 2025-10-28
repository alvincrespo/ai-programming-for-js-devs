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
  // Deprecated
  // const thread = await openai.beta.threads.create()
  // https://platform.openai.com/docs/assistants/migration
  const conversation = await openai.conversations.create({
    items: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  const response = openai.responses.create({
    conversation: conversation.id,
    model: "gpt-4",
    input: prompt
  });

  console.log((await response).output[0].content[0].text);

  rl.close();
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


// betterSpeaker();
