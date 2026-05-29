# Bridge Call to Agent


This guide explains how to transfer an active customer call from a voice bot to a human agent using IraVoice.

Two transfer mechanisms are supported:

1. **Blind Transfer** – The voice bot disconnects before the agent is contacted. Once the agent answers, the customer and agent calls are bridged together.
2. **Assisted Transfer** – The voice bot remains connected to the customer while an agent is contacted in parallel. The transfer occurs only after the agent answers.

Choose the transfer method based on your desired customer experience and business workflow.

---

## 1. Blind Transfer

In a blind transfer, the voice bot disconnects from the customer before the agent is contacted. The customer is transferred only if the agent successfully answers.

### Step 1: Stop Voice Bot Streaming

Disconnect the voice bot from the customer call to prevent any further interaction during the transfer process.

```http
POST /api/stopstream

{
  "call_uuid": "<customer_call_uuid>"
}
```

---

### Step 2: Initiate the Agent Call

Create a new outbound call to the agent.

:::note
**Important:**

* Generate a unique `call_uuid` for the agent leg.
* Use the appropriate SIP gateway configured for your deployment.
* Disable streaming and recording for the agent leg.
:::

```http
POST /api/makecallnow

{
  "gateway": "sofia/gateway/epi-poc-trunk",
  "from_number": "<your_number>",
  "to_number": "<agent_number>",
  "tenant_id": "<tenant_id>",
  "call_uuid": "<agent_call_uuid>",
  "call_params": {
    "disable_streaming": true,
    "disable_recording": true,
    "event_url": "<event_url>"
  }
}
```

---

### Step 3: Wait for Agent Answer

Monitor the configured `event_url` for call events.

Proceed with the transfer only after receiving an:

```text
iravoice::answered
```

event for the agent call.

---

### Step 4: Bridge the Calls

Once the agent answers, bridge the customer call and the agent call.

```http
POST /api/bridgecalls

{
  "first_uuid": "<customer_call_uuid>",
  "second_uuid": "<agent_call_uuid>"
}
```

#### Result

The customer and agent are connected directly, and the transfer process is complete.


:::tip
### Agent Unavailable Scenario

If the agent does not answer, is busy, or the call fails (identified through the `iravoice::hangup` event):

* Keep the voice bot active.
* Play a fallback message to the customer.
* Optionally retry another agent.
* Disconnect the call if no agent is available.
:::

---

## 2. Assisted Transfer

In an assisted transfer, the voice bot remains connected to the customer while an agent is contacted in parallel. This provides a smoother customer experience because the caller remains engaged during the transfer process.

### Step 1: Inform the Customer

Continue streaming through the voice bot and play a transfer message such as:

> "Please wait while we connect you to an agent."

---

### Step 2: Initiate the Agent Call

Place a parallel call to the agent while the customer remains connected to the voice bot.

```http
POST /api/makecallnow

{
  "campaign_name": "<campaign_name>",
  "from_number": "<your_number>",
  "to_number": "<agent_number>",
  "tenant_id": "<tenant_id>",
  "call_params": {
    "disable_streaming": true,
    "disable_recording": true,
    "event_url": "<event_url>"
  }
}
```

---

### Step 3: Monitor Agent Response

Use the configured `event_url` to monitor the status of the agent call.

#### Case A: Agent Answers

#### Stop Voice Bot Streaming

```http
POST /api/stopstream

{
  "call_uuid": "<customer_call_uuid>"
}
```

#### Bridge the Calls

```http
POST /api/bridgecalls

{
  "first_uuid": "<customer_call_uuid>",
  "second_uuid": "<agent_call_uuid>"
}
```

#### Result

The customer is seamlessly transferred to the agent after the agent answers.



#### Case B: Agent Does Not Answer

If the agent is unavailable, busy, or the call fails (identified through the `iravoice::hangup` event):

* Keep the voice bot connected.
* Inform the customer that an agent is unavailable.
* Play a fallback message.
* Optionally attempt another agent transfer.
* Disconnect the call if required by your workflow.

---

## Event Monitoring

During both transfer flows, the following events are commonly used:

| Event                 | Purpose                                                     |
| --------------------- | ----------------------------------------------------------- |
| `iravoice::answered`  | Indicates that the agent has answered the call              |
| `iravoice::hangup`    | Indicates call failure, timeout, rejection, or disconnect   |
| `iravoice::bridged`   | Indicates that two call legs have been successfully bridged |
| `iravoice::unbridged` | Indicates that a bridged call has been disconnected         |

---
:::tip
### Best Practices

* Always generate a unique `call_uuid` for the agent leg.
* Disable streaming on the agent leg unless explicitly required.
* Wait for the `iravoice::answered` event before bridging calls.
* Implement timeout handling for unanswered agent calls.
* Provide fallback messaging to avoid leaving customers in silence.
* Log all transfer events for troubleshooting and reporting purposes.
:::