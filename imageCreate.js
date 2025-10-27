import OpenAI from "openai";
import { writeFile } from "fs/promises";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const img = await openai.images.generate({
  model: "dall-e-3",
  prompt: "a white siamese cat",
  size: "1024x1024",
  quality: "standard",
  response_format: "b64_json",
  n: 1
});

console.log("----- IMAGE RESPONSE OBJECT BELOW -----");
console.log(img);
console.log("----- BASE64 ENCODED IMAGE BELOW -----");
console.log(img.data[0].b64_json);

const imageBuffer = Buffer.from(img.data[0].b64_json, "base64");

await writeFile("cat.png", imageBuffer);
