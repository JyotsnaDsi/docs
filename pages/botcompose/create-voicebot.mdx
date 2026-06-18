# Creating a Voicebot

BotCompose enables you to build and launch AI-powered voicebots by integrating your preferred Speech-to-Text (STT), Large Language Model (LLM), and Text-to-Speech (TTS) providers.

The voicebot creation process involves:

* Procuring API credentials from your preferred AI providers
* Securely storing provider credentials using the `/add_secret` API
* Creating and configuring the voicebot using the `/add_bot` API
* Optionally enabling tool calling for external integrations and workflow automation
* Optionally pre-generating and caching TTS responses to reduce response latency

BotCompose provides built-in plugins for several STT, LLM, and TTS providers, allowing you to mix and match services based on your use case, performance requirements, and pricing preferences.

> **Last Updated:** 19 January 2025

![](/docs/botcompose.png)



Before creating a voicebot, you must obtain credentials from the AI providers you intend to use and register those credentials with BotCompose.


<Stepper>

1. ## Obtain Provider API Keys

    Create accounts with your preferred STT, LLM, and TTS providers and procure the required API credentials.

    A typical voicebot requires:

    * One or more **STT provider** for Speech-to-Text
    * One or more **LLM provider** for conversational intelligence
    * One or more **TTS provider** for Text-to-Speech

2. ## Add Provider Credentials

    Once you have obtained the required API keys, add them to the BotCompose secrets inventory using the `/add_secret` API endpoint.

    Secrets stored in the inventory can be securely referenced during bot creation without exposing provider credentials in your bot configuration.

    :::note
    For more information, refer to the [**Add Secret API Reference**](/botcomposeapi/add-secret).
    :::


3. ## Create the Voicebot

    After adding the required secrets, create and configure your voicebot using the `/add_bot` API endpoint.

    Within the bot configuration payload, specify:

    * The STT plugin to use
    * The LLM plugin to use
    * The TTS plugin to use
    * References(secret_name) to the secrets added in the previous step
    * Any provider-specific configuration such as models, voices, languages, or endpoint URLs

    :::note
    For detailed information on supported configuration fields and payload examples, refer to the [**Add Bot API Reference**](/botcomposeapi/add-bot).
    :::

4. ## Configure Tool Calling

    BotCompose supports tool calling, allowing your voicebot to invoke external APIs, perform actions, fetch data, and execute business workflows during conversations.

    Tool definitions can be configured in one of two ways:

    ### Option 1: Configure During Bot Creation

    Tool calling configuration can be included directly within the `/add_bot` request payload when creating the voicebot.

    This approach is recommended when the tool definitions are known during bot setup and should remain tightly coupled with the bot configuration.

    ### Option 2: Configure Separately

    Tool definitions can also be managed independently using the `/tool_call_payload` API endpoint.

    This approach is useful when:

    * Tool definitions need to be updated as the calls happen.
    * Multiple bots share the same tools
    * Tool configurations are managed dynamically by external systems

    :::note
    For detailed information on tool definitions, refer to the [**Tool Calling API**](/botcomposeapi/tool-calling).
    :::

5. ## Configure TTS Response Cache

   BotCompose supports pre-generating and caching TTS audio for frequently used bot responses. 
   This helps reduce response latency by serving pre-generated audio instead of synthesizing speech during the call.

   Common use cases include:

   * Greetings and welcome messages
   * Compliance disclosures
   * Hold messages
   * Frequently repeated prompts
   * Closing statements

   TTS cache entries can be configured in one of two ways:

   ### Option 1: Configure During Bot Creation

   TTS cache definitions can be included directly within the `/add_bot` request payload when creating the voicebot.

   This approach is recommended when the cached responses are known during bot setup and should be deployed alongside the bot configuration.

   ### Option 2: Configure Separately

   TTS cache entries can also be added or updated independently using the `/populate_tts_cache` API endpoint.

   This approach is useful when:

   * New cached responses need to be added after deployment
   * Existing cached phrases need to be updated
   * Multiple bots share common pre-generated responses
   * Cache content is managed dynamically by external systems

   When a cached response is available, BotCompose can serve the pre-generated audio directly, reducing TTS generation overhead and improving response times.

    :::note
    For detailed information, refer to [**Populate TTS Cache API**](/botcomposeapi/populate-tts-cache).
    :::

</Stepper>
---

## Speech-to-Text (STT) Plugins

The following STT plugins are available for converting user speech into text:

| Plugin Name          | Description                       |
| -------------------- | --------------------------------- |
| `deepgram`           | Deepgram Speech-to-Text           |
| `deepgram_streaming` | Deepgram Streaming Speech-to-Text |
| `sarvam`             | Sarvam AI Speech-to-Text          |
| `azure`              | Microsoft Azure Speech Services   |
| `google`             | Google Speech-to-Text             |



## Text-to-Speech (TTS) Plugins

The following TTS plugins are available for converting bot responses into speech:

| Plugin Name  | Description                     |
| ------------ | ------------------------------- |
| `elevenlabs` | ElevenLabs Text-to-Speech       |
| `openai`     | OpenAI Text-to-Speech           |
| `google`     | Google Cloud Text-to-Speech     |
| `azure`      | Microsoft Azure Speech Services |
| `sarvam`     | Sarvam AI Text-to-Speech        |
| `Smallestai` | Smallest AI Text-to-Speech      |
| `Cartesia`   | Cartesia Text-to-Speech         |



## Large Language Model (LLM) Plugins

### `openai_like`

The `openai_like` plugin provides a unified interface for integrating with OpenAI-compatible APIs.

To use a supported provider, configure the appropriate `base_url` in the plugin configuration.

### Supported Providers

| Provider                        | Supported |
| ------------------------------- | --------- |
| OpenAI                          | ✅         |
| Azure OpenAI / Azure AI Foundry | ✅         |
| Groq                            | ✅         |
| Fireworks.ai                    | ✅         |
| Hugging Face Inference Router   | ✅         |
| Vercel AI Gateway               | ✅         |


