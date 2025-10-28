import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const prompt = ChatPromptTemplate.fromMessages([{
  role: 'human',
  content: "Write a haiku about {topic}."
}]);

const model = new ChatOpenAI();

const parser = new StringOutputParser();

const chain = prompt.pipe(model).pipe(parser);

const response = await chain.invoke({
  topic: "cats"
});

console.log(response);
