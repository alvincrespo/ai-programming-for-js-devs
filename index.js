import OpenAI from "openai";

const openai = new OpenAI();

async function hello() {
  const stream = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a great robot!" },
      { role: "user", content: "What is the capital of Puerto Rico?" },
    ],
    model: "gpt-5-nano",
    stream: true
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0].delta.content || "");
  }

  process.stdout.write("\n");
}

hello();
