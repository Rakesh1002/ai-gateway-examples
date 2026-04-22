// AIgateway · embeddings + cosine similarity starter

import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.aigateway.sh/v1",
  apiKey: process.env.AIGATEWAY_API_KEY,
});

const docs = [
  "AIgateway is one OpenAI-compatible API for every model.",
  "FedEx delivers packages overnight to most US zip codes.",
  "Sub-accounts let you mint scoped keys with spend caps.",
];
const query = "How do I bill my customers per-user for AI usage?";

const out = await client.embeddings.create({
  model: "baai/bge-m3",
  input: [query, ...docs],
});

const [qv, ...dvs] = out.data.map((d) => d.embedding);

function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; na += a[i] ** 2; nb += b[i] ** 2; }
  return dot / Math.sqrt(na * nb);
}

const ranked = docs
  .map((doc, i) => ({ doc, score: cosine(qv, dvs[i]) }))
  .sort((a, b) => b.score - a.score);

console.log("query:", query);
for (const r of ranked) console.log(r.score.toFixed(3), "·", r.doc);
