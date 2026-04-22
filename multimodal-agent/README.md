# multimodal-agent — vision → tool call → TTS in 50 lines

Drop a JPG in this folder as `photo.jpg`, then:

```sh
pip install -r requirements.txt
AIGATEWAY_API_KEY=sk-aig-... python agent.py
# answer: a cozy reading nook at golden hour with a cat ...
# wrote out.mp3
```

Three models, one client, one key. Swap any of:
- vision: `openai/gpt-5.4` · `google/gemini-3.1-pro`
- TTS: `openai/tts-1-hd` · `elevenlabs/turbo-v2.5`
