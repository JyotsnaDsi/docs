# BotCompose Sandbox

BotCompose is a VoiceBot orchestration engine designed to integrate seamlessly with existing PBX, UC, and Contact Center platforms. It replaces rigid IVR flows with natural conversational AI while staying flexible, performant, and vendor-agnostic across STT, TTS, and LLM components..

:::note
**Base URL:** https://sandboxwa.epicode.in/api/
:::

:::note
[Click here](/botcomposeapi) for **Botcompose API documentation**.
:::

To begin using botcompose from our sandbox environment, you will be provided with below details:

- Tenant Id
- API credentials (Bearer token:xyz)

These credentials should be used exclusively for testing purposes.

## Steps to create a voice bot using BotCompose

<Stepper>
1. [**Add Provider Secrets**](/botcomposeapi/add-secret): Add the STT, TTS, and LLM credentials of the model providers you have procured. 
2. [**Create the Voicebot**](/botcomposeapi/add-bot): Configure and create your voicebot using the required parameters. 

</Stepper>


:::tip
### BotCompose Sample Script

You can also refer to [BotCompose Sample Script](/botcompose/botcomposescript) for testing purposes.
:::


## Testing the Voicebot

Once your voicebot is created and configured, you can validate its performance using an **IraVoice outbound call**.  
The outbound call will directly connect to the voicebot you’ve built, allowing end-to-end functional testing.

You will be provided with below details over the mail:

- Tenant Id
- API Credentials (Bearer token: abc)
- Campaign Name
- From Number (DID Number)

**Sample CURL request for initiating a MakeCall using a BotCompose-configured voice bot** 

```
curl --location 'https://sandboxld.epicode.in/api/makecall' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer <Bearer token>' \
 --data '{  
    "campaign_name": "<campaign_name>",  
    "tenant_id": "<tenant_id>",  
    "from_number": "<from_number>",  
    "to_number": "<your-number>",  
    "call_params": {

        "bot_id": "<unique-name-of-your-voicebot>",  
        "call_type":"botcompose",

        "streaming_useraudio": false,  
        "event_url" : "<your-http-endpoint>"  
    }  
}'
```
:::note
[Click here](/api) for **IraVoice API documentation**.
:::

- API request endpoint for integration testing : https://sandboxld.epicode.in/api/makecall 
- For more details on [**Make Call request parameters**](/api/makecall-make-outbound-call)
- To connect to the newly created **voicebot**, you must specify the following **within** **call_params**:   
  - Include "**bot_id**" : "**unique-name-of-your-voicebot**" which was created using BotCompose APIs.
  - Remove the fields **websocket_host**, **websocket_port** and **websocket_app** and use  "**call_type**":"**botcompose**" field instead.
  - Set "**streaming_useraudio**": **false** if you are using **Non-streaming STT**.
- Should you require access to CDR transcripts from BotCompose, Call Recordings, or the Live Call Monitor, please let us know.


:::tip
### Frequently Asked questions

For common doubts and queries with BotCompose please refer to [BotCompose FAQ's](https://epicode.in/botcompose#FAQs).
:::


