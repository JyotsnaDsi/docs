var e=Array.from({length:9},()=>({})),t={"#/components/schemas/MakeCall":e[0],"#/components/schemas/MakeCallResponse":e[1],"#/components/schemas/HTTPValidationError":e[2],"#/components/schemas/MakeCallDirect":e[3],"#/components/schemas/DropCall":e[4],"#/components/schemas/StopStream":e[5],"#/components/schemas/BridgeCalls":e[6],"#/components/schemas/TransferCall":e[7],"#/components/schemas/ValidationError":e[8]},n=Object.keys(t);Object.assign(e[0],{properties:{campaign_name:{type:`string`,title:``,description:`The unique campaign name created either through API or through the monitor portal.`},from_number:{type:`string`,title:``,description:`Caller ID Number.`,default:``},to_number:{type:`string`,title:``,description:`Destination phone number.`},call_params:{additionalProperties:!0,type:`object`,title:``,description:`Any valid json object. If websocket_host, websocket_port, and websocket_app are set, the media will be streamed to the websocket server.`,default:{disable_recording:!1,stream_on_cpa_events:[`LV`],drop_on_cpa_events:[`FX`,`AM`],stream_frame_size_ms:200,bot_inactivity_limit:0}},channel_vars:{additionalProperties:!0,type:`object`,title:``,description:`List of channel variables including SIP headers. Variables with prefix sip_h_X- will set the SIP headers`,default:{}},cpa_config:{type:`string`,title:``,description:`If call progress analysis is required to detect answering machines, specify the previously configured cpa config name`,default:``},dial_timeout:{type:`integer`,title:``,description:`Timeout for the dialing. If the call is not answered within this time limit, the call will be dropped.`,default:30}},type:`object`,required:[`campaign_name`,`to_number`],title:`MakeCall`}),Object.defineProperty(e[0],`__$ref`,{value:n[0],enumerable:!1}),Object.assign(e[1],{properties:{call_uuid:{anyOf:[{type:`string`},{type:`null`}],title:``,description:`Unique identifier of the call if the request is successfully queued.`},slowdown:{anyOf:[{type:`boolean`},{type:`null`}],title:``,description:`Indicates if the system has a huge queue of pending requests and the client should slow down the rate of API calls. If you get true in this field, we recommend you to stop calling make call API for 60s to avoid hitting the rate limits.`,default:!1},status:{type:`string`,title:``,description:`Status of the API call.`},status_code:{type:`integer`,title:``,description:`Status code of the API response. 0 indicates success, any non-zero value indicates an error.`},cluster:{anyOf:[{type:`string`},{type:`null`}],title:``,description:`The cluster where the call is being processed. If a campaign is using trunks from multiple clusters, this field can be used to identify the cluster for each call.`}},type:`object`,required:[`status`,`status_code`],title:`MakeCallResponse`}),Object.defineProperty(e[1],`__$ref`,{value:n[1],enumerable:!1}),Object.assign(e[2],{properties:{detail:{items:t[`#/components/schemas/ValidationError`],type:`array`,title:`Detail`}},type:`object`,title:`HTTPValidationError`}),Object.defineProperty(e[2],`__$ref`,{value:n[2],enumerable:!1}),Object.assign(e[3],{properties:{cluster:{type:`string`,title:``,description:`Unique ID of the IraVoice cluster`},campaign_name:{type:`string`,title:``,description:`The unique campaign name created either through API or through the monitor portal.`},from_number:{type:`string`,title:``,description:`Caller ID Number.`,default:``},to_number:{type:`string`,title:``,description:`Destination phone number.`},call_params:{additionalProperties:!0,type:`object`,title:``,description:`Any valid json object. If websocket_host, websocket_port, and websocket_app are set, the media will be streamed to the websocket server.`,default:{disable_recording:!1,stream_on_cpa_events:[`LV`],drop_on_cpa_events:[`FX`,`AM`],stream_frame_size_ms:200,bot_inactivity_limit:0}},channel_vars:{additionalProperties:!0,type:`object`,title:``,description:`List of channel variables including SIP headers. Variables with prefix sip_h_X- will set the SIP headers`,default:{}},cpa_config:{type:`string`,title:``,description:`If call progress analysis is required to detect answering machines, specify the previously configured cpa config name`,default:``},dial_timeout:{type:`integer`,title:``,description:`Timeout for the dialing. If the call is not answered within this time limit, the call will be dropped.`,default:30}},type:`object`,required:[`cluster`,`campaign_name`,`to_number`],title:`MakeCallDirect`}),Object.defineProperty(e[3],`__$ref`,{value:n[3],enumerable:!1}),Object.assign(e[4],{properties:{call_uuid:{type:`string`,title:`Call Uuid`}},type:`object`,required:[`call_uuid`],title:`DropCall`}),Object.defineProperty(e[4],`__$ref`,{value:n[4],enumerable:!1}),Object.assign(e[5],{properties:{call_uuid:{type:`string`,title:`Call Uuid`}},type:`object`,required:[`call_uuid`],title:`StopStream`}),Object.defineProperty(e[5],`__$ref`,{value:n[5],enumerable:!1}),Object.assign(e[6],{properties:{first_uuid:{type:`string`,title:``,description:`Unique identifier of the first call.`},second_uuid:{type:`string`,title:``,description:`Unique identifier of the second call.`}},type:`object`,required:[`first_uuid`,`second_uuid`],title:`BridgeCalls`}),Object.defineProperty(e[6],`__$ref`,{value:n[6],enumerable:!1}),Object.assign(e[7],{properties:{call_uuid:{type:`string`,title:`Call Uuid`},destination:{type:`string`,title:`Destination`},deflect:{anyOf:[{type:`boolean`},{type:`null`}],title:`Deflect`,default:!1}},type:`object`,required:[`call_uuid`,`destination`],title:`TransferCall`}),Object.defineProperty(e[7],`__$ref`,{value:n[7],enumerable:!1}),Object.assign(e[8],{properties:{loc:{items:{anyOf:[{type:`string`},{type:`integer`}]},type:`array`,title:`Location`},msg:{type:`string`,title:`Message`},type:{type:`string`,title:`Error Type`},input:{title:`Input`},ctx:{type:`object`,title:`Context`}},type:`object`,required:[`loc`,`msg`,`type`],title:`ValidationError`}),Object.defineProperty(e[8],`__$ref`,{value:n[8],enumerable:!1});var r={openapi:`3.1.0`,info:{title:`IraVoice API`,description:`
IraVoice is a bidirectional media server that brings together Dialer, Recorder, and BotStream modules to enable seamless telephony services for both legacy CX systems and modern conversational AI applications.

# Core Concepts

**🌐 IraVoice Cluster**: A cluster of media servers in one geographical region running IraVoice. Each cluster can be associated with one or more SIP trunks. Typically we recommend multi cluster setup for high availability.

**📡 Trunk**: A SIP trunk configured in IraVoice that connects to a telephony provider. SIP trunk can either be from a Tier 1 carrier or a VNO. Each trunk is associated with one cluster and can be used by one or more campaigns.

**🎯 Campaign**: A logical grouping of one or more trunks from potentially multiple clusters. You can allocate partial capacity and partial caller ID range of each trunk to different campaigns. When a make call request is made for a campaign, the system will pick a trunk and caller ID from that campaign based on the availibility and allotted capacity in real time.

`,version:`2.0.0`,"x-logo":{url:`/static/epicode-logo-web.png`}},servers:[{url:`https://sandboxld.epicode.in/api/`,description:`IraVoice API Server`}],paths:{"/api/makecall":{post:{tags:[`makecall (Make outbound call)`],summary:`Make Call`,operationId:`make_call_api_makecall_post`,requestBody:{content:{"application/json":{schema:t[`#/components/schemas/MakeCall`]}},required:!0},responses:{200:{description:`Call request accepted and scheduled successfully`,content:{"application/json":{schema:t[`#/components/schemas/MakeCallResponse`],example:{status_code:0,slowdown:!1,status:`OK`,call_uuid:`123e4567-e89b-12d3-a456-426614174000`,cluster:`cluster1`}}}},400:{description:`Bad request due to invalid token`,content:{"application/json":{example:{status_code:1,status:`Invalid token`}}}},403:{description:`Forbidden due to campaign not allowed in current hours or cluster down`,content:{"application/json":{example:{status_code:3,status:`This campaign is not allowed outside of production hours 0900-1900`}}}},404:{description:`Not found due to unknown campaign or cluster`,content:{"application/json":{example:{status_code:1,status:`Unknown campaign`}}}},409:{description:`Conflict due to no trunks assigned to the campaign`,content:{"application/json":{example:{status_code:1,status:`No trunks assigned to this campaign`}}}},422:{description:`Validation Error`,content:{"application/json":{schema:t[`#/components/schemas/HTTPValidationError`]}}},500:{description:`Internal server error with exception details`,content:{"application/json":{example:{status_code:1,status:`ExceptionName : Exception message`}}}},503:{description:`Service unavailable due to all clusters for the campaign being unreachable`,content:{"application/json":{example:{status_code:2,status:`All clusters for campaign are unreachable!`}}}}},security:[{HTTPBearer:[]}]}},"/api/makecalldirect":{post:{tags:[`makecalldirect`],summary:`Make Call Direct`,operationId:`make_call_direct_api_makecalldirect_post`,requestBody:{content:{"application/json":{schema:t[`#/components/schemas/MakeCallDirect`]}},required:!0},responses:{200:{description:`Call request accepted and scheduled successfully`,content:{"application/json":{schema:t[`#/components/schemas/MakeCallResponse`],example:{status_code:0,slowdown:!1,status:`OK`,call_uuid:`123e4567-e89b-12d3-a456-426614174000`,cluster:`cluster1`}}}},400:{description:`Bad request due to invalid token`,content:{"application/json":{example:{status_code:1,status:`Invalid token`}}}},403:{description:`Forbidden due to campaign not allowed in current hours or cluster down`,content:{"application/json":{example:{status_code:3,status:`This campaign is not allowed outside of production hours 0900-1900`}}}},404:{description:`Not found due to unknown campaign or cluster`,content:{"application/json":{example:{status_code:1,status:`Unknown campaign`}}}},409:{description:`Conflict due to no trunks assigned to the campaign`,content:{"application/json":{example:{status_code:1,status:`No trunks assigned to this campaign`}}}},422:{description:`Validation Error`,content:{"application/json":{schema:t[`#/components/schemas/HTTPValidationError`]}}},500:{description:`Internal server error with exception details`,content:{"application/json":{example:{status_code:1,status:`ExceptionName : Exception message`}}}},503:{description:`Service unavailable due to all clusters for the campaign being unreachable`,content:{"application/json":{example:{status_code:2,status:`All clusters for campaign are unreachable!`}}}}},security:[{HTTPBearer:[]}]}},"/api/dropcall":{post:{tags:[`dropcall`],summary:`Drop Call`,operationId:`drop_call_api_dropcall_post`,requestBody:{content:{"application/json":{schema:t[`#/components/schemas/DropCall`]}},required:!0},responses:{200:{description:`Request processed successfully`,content:{"application/json":{schema:{},example:{status_code:0,status:`OK`}}}},400:{description:`Bad request due to invalid token`,content:{"application/json":{example:{status_code:1,status:`Invalid token`}}}},404:{description:`Not found due to unknown call_uuid`,content:{"application/json":{example:{status_code:1,status:`Unknown call_uuid`}}}},422:{description:`Validation Error`,content:{"application/json":{schema:t[`#/components/schemas/HTTPValidationError`]}}},500:{description:`Internal server error with exception details`,content:{"application/json":{example:{status_code:1,status:`ExceptionName : Exception message`}}}},503:{description:`Service unavailable due to clusters for the call being unreachable`,content:{"application/json":{example:{status_code:2,status:`Cluster unreachable!`}}}}},security:[{HTTPBearer:[]}]}},"/api/stopstream":{post:{tags:[`stopstream`],summary:`Stop Stream`,operationId:`stop_stream_api_stopstream_post`,requestBody:{content:{"application/json":{schema:t[`#/components/schemas/StopStream`]}},required:!0},responses:{200:{description:`Request processed successfully`,content:{"application/json":{schema:{},example:{status_code:0,status:`OK`}}}},400:{description:`Bad request due to invalid token`,content:{"application/json":{example:{status_code:1,status:`Invalid token`}}}},404:{description:`Not found due to unknown call_uuid`,content:{"application/json":{example:{status_code:1,status:`Unknown call_uuid`}}}},422:{description:`Validation Error`,content:{"application/json":{schema:t[`#/components/schemas/HTTPValidationError`]}}},500:{description:`Internal server error with exception details`,content:{"application/json":{example:{status_code:1,status:`ExceptionName : Exception message`}}}},503:{description:`Service unavailable due to clusters for the call being unreachable`,content:{"application/json":{example:{status_code:2,status:`Cluster unreachable!`}}}}},security:[{HTTPBearer:[]}]}},"/api/bridgecalls":{post:{tags:[`bridgecalls`],summary:`Bridge Calls`,operationId:`bridge_calls_api_bridgecalls_post`,requestBody:{content:{"application/json":{schema:t[`#/components/schemas/BridgeCalls`]}},required:!0},responses:{200:{description:`Request processed successfully`,content:{"application/json":{schema:{},example:{status_code:0,status:`OK`}}}},400:{description:`Bad request due to invalid token`,content:{"application/json":{example:{status_code:1,status:`Invalid token`}}}},404:{description:`Not found due to unknown call_uuid`,content:{"application/json":{example:{status_code:1,status:`Unknown call_uuid`}}}},422:{description:`Validation Error`,content:{"application/json":{schema:t[`#/components/schemas/HTTPValidationError`]}}},500:{description:`Internal server error with exception details`,content:{"application/json":{example:{status_code:1,status:`ExceptionName : Exception message`}}}},503:{description:`Service unavailable due to clusters for the call being unreachable`,content:{"application/json":{example:{status_code:2,status:`Cluster unreachable!`}}}}},security:[{HTTPBearer:[]}]}},"/api/transfercall":{post:{tags:[`transfercall`],summary:`Transfer Call`,operationId:`transfer_call_api_transfercall_post`,requestBody:{content:{"application/json":{schema:t[`#/components/schemas/TransferCall`]}},required:!0},responses:{200:{description:`Request processed successfully`,content:{"application/json":{schema:{},example:{status_code:0,status:`OK`}}}},400:{description:`Bad request due to invalid token`,content:{"application/json":{example:{status_code:1,status:`Invalid token`}}}},404:{description:`Not found due to unknown call_uuid`,content:{"application/json":{example:{status_code:1,status:`Unknown call_uuid`}}}},422:{description:`Validation Error`,content:{"application/json":{schema:t[`#/components/schemas/HTTPValidationError`]}}},500:{description:`Internal server error with exception details`,content:{"application/json":{example:{status_code:1,status:`ExceptionName : Exception message`}}}},503:{description:`Service unavailable due to clusters for the call being unreachable`,content:{"application/json":{example:{status_code:2,status:`Cluster unreachable!`}}}}},security:[{HTTPBearer:[]}]}}},components:{schemas:{BridgeCalls:{properties:{first_uuid:{type:`string`,title:``,description:`Unique identifier of the first call.`},second_uuid:{type:`string`,title:``,description:`Unique identifier of the second call.`}},type:`object`,required:[`first_uuid`,`second_uuid`],title:`BridgeCalls`},DropCall:{properties:{call_uuid:{type:`string`,title:`Call Uuid`}},type:`object`,required:[`call_uuid`],title:`DropCall`},HTTPValidationError:{properties:{detail:{items:t[`#/components/schemas/ValidationError`],type:`array`,title:`Detail`}},type:`object`,title:`HTTPValidationError`},MakeCall:{properties:{campaign_name:{type:`string`,title:``,description:`The unique campaign name created either through API or through the monitor portal.`},from_number:{type:`string`,title:``,description:`Caller ID Number.`,default:``},to_number:{type:`string`,title:``,description:`Destination phone number.`},call_params:{additionalProperties:!0,type:`object`,title:``,description:`Any valid json object. If websocket_host, websocket_port, and websocket_app are set, the media will be streamed to the websocket server.`,default:{disable_recording:!1,stream_on_cpa_events:[`LV`],drop_on_cpa_events:[`FX`,`AM`],stream_frame_size_ms:200,bot_inactivity_limit:0}},channel_vars:{additionalProperties:!0,type:`object`,title:``,description:`List of channel variables including SIP headers. Variables with prefix sip_h_X- will set the SIP headers`,default:{}},cpa_config:{type:`string`,title:``,description:`If call progress analysis is required to detect answering machines, specify the previously configured cpa config name`,default:``},dial_timeout:{type:`integer`,title:``,description:`Timeout for the dialing. If the call is not answered within this time limit, the call will be dropped.`,default:30}},type:`object`,required:[`campaign_name`,`to_number`],title:`MakeCall`},MakeCallDirect:{properties:{cluster:{type:`string`,title:``,description:`Unique ID of the IraVoice cluster`},campaign_name:{type:`string`,title:``,description:`The unique campaign name created either through API or through the monitor portal.`},from_number:{type:`string`,title:``,description:`Caller ID Number.`,default:``},to_number:{type:`string`,title:``,description:`Destination phone number.`},call_params:{additionalProperties:!0,type:`object`,title:``,description:`Any valid json object. If websocket_host, websocket_port, and websocket_app are set, the media will be streamed to the websocket server.`,default:{disable_recording:!1,stream_on_cpa_events:[`LV`],drop_on_cpa_events:[`FX`,`AM`],stream_frame_size_ms:200,bot_inactivity_limit:0}},channel_vars:{additionalProperties:!0,type:`object`,title:``,description:`List of channel variables including SIP headers. Variables with prefix sip_h_X- will set the SIP headers`,default:{}},cpa_config:{type:`string`,title:``,description:`If call progress analysis is required to detect answering machines, specify the previously configured cpa config name`,default:``},dial_timeout:{type:`integer`,title:``,description:`Timeout for the dialing. If the call is not answered within this time limit, the call will be dropped.`,default:30}},type:`object`,required:[`cluster`,`campaign_name`,`to_number`],title:`MakeCallDirect`},MakeCallResponse:{properties:{call_uuid:{anyOf:[{type:`string`},{type:`null`}],title:``,description:`Unique identifier of the call if the request is successfully queued.`},slowdown:{anyOf:[{type:`boolean`},{type:`null`}],title:``,description:`Indicates if the system has a huge queue of pending requests and the client should slow down the rate of API calls. If you get true in this field, we recommend you to stop calling make call API for 60s to avoid hitting the rate limits.`,default:!1},status:{type:`string`,title:``,description:`Status of the API call.`},status_code:{type:`integer`,title:``,description:`Status code of the API response. 0 indicates success, any non-zero value indicates an error.`},cluster:{anyOf:[{type:`string`},{type:`null`}],title:``,description:`The cluster where the call is being processed. If a campaign is using trunks from multiple clusters, this field can be used to identify the cluster for each call.`}},type:`object`,required:[`status`,`status_code`],title:`MakeCallResponse`},StopStream:{properties:{call_uuid:{type:`string`,title:`Call Uuid`}},type:`object`,required:[`call_uuid`],title:`StopStream`},TransferCall:{properties:{call_uuid:{type:`string`,title:`Call Uuid`},destination:{type:`string`,title:`Destination`},deflect:{anyOf:[{type:`boolean`},{type:`null`}],title:`Deflect`,default:!1}},type:`object`,required:[`call_uuid`,`destination`],title:`TransferCall`},ValidationError:{properties:{loc:{items:{anyOf:[{type:`string`},{type:`integer`}]},type:`array`,title:`Location`},msg:{type:`string`,title:`Message`},type:{type:`string`,title:`Error Type`},input:{title:`Input`},ctx:{type:`object`,title:`Context`}},type:`object`,required:[`loc`,`msg`,`type`],title:`ValidationError`}},securitySchemes:{HTTPBearer:{type:`http`,scheme:`bearer`}}},tags:[{name:`makecall (Make outbound call)`,description:'\nIraVoice selects an available IraVoice cluster based on configured capacity allocation and queues the call request in that cluster.\n\nThe `call_params` object in the request payload controls CPA behavior, media streaming, webhook delivery, inactivity handling, and recording.\n\n# Call Params\n\n## Example\n\n```json\n{\n    "stream_on_cpa_events": ["LV"],\n    "drop_on_cpa_events": ["AM", "FX"],\n\n    "websocket_host": "bot.example.com",\n    "websocket_port": 8443,\n    "websocket_app": "voicebot",\n\n    "streaming_useraudio": true,\n    "stream_frame_size_ms": 200,\n\n    "stt_sampling_rate": 16000,\n    "tts_sampling_rate": 16000,\n\n    "bot_inactivity_limit": 30,\n\n    "event_url": "https://events.example.com/calls",\n\n    "disable_recording": false\n}\n```\n\n## Call Progress Analysis (CPA)\n\nApplicable only for outbound calls when `cpa_config` is included in the makecall request.\n\nIraCPA analyzes the initial call audio to classify the answer type and detect machine-generated responses, tones, silence, and screening behavior.\n\nThe first CPA event is typically detected within the first 1.75 seconds of answered audio.\n\n### Primary CPA Events\n\n| Code  | Meaning                                          |\n| ----- | ------------------------------------------------ |\n| `LV`  | Live human                                       |\n| `AM`  | Answering machine                                |\n| `FX`  | Fax machine                                      |\n| `SIT` | Special Information Tones                        |\n| `IBP` | Immediate beep detected immediately after answer |\n\nDepending on the configured CPA `break_event` behavior, analysis may continue after the initial classification to detect additional events.\n\n### Extended CPA Events\n\n| Code  | Meaning                                                         |\n| ----- | --------------------------------------------------------------- |\n| `SL`  | Silence                                                         |\n| `BP`  | Beep detected after initial answer classification               |\n| `EAM` | Extended Answering Machine detection after ringtone progression |\n| `CS`  | Call screening detected                                         |\n\nAutomatic actions can be triggered using:\n\n* `stream_on_cpa_events`\n* `drop_on_cpa_events`\n\nTo learn more about IraCPA, click [here](https://epicode.in/iracpa/)\n\n\n| Parameter              | Type            | Description                                                                                                     |\n| ---------------------- | --------------- | --------------------------------------------------------------------------------------------------------------- |\n| <nobr>`stream_on_cpa_events`</nobr> | <nobr>`array<string>`</nobr> | Starts WebSocket media streaming when the detected CPA event matches any configured value.<br>Default: `["LV"]` |\n| <nobr>`drop_on_cpa_events`</nobr>   | <nobr>`array<string>`</nobr> | Terminates the call when the detected CPA event matches any configured value.<br>Default: `["FX", "AM"]`        |\n\n## WebSocket Streaming\n\nStreams bidirectional audio between IraVoice and the configured WebSocket endpoint.\n\n* Audio from the call is streamed to the WebSocket server.\n* Audio received from the WebSocket server is injected into the live call.\n\n \n The WebSocket message format is documented in the [WebSocket Message Model](/iravoice/websocket-message-model) section.\n\n| Parameter              | Type      | Description                                                                                                                                                 |\n| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| <nobr>`websocket_host`</nobr>       | <nobr>`string`</nobr>  | Hostname of the WebSocket server.<br>Requires `websocket_port` and `websocket_app`.                                                                         |\n| <nobr>`websocket_port`</nobr>       | <nobr>`integer`</nobr> | WebSocket server port.<br>Used only when `websocket_host` is configured.                                                                                    |\n| <nobr>`websocket_app`</nobr>        | <nobr>`string`</nobr>  | Path component.                                                                                                    |\n| <nobr>`streaming_useraudio`</nobr>  | <nobr>`boolean`</nobr> | Controls upstream audio delivery mode.<br>`true` → streams audio continuously.<br>`false` → buffers audio till speech ends and sends it as a WAV file. |\n| <nobr>`stream_frame_size_ms`</nobr> | <nobr>`integer`</nobr> | Duration of each audio chunk in milliseconds.<br>Default: `200`<br>Minimum: `20`<br>Chunking is time-based, not RTP packet-based.                  |\n| <nobr>`stt_sampling_rate`</nobr>    | <nobr>`integer`</nobr> | Sampling rate (Hz) for audio streamed<br>IraVoice → AI orchestration layer.<br>Range: `8000-48000`                                                   |\n| <nobr>`tts_sampling_rate`</nobr>    | <nobr>`integer`</nobr> | Sampling rate (Hz) for audio streamed<br>AI orchestration layer → IraVoice.<br>Range: `8000-48000`                                                   |\n\n### Example WebSocket endpoint construction\n\n| Input                                                                                       | Result                                |\n| ------------------------------------------------------------------------------------------- | ------------------------------------- |\n| `websocket_host = bot.example.com`<br>`websocket_port = 8443`<br>`websocket_app = voicebot` | `wss://bot.example.com:8443/voicebot` |\n\n## Bot Inactivity Handling\n\nTerminates the call if no audio is received from the WebSocket server for a continuous duration defined by `bot_inactivity_limit`.\n\nDisabled when:\n\n* `bot_inactivity_limit` is omitted, or\n* `bot_inactivity_limit = 0`\n\n| Parameter              | Type      | Description                                                                                           |\n| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------- |\n| <nobr>`bot_inactivity_limit`</nobr> | <nobr>`integer`</nobr> | Maximum allowed inactivity duration in seconds before the call is dropped.<br>Default: `0` (disabled) |\n\n## Webhooks & Events\n\n| Parameter   | Type     | Description                                                                                                                                                                                                   |\n| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| <nobr>`event_url`</nobr> | <nobr>`string`</nobr> | HTTP webhook endpoint that receives call lifecycle events via POST.<br>Events include `started`, `ringing`, `answered`, `hangup`, and related state transitions.<br>If configured, events are always emitted. |\n\n## Recording\n\n| Parameter           | Type      | Description                                                                          |\n| ------------------- | --------- | ------------------------------------------------------------------------------------ |\n| <nobr>`disable_recording`</nobr> | <nobr>`boolean`</nobr> | Disables call recording when set to `true`.<br>Default: `false` (recording enabled). |\n\n# Critical Constraints\n\n| Topic              | Details                                                                                                                                   |\n| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |\n| <nobr>`Transport Security`</nobr> | Only `wss://` endpoints are supported.<br>`ws://` connections are rejected.<br>The WebSocket server must present a valid SSL certificate. |\n| <nobr>`WebSocket Protocol`</nobr> | Refer to the [WebSocket Message Model](/iravoice/websocket-message-model/) section for the complete message schema.                                                         |\n| <nobr>`Webhook Payload`</nobr>    | Refer to the [Webhook Event URL Payload](/iravoice/webhook-event/) section for webhook request structure.\n\n\n'},{name:`WebSocket Message Model`,description:`
The WebSocket connection carries both **TEXT** and **BINARY** frames:

* **TEXT frames** → JSON-encoded control messages and events
* **BINARY frames** → Raw audio stream (16-bit Linear PCM)

IraVoice streams customer audio to your AI orchestration and expects bot audio to be streamed back on the same connection.

## Message Types Overview

| Direction                   | Frame Type | Payload Type | Description                   |
| --------------------------- | ---------- | ------------ | ----------------------------- |
| IraVoice → AI Orchestration | TEXT       | JSON         | Call metadata, Call events    |
| IraVoice → AI Orchestration | BINARY     | PCM audio    | Customer audio stream         |
| AI Orchestration → IraVoice | BINARY     | PCM audio    | Bot audio stream              |
| AI Orchestration → IraVoice | TEXT       | JSON         | Audio Control, Send DTMF      |

## 1. Call Metadata (Initial TEXT JSON Message)

Immediately after connection establishment, IraVoice sends a JSON payload containing call metadata:

\`\`\`json
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
\`\`\`

| Field                 | Type      | Description                                   |
| --------------------- | --------- | --------------------------------------------- |
| \`call_uuid\`           | string    | Unique identifier for the call                |
| \`tenant_id\`           | string    | Tenant or account identifier                  |
| \`call_type\`           | string    | \`inbound\` or \`outbound\`                       |
| \`to_number\`           | string    | Destination phone number                      |
| \`from_number\`         | string    | Source phone number                           |
| \`read_sampling_rate\`  | integer   | Sampling rate for incoming audio              |
| \`write_sampling_rate\` | integer   | Sampling rate for outgoing audio              |
| \`call_params\`         | object    | Optional parameters controlling call behavior |


## 2. Call Events (TEXT JSON)

IraVoice sends call events as JSON messages. Each event includes an \`event\` field indicating its type.
IraVoice does DSP based VAD analysis on the server side and sends the VAD events. **speech** event is sent when the user starts speaking and **silent** event is sent when the user stops speaking.

| Event Name    | Description                   |
| ------------- | ----------------------------- |
| \`speech\`      | User speech detected          |
| \`silence\`     | Silence detected              |
| \`play_paused\` | Bot audio playback paused     |
| \`play_stopped\`| Bot audio playback stopped    |
| \`play_done\`   | Bot playback completed        |
| \`dtmf\`        | DTMF input received           |

#### Example Event Payload

\`\`\`json
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
\`\`\`


## 3. Customer Audio Stream (BINARY Messages)

* If \`call_params.streaming_useraudio\` is \`true\`, audio is streamed as **16-bit Linear PCM**. If \`false\`, audio is buffered and sent as a wave file in a single chunk when the user stops speaking (as indicated by VAD events).
* Sampling rate configurable via \`call_params.stt_sampling_rate\`. If not specified, it defaults to the \`read_sampling_rate\` sent in the initial metadata message.
* If \`call_params.streaming_useraudio\` is \`true\`, chunking is time-based (not fixed packet count)

| Parameter          | Value                              |
| ------------------ | ---------------------------------- |
| Default chunk size | 200 ms                             |
| 8 kHz chunk size   | 3200 bytes                         |
| 16 kHz chunk size  | 6400 bytes                         |
| Configurable via   | \`call_params.stream_frame_size_ms\` |

#### Example

| Frame Size (ms) | 8 kHz Bytes | 16 kHz Bytes |
| --------------- | ----------- | ------------ |
| 20 ms           | 320 bytes   | 640 bytes    |
| 200 ms          | 3200 bytes  | 6400 bytes   |


## 4. Bot Audio Stream (BINARY Messages)

Your AI orchestration must stream bot-generated audio back over the same WebSocket connection.
You do not have to control the rate of streaming; simply send audio as it is generated. IraVoice will handle playback timing and buffering.

| Requirement     | Description                                 |
| --------------- | ------------------------------------------- |
| Format          | 16-bit Linear PCM                           |
| Direction       | AI Orchestration → IraVoice                           |
| Sampling rate   | Must match the rate configured in \`call_params.tts_sampling_rate\` |

#### Important

* If your TTS output is at a different sampling rate than the call sampling rate, you must configure the \`call_params.tts_sampling_rate\` to match your TTS output rate. IraVoice will handle resampling to match the call's sampling rate.
* Mismatched sampling rates will result in distorted playback.


## 5. Audio Control, Send DTMF (TEXT JSON Messages)
Your AI orchestration sends a JSON message with the following schema to control the audio playback or send DTMF tones to the call:                                                
\`\`\`json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "request": {"type": "string", "enum": ["pause_play", "resume_play", "clear_play", "send_dtmf"]},
        "digits": {"type": "string", "pattern": "^[0-9*#]+$", "minLength": 1}
    },
    "required": ["request"]
}
\`\`\`

Audio Control APIs (\`pause_play\`, \`resume_play\`, \`clear_play\`) are designed to manage bot speech playback dynamically in response to real-time user input, typically driven by Voice Activity Detection (VAD) events.

#### Typical Interaction Flow

1. **User Starts Speaking (VAD Trigger)**

    * When VAD detects that the customer has started speaking, a JSON event "speech" will be sent to your AI Orchestration.
    * If the bot is actively playing audio:

        * Call **\`pause_play\`** to immediately suspend the bot's playback.
        * This prevents overlap and improves conversational turn-taking.

2. **Short Interjection (e.g., “hmm”, “yes”, “okay”)**

    * If the detected user input is classified as a short, non-interrupting interjection:

        * Call **\`resume_play\`** to continue playback from where it was paused.
        * No need to regenerate or resend the bot response.

3. **New User Query / Intent Change**

    * If the user input represents a new question, intent, or a meaningful interruption:

        * Call **\`clear_play\`** to terminate the current playback and clear any buffered audio.
        * Process the new user input and generate a fresh response.
        * Send the new response audio for playback.

#### Key Behavior Summary

| Scenario                          | Action       | API Call      |
| --------------------------------- | ------------ | ------------- |
| User interrupts (starts speaking) | Pause audio  | \`pause_play\`  |
| Short interjection                | Resume audio | \`resume_play\` |
| New question / intent change      | Stop audio   | \`clear_play\`  |

#### Notes
* One \`pause_play\` is called, any new audio chunks received from your AI Orchestration will be buffered until the buffer limit of 20s is reached. After that IraVoice will drop the chunks received.
* If \`resume_play\` is called, the playback will resume from the point it was paused, including any buffered audio.
* If \`clear_play\` is called, the playback will stop and any buffered audio will be discarded. The next audio chunk received after that will be played immediately.
* Classification of "short interjection" vs "new query" should be handled upstream (e.g., via intent classification or heuristic thresholds).

This model ensures natural, interruption-aware conversational behavior and prevents the bot from talking over the user.

### Key Takeaways

* Use **TEXT frames** strictly for control and events.
* Use **BINARY frames** strictly for audio streaming.
* Maintain strict adherence to PCM format and sampling rate.
* Treat the WebSocket as a **bidirectional real-time audio + signaling channel**.

This structure ensures predictable framing, low-latency streaming, and compatibility with IraVoice playback systems.

---

`},{name:`Webhook Event URL Payload`,description:`
If _event_url_ is present in the _call_params_ of makecall or makecalldirect API, then the call events will be sent to that URL as HTTP POST requests with JSON body. The payload will follow the jsonschema below.

\`\`\`json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "event_name": {"type": "string", "enum": ["iravoice::started", "iravoice::ringing", "iravoice::answered", "iravoice::botaudio_stream_started", "iravoice::speech", "iravoice::silent", "iravoice::play_paused", "iravoice::play_stopped", "iravoice::play_done", "iravoice::dtmf", "iravoice::hangup", "iravoice::stream_stopped", "iravoice::call_quality"]},
        "event_data": {
            "type": "object",
            "properties": {
                "timestamp": {"type": "string", "format": "date-time", "description": "Timestamp of the event in ISO 8601 format."},
                "call_uuid": {"type": "string", "description": "Unique identifier for the call."},
                "call_params": {"type": "object", "description": "Call parameters."},
                "tenant_id": {"type": "string", "description": "Tenant identifier."},
                "call_type": {"type": "string", "enum": ["inbound", "outbound"], "description": "Type of the call."},
                "to_number": {"type": "string", "description": "Number to which the call is directed."},
                "from_number": {"type": "string", "description": "Number from which the call is initiated."}
            },
            "required": ["timestamp", "call_uuid", "call_params"],
            "additionalProperties": True
        },
    },
    "required": ["event_name", "event_data"],
    "additionalProperties": False
}
\`\`\`

Examples:
\`\`\`json
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
\`\`\`
\`\`\`json
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
\`\`\`
`},{name:`makecalldirect`,description:`Similar to makecall. But only to be used if you know exactly which _cluster_ you want the call to go through.
        <br/><br/>Example usecase: Transfering / Bridging voicebot call to a human agent. When you trigger the first outbound call, the response JSON will have the _cluster_ and _call_uuid_. Save the _cluster_ value for later use.
        <br/>If the voicebot requires to send call to human agent, call _makecalldirect_ API with the cluster set to that of the original call.
        <br/>The _campaign_name_ will be the campaign exclusively created to send calls to human agents through suitable SIP trunk.`},{name:`dropcall`,description:`Drops the call.
        <br/>Checks if the _call_uuid_ supplied is of a call initiated via the Distributor.
        <br/>If yes, it looks up which cluster the call was placed in and sends the dropcall request to that cluster.`},{name:`stopstream`,description:`Stops the websocket stream and disconnects the websocket connection.
        <br/>Checks if the _call_uuid_ supplied is of a call initiated via the Distributor.
        <br/>If yes, it looks up which cluster the call was placed in and sends the stop stream request to that cluster.
        <br/><br/>Example usecase: Stop the stream to voicebot before transfering or bridging the call with human agent.`},{name:`bridgecalls`,description:`Bridges two calls in the same cluster.
        <br/>Checks if the _first_uuid_ and _second_uuid_ supplied are of a calls initiated via the Distributor and if both calls are in the same cluster.
        <br/>If yes, LD sends the new bridge request to that cluster.`},{name:`transfercall`,description:`Transfers the call to the destination specified.
        <br/>If the deflect is set to true, then SIP REFER will be sent to the trunk through which the call was made.
        <br/> If the deflect is set to false, then the call transfer is internal within IraSwitch, for example to an extension or to a queue.`}]};export{r as schema};
//# sourceMappingURL=api-iravoice.json-NJXhJPbv.js.map