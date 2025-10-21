import OpenAI from "openai";

const openai = new OpenAI();

// Create a prompt that generates questions for a job interview
// Ask for 3 interview questions for a JavaScript Developer
// Extra Credit: Make this a template to make this dynamic for any kind of developer

async function hello(kind) {
  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a hiring manager."
      },
      {
        role: "user",
        content:  `Generate 3 interview questions for a ${kind} developer.`
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

hello("erlang");
