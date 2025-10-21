import OpenAI from "openai";

const openai = new OpenAI();

async function hello() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a great robot!" },
      { role: "user", content: "What is the capital of Puerto Rico?" },
    ],
    model: "gpt-5-nano",
  });

  console.log(completion.choices[0]);
}

hello();
