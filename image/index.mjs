// AIgateway · image generation starter

import OpenAI from "openai";
import { writeFileSync } from "node:fs";

const client = new OpenAI({
  baseURL: "https://api.aigateway.sh/v1",
  apiKey: process.env.AIGATEWAY_API_KEY,
});

const out = await client.images.generate({
  model: "black-forest-labs/flux-1-schnell",
  prompt: "a cyberpunk reading nook at golden hour, cinematic, 35mm",
  size: "1024x1024",
  n: 1,
});

const b64 = out.data?.[0]?.b64_json;
if (b64) {
  writeFileSync("out.png", Buffer.from(b64, "base64"));
  console.log("wrote out.png");
} else if (out.data?.[0]?.url) {
  console.log("image url:", out.data[0].url);
}
