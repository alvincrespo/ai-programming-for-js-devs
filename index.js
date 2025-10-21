import OpenAI from "openai";

const openai = new OpenAI();

// https://platform.openai.com/docs/examples
async function hello(author, text) {
  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a world renowned author."
      },
      {
        role: "user",
        content:  `Write this in the style of ${author}: ${text}`
      },
    ],
    model: "gpt-5-nano",
    stream: true,
    max_completion_tokens: 1000,
    reasoning_effort: "minimal"
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0].delta.content || "");
  }

  process.stdout.write("\n");
}

hello("Joan Didion", "It was the best of times. It was the worst of times.");
