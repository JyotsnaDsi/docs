# Vapi-IraVoice Integration 

## Overview

IraVoice can integrate with Vapi using Vapi's WebSocket transport mechanism. This integration allows IraVoice to connect live PSTN calls to a Vapi voicebot over a secure WebSocket (WSS) connection.

When a call is answered, IraVoice requests a dynamically generated WebSocket URL from your application. Your application is responsible for creating a Vapi WebSocket session and returning the corresponding WSS URL to IraVoice.

---

## Integration Flow

1. An inbound or outbound call is established through IraVoice.
2. Once the call is answered, IraVoice sends an HTTP POST request to your configured endpoint.
3. Your application creates a new Vapi WebSocket transport session.
4. Vapi returns a dynamic WebSocket URL.
5. Your application returns this WSS URL in the HTTP response.
6. IraVoice connects to the returned WebSocket endpoint and begins streaming audio between the caller and the Vapi voicebot.



<Mermaid
  chart={`
    sequenceDiagram
      participant Caller
      participant IraVoice
      participant CE as Customer Endpoint
      participant Vapi
      participant Bot as Vapi Voicebot

      Caller->>IraVoice: Incoming Call
      IraVoice->>CE: POST Request
      CE->>Vapi: Create WebSocket Session
      Vapi-->>CE: Dynamic WSS URL
      CE-->>IraVoice: Return WSS URL
      IraVoice->>Bot: Connect to WSS URL
  `}
/>

---

## Creating a Vapi WebSocket Session

Your application must create a WebSocket session using the Vapi Call API.

### Sample Request

```bash
curl 'https://api.vapi.ai/call' \
  -H 'authorization: Bearer YOUR_API_KEY' \
  -H 'content-type: application/json' \
  --data-raw '{
    "assistantId": "YOUR_ASSISTANT_ID",
    "transport": {
      "provider": "vapi.websocket",
      "audioFormat": {
        "format": "pcm_s16le",
        "container": "raw",
        "sampleRate": 16000
      }
    }
  }'
```

The response contains a dynamically generated WebSocket URL that can be used to connect the call audio stream to the Vapi assistant.

:::note
**Refer to**: https://docs.vapi.ai/calls/websocket-transport
:::

---

## Endpoint Requirements

You must expose an HTTP endpoint that IraVoice can invoke when a call is answered.

### Sample Endpoint

```http
POST /vapi/wss-url
```

### Request from IraVoice

IraVoice sends a POST request to your endpoint after the call has been answered.

Example:

```json
{
  "call_uuid": "12345678-abcd-1234-abcd-1234567890ab"
}
```

> The exact payload may vary depending on your implementation requirements.

---

## Expected Response

Example Response:

```json
{
  "call_uuid": "12345678-abcd-1234-abcd-1234567890ab",
  "wss_url": "wss://your-vapi-generated-websocket-url"
}
```

---

:::note
## Important Considerations

* A new WebSocket URL should be generated for every call.
* The returned URL must be valid and immediately accessible by IraVoice.
* The voicebot application must stream audio to IraVoice over WebSocket in the following format:
    * PCM (signed 16-bit)
    * Sampling rate: 8 kHz or 16 kHz  
* Ensure that your endpoint responds quickly to avoid delays in call setup.
* Any authentication required for invoking your endpoint should be coordinated during the integration process.
:::

