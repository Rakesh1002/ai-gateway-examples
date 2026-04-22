// AIgateway · voice round-trip starter
//
//   1. STT: transcribe input.mp3 with Whisper
//   2. TTS: synthesize the transcript with Aura 2
//   3. Write output.mp3
//
// Drop any short MP3 / WAV in the folder as input.mp3 first.

import OpenAI from "openai";
import { createReadStream, createWriteStream } from "node:fs";

const client = new OpenAI({
  baseURL: "https://api.aigateway.sh/v1",
  apiKey: process.env.AIGATEWAY_API_KEY,
});

console.log("transcribing input.mp3 ...");
const stt = await client.audio.transcriptions.create({
  model: "openai/whisper-large-v3-turbo",
  file: createReadStream("input.mp3"),
});
console.log("transcript:", stt.text);

console.log("synthesizing output.mp3 ...");
const tts = await client.audio.speech.create({
  model: "deepgram/aura-2-en",
  voice: "orion",
  input: stt.text,
});

const buf = Buffer.from(await tts.arrayBuffer());
const ws = createWriteStream("output.mp3");
ws.write(buf);
ws.end();
ws.on("finish", () => console.log("wrote output.mp3"));
