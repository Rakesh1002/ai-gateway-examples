# chat — streaming completion in 15 lines

```sh
cp .env.example .env       # then put your sk-aig-... key in
pnpm install
pnpm start
```

Output streams to stdout. To swap models, change one string:

```js
model: "anthropic/claude-opus-4.7",   // or
model: "openai/gpt-5.4",               // or
model: "google/gemini-3.1-pro",
```

[Browse all 150 models →](https://aigateway.sh/models)
