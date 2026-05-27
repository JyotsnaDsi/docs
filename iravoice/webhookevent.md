# Webhook Event URL Payload

If `event_url` is present in the `call_params` of the `makecall` or `makecalldirect` API, IraVoice sends call lifecycle events to that URL as HTTP `POST` requests with a JSON payload.

---

## Webhook Payload Schema

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "event_name": {
            "type": "string",
            "enum": [
                "iravoice::started",
                "iravoice::ringing",
                "iravoice::answered",
                "iravoice::botaudio_stream_started",
                "iravoice::speech",
                "iravoice::silent",
                "iravoice::play_paused",
                "iravoice::play_stopped",
                "iravoice::play_done",
                "iravoice::dtmf",
                "iravoice::hangup",
                "iravoice::stream_stopped",
                "iravoice::call_quality"
            ]
        },

        "event_data": {
            "type": "object",
            "properties": {
                "timestamp": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Timestamp of the event in ISO 8601 format."
                },
                "call_uuid": {
                    "type": "string",
                    "description": "Unique identifier for the call."
                },
                "call_params": {
                    "type": "object",
                    "description": "Call parameters."
                },
                "tenant_id": {
                    "type": "string",
                    "description": "Tenant identifier."
                },
                "call_type": {
                    "type": "string",
                    "enum": ["inbound", "outbound"],
                    "description": "Type of the call."
                },
                "to_number": {
                    "type": "string",
                    "description": "Number to which the call is directed."
                },
                "from_number": {
                    "type": "string",
                    "description": "Number from which the call is initiated."
                }
            },
            "required": [
                "timestamp",
                "call_uuid",
                "call_params"
            ],
            "additionalProperties": true
        }
    },
    "required": [
        "event_name",
        "event_data"
    ],
    "additionalProperties": false
}
````

---

## Supported Event Types

| Event Name                          | Description                 |
| ----------------------------------- | --------------------------- |
| `iravoice::started`                 | Call session initialized    |
| `iravoice::ringing`                 | Destination ringing         |
| `iravoice::answered`                | Call answered               |
| `iravoice::botaudio_stream_started` | Bot audio streaming started |
| `iravoice::speech`                  | User speech detected        |
| `iravoice::silent`                  | Silence detected            |
| `iravoice::play_paused`             | Bot playback paused         |
| `iravoice::play_stopped`            | Bot playback stopped        |
| `iravoice::play_done`               | Bot playback completed      |
| `iravoice::dtmf`                    | DTMF digit received         |
| `iravoice::hangup`                  | Call disconnected           |
| `iravoice::stream_stopped`          | WebSocket stream stopped    |
| `iravoice::call_quality`            | Call quality metrics event  |

---

## Common Payload Fields

| Field         | Type     | Description                        |
| ------------- | -------- | ---------------------------------- |
| `event_name`  | `string` | Type of event emitted              |
| `timestamp`   | `string` | Event timestamp in ISO 8601 format |
| `call_uuid`   | `string` | Unique call identifier             |
| `tenant_id`   | `string` | Tenant/account identifier          |
| `call_type`   | `string` | `inbound` or `outbound`            |
| `call_params` | `object` | Original call parameters           |
| `to_number`   | `string` | Destination number                 |
| `from_number` | `string` | Caller ID                          |

---

## Example: Ringing Event

```json
{
  "event_name": "iravoice::ringing",
  "event_data": {
    "tenant_id": "acme",
    "call_uuid": "df4208f0-dee3-41e8-8fef-015a5ed81c72",
    "call_params": {
      "campaign": "license port test",
      "event_url": "https://epicodetest.webhookcatcher.com/iravoice/",
      "websocket_host": "172.18.1.18",
      "websocket_port": 11005,
      "websocket_app": "/"
    },
    "dialer_ip": "172.18.3.15",
    "gateway": "vestfonel",
    "call_type": "outbound",
    "direction": "outbound",
    "network_ip": "172.18.1.16",
    "timestamp": "2026-04-23T06:55:33.465144Z"
  }
}
```

---

## Example: Answered Event

```json
{
  "event_name": "iravoice::answered",
  "event_data": {
    "call_uuid": "f7baf8b7-0bfc-421e-9aa1-def46e7a676c",
    "tenant_id": "acme",
    "call_params": {
      "campaign": "license port test",
      "event_url": "https://epicodetest.webhookcatcher.com/iravoice/",
      "websocket_host": "172.18.1.18",
      "websocket_port": 11005,
      "websocket_app": "/"
    },
    "call_type": "outbound",
    "to_number": "9876543210",
    "from_number": "+917890123456",
    "gateway": "vestfone1",
    "read_sampling_rate": 8000,
    "write_sampling_rate": 8000,
    "timestamp": "2026-04-23T06:55:48.713392Z"
  }
}
```

---

## Delivery Behavior

* Webhooks are sent as HTTP `POST` requests.
* Payload format is always JSON.
* Events are emitted asynchronously during the call lifecycle.
* Additional event-specific fields may be included depending on the event type.


:::info
### Notes

* `event_url` must be reachable publicly by IraVoice.
* Webhook delivery occurs independently of WebSocket streaming.
* `call_params` are echoed back in webhook events for contextual correlation.
* Consumers should tolerate additional fields in `event_data`.

:::

