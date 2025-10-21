import OpenAI from "openai";

const openai = new OpenAI();

// https://platform.openai.com/docs/examples
async function hello() {
  const stream = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a motivational speaker. Who is encouraging me as a JavaScript developer to keep studying and doing the hard work necessary for success." },
      { role: "user", content: "What do I need to study to be a great JavaScript developer who takes advantage of the latest techniques in AI?" },
    ],
    model: "gpt-5-nano",
    stream: true,
    max_completion_tokens: 3000,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0].delta.content || "");
  }

  process.stdout.write("\n");
}

hello();

// // Responses API streaming example
// // Uses `max_output_tokens` for limiting generated tokens and an event-driven stream.
// async function hello_two() {
//   // The Responses API prefers `instructions` (system-like) and `input` (user content)
//   const stream = await openai.responses.stream({
//     model: "gpt-5-nano",
//     instructions:
//       "You are a motivational speaker encouraging me as a JavaScript developer to keep studying and doing the hard work necessary for success.",
//     input:
//       "What do I need to study to be a great JavaScript developer who takes advantage of the latest techniques in AI?",
//     max_output_tokens: 200,
//   });

//   try {
//     for await (const event of stream) {
//       if (event.type === "response.output_text.delta") {
//         process.stdout.write(event.delta);
//       } else if (event.type === "response.completed") {
//         process.stdout.write("\n");
//       } else if (event.type === "response.error") {
//         console.error("[responses.error]", event.error);
//       }
//     }
//   } catch (err) {
//     console.error("[streaming error]", err);
//   }
// }

// // To try the Responses API streaming, call:
// hello_two();
