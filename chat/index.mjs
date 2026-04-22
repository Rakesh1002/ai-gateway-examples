// AIgateway · chat starter
//
// Streaming chat completion using the OpenAI SDK with our base URL.
// Swap the `model` to any provider/model slug from the catalog.
//
//   $ AIGATEWAY_API_KEY=sk-aig-... node index.mjs

import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.aigateway.sh/v1",
  apiKey: process.env.AIGATEWAY_API_KEY,
});

const stream = await client.chat.completions.create({
  model: "moonshot/kimi-k2.6", // free through Apr 30, 2026
  messages: [
    { role: "system", content: "You are a precise, concise senior engineer." },
    { role: "user", content: "Explain edge inference in 50 words." },
  ],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
}
process.stdout.write("\n");
