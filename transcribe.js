import fs from "fs";
import { OpenAI } from "openai";

const openai = new OpenAI();

const transcribe = async (file) => {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(file),
    model: "whisper-1"
  });

  console.log(transcription.text);
};

transcribe("stump.mp3");

