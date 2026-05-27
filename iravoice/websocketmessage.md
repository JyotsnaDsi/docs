# WebSocket Message Model

The WebSocket connection carries both **TEXT** and **BINARY** frames:

* **TEXT frames** → JSON-encoded control messages and events
* **BINARY frames** → Raw audio stream (16-bit Linear PCM)

IraVoice streams customer audio to your AI orchestration and expects bot audio to be streamed back on the same connection.


## Message Types Overview

| Direction | Frame Type | Payload Type | Description |
| --- | --- | --- | --- |
| IraVoice → AI Orchestration | TEXT | JSON | Call metadata, Call events |
| IraVoice → AI Orchestration | BINARY | PCM audio | Customer audio stream |
| AI Orchestration → IraVoice | BINARY | PCM audio | Bot audio stream |
| AI Orchestration → IraVoice | TEXT | JSON | Audio Control, Send DTMF |



## 1. Call Metadata (Initial TEXT JSON Message)

Immediately after connection establishment, IraVoice sends a JSON payload containing call metadata:

```json
{
    "call_uuid": "8288ef17-3ab9-4745-b6b5-699dcdf4d7cf",
    "tenant_id": "acme",
    "call_type": "outbound",
    "to_number": "9876543210",
    "from_number": "1234567890",
    "read_sampling_rate": 8000,
    "write_sampling_rate": 8000,
    "call_params": {}
}
````

| Field                 | Type    | Description                                   |
| --------------------- | ------- | --------------------------------------------- |
| `call_uuid`           | string  | Unique identifier for the call                |
| `tenant_id`           | string  | Tenant or account identifier                  |
| `call_type`           | string  | `inbound` or `outbound`                       |
| `to_number`           | string  | Destination phone number                      |
| `from_number`         | string  | Source phone number                           |
| `read_sampling_rate`  | integer | Sampling rate for incoming audio              |
| `write_sampling_rate` | integer | Sampling rate for outgoing audio              |
| `call_params`         | object  | Optional parameters controlling call behavior |

---

## 2. Call Events (TEXT JSON)

IraVoice sends call events as JSON messages. Each event includes an `event` field indicating its type.

IraVoice does DSP based VAD analysis on the server side and sends the VAD events.

* **speech** → User starts speaking
* **silence** → User stops speaking

### Supported Events

| Event Name     | Description                |
| -------------- | -------------------------- |
| `speech`       | User speech detected       |
| `silence`      | Silence detected           |
| `play_paused`  | Bot audio playback paused  |
| `play_stopped` | Bot audio playback stopped |
| `play_done`    | Bot playback completed     |
| `dtmf`         | DTMF input received        |

#### Example Event Payload

```json
{
    "event": "speech",
    "call_uuid": "1ca28004-175a-402f-92d4-2fc25df35dc8",
    "energy": 2030,
    "tenant_id": "acme",
    "call_params": {
        "client_id": "1234",
        "streaming_useraudio": true,
        "websocket_app": "/",
        "websocket_host": "172.18.1.18",
        "websocket_port": 11005
    }
}
```

---

## 3. Customer Audio Stream (BINARY Messages)

* If `call_params.streaming_useraudio` is `true`, audio is streamed as **16-bit Linear PCM**.
* If `false`, audio is buffered and sent as a WAV file in a single chunk when the user stops speaking (as indicated by VAD events).
* Sampling rate configurable via `call_params.stt_sampling_rate`.
* If not specified, it defaults to the `read_sampling_rate` sent in the initial metadata message.
* Chunking is time-based (not fixed packet count).

### Audio Chunking

| Parameter          | Value                              |
| ------------------ | ---------------------------------- |
| Default chunk size | 200 ms                             |
| 8 kHz chunk size   | 3200 bytes                         |
| 16 kHz chunk size  | 6400 bytes                         |
| Configurable via   | `call_params.stream_frame_size_ms` |

#### Example

| Frame Size (ms) | 8 kHz Bytes | 16 kHz Bytes |
| --------------- | ----------- | ------------ |
| 20 ms           | 320 bytes   | 640 bytes    |
| 200 ms          | 3200 bytes  | 6400 bytes   |

---

## 4. Bot Audio Stream (BINARY Messages)

Your AI orchestration must stream bot-generated audio back over the same WebSocket connection.

You do not have to control the rate of streaming; simply send audio as it is generated. IraVoice will handle playback timing and buffering.

| Requirement   | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| Format        | 16-bit Linear PCM                                                 |
| Direction     | AI Orchestration → IraVoice                                       |
| Sampling rate | Must match the rate configured in `call_params.tts_sampling_rate` |

:::info
### Important

* If your TTS output is at a different sampling rate than the call sampling rate, you must configure the `call_params.tts_sampling_rate` to match your TTS output rate.
* IraVoice will handle resampling to match the call's sampling rate.
* Mismatched sampling rates will result in distorted playback.
:::


## 5. Audio Control, Send DTMF (TEXT JSON Messages)

Your AI orchestration sends a JSON message with the following schema to control audio playback or send DTMF tones to the call:

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "request": {
            "type": "string",
            "enum": [
                "pause_play",
                "resume_play",
                "clear_play",
                "send_dtmf"
            ]
        },
        "digits": {
            "type": "string",
            "pattern": "^[0-9*#]+$",
            "minLength": 1
        }
    },
    "required": ["request"]
}
```

Audio Control APIs (`pause_play`, `resume_play`, `clear_play`) are designed to manage bot speech playback dynamically in response to real-time user input, typically driven by Voice Activity Detection (VAD) events.

---

### Typical Interaction Flow

### 1. User Starts Speaking (VAD Trigger)

When VAD detects that the customer has started speaking:

* A JSON `speech` event will be sent to your AI Orchestration.
* If the bot is actively playing audio:

```json
{
    "request": "pause_play"
}
```

This immediately pauses bot playback and prevents overlap.

---

### 2. Short Interjection

If the user input is classified as a short, non-interrupting interjection:

```json
{
    "request": "resume_play"
}
```

This resumes playback from the paused position.

---

### 3. New User Query / Intent Change

If the user input represents a new question or meaningful interruption:

```json
{
    "request": "clear_play"
}
```

This:

* Stops playback
* Clears buffered audio
* Allows fresh response generation

---

### Playback Behavior Summary

| Scenario                          | Action       | API Call      |
| --------------------------------- | ------------ | ------------- |
| User interrupts (starts speaking) | Pause audio  | `pause_play`  |
| Short interjection                | Resume audio | `resume_play` |
| New question / intent change      | Stop audio   | `clear_play`  |


:::info
### Notes

* Once `pause_play` is called, any new audio chunks received from your AI Orchestration will be buffered until the 20s buffer limit is reached.
* After that, IraVoice will drop additional chunks.
* If `resume_play` is called, playback resumes from the paused point, including buffered audio.
* If `clear_play` is called, playback stops and buffered audio is discarded.
* The next audio chunk received after `clear_play` will be played immediately.
* Classification of “short interjection” vs “new query” should be handled upstream.

This model ensures natural interruption-aware conversational behavior and prevents the bot from talking over the user.
:::

:::tip
## Key Takeaways

* Use **TEXT frames** strictly for control and events.
* Use **BINARY frames** strictly for audio streaming.
* Maintain strict adherence to PCM format and sampling rate.
* Treat the WebSocket as a **bidirectional real-time audio + signaling channel**.

This structure ensures predictable framing, low-latency streaming, and compatibility with IraVoice playback systems.
:::
