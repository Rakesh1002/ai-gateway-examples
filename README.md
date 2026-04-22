# AIgateway examples

Five copy-paste-ready starter projects, each smaller than 100 lines. Same key, every modality.

| Folder | What | Run |
|---|---|---|
| [`chat/`](./chat) | Streaming chat completion through any of 150 models | `cd chat && pnpm i && pnpm start` |
| [`image/`](./image) | One-shot image generation (FLUX, Stable Diffusion, Imagen) | `cd image && pnpm i && pnpm start` |
| [`voice/`](./voice) | Speech-to-text + text-to-speech round-trip (Whisper → Aura) | `cd voice && pnpm i && pnpm start` |
| [`embeddings/`](./embeddings) | Encode + cosine-similarity with BGE M3 | `cd embeddings && pnpm i && pnpm start` |
| [`multimodal-agent/`](./multimodal-agent) | Vision → tool call → TTS in 50 lines (`aigateway-py`) | `cd multimodal-agent && pip install -r requirements.txt && python agent.py` |

## One-time setup

Get a key at [aigateway.sh/signin](https://aigateway.sh/signin) (free, no card). Set it once:

```sh
export AIGATEWAY_API_KEY=sk-aig-...
```

Then any example below runs with that env var in scope.

## One-click Vercel deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRakesh1002%2Fai-gateway-examples%2Ftree%2Fmain%2Fchat&env=AIGATEWAY_API_KEY&envDescription=Get%20one%20at%20aigateway.sh%2Fsignin&envLink=https%3A%2F%2Faigateway.sh%2Fsignin&project-name=aigateway-chat-starter&repository-name=aigateway-chat-starter)

Click → fork the public examples repo → set `AIGATEWAY_API_KEY` → live in 60 seconds. Swap `chat` in the URL with `image`, `voice`, `embeddings`, or `multimodal-agent` for the other starters.

## Why these five

They cover the four modalities every AI app eventually touches (text, image, voice, embeddings) plus one composed agent that chains three of them. Once you've forked one, swapping models / providers is one string change.

If you build something interesting, email **hello@aigateway.sh** with a link — we publish a `customers/` showcase from real use.

## Bug reports + feature requests

**support@aigateway.sh** · [@buildwithrakesh](https://x.com/buildwithrakesh) · [LinkedIn](https://www.linkedin.com/in/rakeshroushan1002)

## License

MIT
