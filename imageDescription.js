import OpenAI from "openai";

const openai = new OpenAI();

// https://platform.openai.com/docs/guides/images-vision?api-mode=responses#analyze-images
async function imageDescription(imageUrl) {
  const response = await openai.chat.completions.create({
    model: "gpt-5-nano",
    messages: [
      {
        role: "system",
        content: "You are an expert image describer."
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What is this picture of?"
          },
          {
            type: "image_url",
            image_url: { url: imageUrl }
          }
        ]
      }
    ],
    max_completion_tokens: 100,
    reasoning_effort: "minimal"
  });

  console.log(response.choices[0].message.content);
}

imageDescription("https://www.moonhighway.com/articles/incorporating-rest-data/images/skiing.jpeg");
