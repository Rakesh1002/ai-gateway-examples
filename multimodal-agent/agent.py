"""AIgateway · multi-modal agent in 50 lines.

Vision → tool call → TTS, all through one key.
Drop a JPG as photo.jpg first, then:

  pip install -r requirements.txt
  AIGATEWAY_API_KEY=sk-aig-... python agent.py
"""

import base64
import json
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.aigateway.sh/v1",
    api_key=os.environ["AIGATEWAY_API_KEY"],
)

# 1. Vision — describe the image
img_b64 = base64.b64encode(open("photo.jpg", "rb").read()).decode()
resp = client.chat.completions.create(
    model="anthropic/claude-opus-4.7",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "What's in this picture? Return one sentence."},
            {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{img_b64}"}},
        ],
    }],
    tools=[{
        "type": "function",
        "function": {
            "name": "answer",
            "description": "Return the final one-sentence answer.",
            "parameters": {
                "type": "object",
                "properties": {"text": {"type": "string"}},
                "required": ["text"],
            },
        },
    }],
    tool_choice={"type": "function", "function": {"name": "answer"}},
)
answer = json.loads(resp.choices[0].message.tool_calls[0].function.arguments)["text"]
print("answer:", answer)

# 2. TTS — speak the answer
with client.audio.speech.with_streaming_response.create(
    model="deepgram/aura-2-en",
    voice="orion",
    input=answer,
) as r:
    r.stream_to_file("out.mp3")
print("wrote out.mp3")
