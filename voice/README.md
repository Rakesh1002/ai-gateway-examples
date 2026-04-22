# voice — STT → TTS round-trip

Drop a short MP3 in this folder as `input.mp3`, then:

```sh
cp .env.example .env
pnpm install
pnpm start
# transcript: ...
# wrote output.mp3
```

STT alternatives: `deepgram/nova-3`, `openai/gpt-4o-transcribe`. TTS alternatives: `openai/tts-1-hd`, `elevenlabs/turbo-v2.5`.
