import { ChatOpenAI } from "@langchain/openai";
import "dotenv/config";

const model = new ChatOpenAI();

const population = await model.invoke("What is the capital of Massachusetts?");

console.log({ population });
