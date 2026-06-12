import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-G-RPdD_e.js";var n=e(),r=`BotCompose enables you to build and launch AI-powered voicebots by integrating your preferred Speech-to-Text (STT), Large Language Model (LLM), and Text-to-Speech (TTS) providers.`,i=[{depth:1,text:`Creating a Voicebot`,id:`creating-a-voicebot`,children:[{depth:2,text:`Obtain Provider API Keys`,id:`obtain-provider-api-keys`},{depth:2,text:`Add Provider Credentials`,id:`add-provider-credentials`},{depth:2,text:`Create the Voicebot`,id:`create-the-voicebot`},{depth:2,text:`Configure Tool Calling`,id:`configure-tool-calling`,children:[{depth:3,text:`Option 1: Configure During Bot Creation`,id:`option-1-configure-during-bot-creation`},{depth:3,text:`Option 2: Configure Separately`,id:`option-2-configure-separately`}]},{depth:2,text:`Configure TTS Response Cache`,id:`configure-tts-response-cache`,children:[{depth:3,text:`Option 1: Configure During Bot Creation`,id:`option-1-configure-during-bot-creation-1`},{depth:3,text:`Option 2: Configure Separately`,id:`option-2-configure-separately-1`}]},{depth:2,text:`Speech-to-Text (STT) Plugins`,id:`speech-to-text-stt-plugins`},{depth:2,text:`Text-to-Speech (TTS) Plugins`,id:`text-to-speech-tts-plugins`},{depth:2,text:`Large Language Model (LLM) Plugins`,id:`large-language-model-llm-plugins`,children:[{depth:3,text:`openai_like`,rich:[{type:`element`,tagName:`code`,properties:{},children:[{type:`text`,value:`openai_like`,position:{start:{line:162,column:5,offset:6160},end:{line:162,column:18,offset:6173}}}],position:{start:{line:162,column:5,offset:6160},end:{line:162,column:18,offset:6173}}}],id:`openai_like`},{depth:3,text:`Supported Providers`,id:`supported-providers`}]}]}],a={lastModifiedTime:`2026-06-12T13:02:45.000Z`},o=`pages/botcompose/create-voicebot.mdx`;function s(e){let r={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,img:`img`,li:`li`,note:`note`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components},{Stepper:i}=r;return i||l(`Stepper`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`creating-a-voicebot`,children:`Creating a Voicebot`}),`
`,(0,n.jsx)(r.p,{children:`BotCompose enables you to build and launch AI-powered voicebots by integrating your preferred Speech-to-Text (STT), Large Language Model (LLM), and Text-to-Speech (TTS) providers.`}),`
`,(0,n.jsx)(r.p,{children:`The voicebot creation process involves:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Procuring API credentials from your preferred AI providers`}),`
`,(0,n.jsxs)(r.li,{children:[`Securely storing provider credentials using the `,(0,n.jsx)(r.code,{inline:`true`,children:`/add_secret`}),` API`]}),`
`,(0,n.jsxs)(r.li,{children:[`Creating and configuring the voicebot using the `,(0,n.jsx)(r.code,{inline:`true`,children:`/add_bot`}),` API`]}),`
`,(0,n.jsx)(r.li,{children:`Optionally enabling tool calling for external integrations and workflow automation`}),`
`,(0,n.jsx)(r.li,{children:`Optionally pre-generating and caching TTS responses to reduce response latency`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`BotCompose provides built-in plugins for several STT, LLM, and TTS providers, allowing you to mix and match services based on your use case, performance requirements, and pricing preferences.`}),`
`,(0,n.jsxs)(r.blockquote,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Last Updated:`}),` 19 January 2025`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:`/epicode-docs/botcompose.png`,alt:``})}),`
`,(0,n.jsx)(r.p,{children:`Before creating a voicebot, you must obtain credentials from the AI providers you intend to use and register those credentials with BotCompose.`}),`
`,(0,n.jsx)(i,{children:(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.h2,{id:`obtain-provider-api-keys`,children:`Obtain Provider API Keys`}),`
`,(0,n.jsx)(r.p,{children:`Create accounts with your preferred STT, LLM, and TTS providers and procure the required API credentials.`}),`
`,(0,n.jsx)(r.p,{children:`A typical voicebot requires:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`One or more `,(0,n.jsx)(r.strong,{children:`STT provider`}),` for Speech-to-Text`]}),`
`,(0,n.jsxs)(r.li,{children:[`One or more `,(0,n.jsx)(r.strong,{children:`LLM provider`}),` for conversational intelligence`]}),`
`,(0,n.jsxs)(r.li,{children:[`One or more `,(0,n.jsx)(r.strong,{children:`TTS provider`}),` for Text-to-Speech`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.h2,{id:`add-provider-credentials`,children:`Add Provider Credentials`}),`
`,(0,n.jsxs)(r.p,{children:[`Once you have obtained the required API keys, add them to the BotCompose secrets inventory using the `,(0,n.jsx)(r.code,{inline:`true`,children:`/add_secret`}),` API endpoint.`]}),`
`,(0,n.jsx)(r.p,{children:`Secrets stored in the inventory can be securely referenced during bot creation without exposing provider credentials in your bot configuration.`}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[`For more information, refer to the `,(0,n.jsx)(r.a,{href:`/botcomposeapi/add-secret`,children:(0,n.jsx)(r.strong,{children:`Add Secret API Reference`})}),`.`]})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.h2,{id:`create-the-voicebot`,children:`Create the Voicebot`}),`
`,(0,n.jsxs)(r.p,{children:[`After adding the required secrets, create and configure your voicebot using the `,(0,n.jsx)(r.code,{inline:`true`,children:`/add_bot`}),` API endpoint.`]}),`
`,(0,n.jsx)(r.p,{children:`Within the bot configuration payload, specify:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`The STT plugin to use`}),`
`,(0,n.jsx)(r.li,{children:`The LLM plugin to use`}),`
`,(0,n.jsx)(r.li,{children:`The TTS plugin to use`}),`
`,(0,n.jsx)(r.li,{children:`References(secret_name) to the secrets added in the previous step`}),`
`,(0,n.jsx)(r.li,{children:`Any provider-specific configuration such as models, voices, languages, or endpoint URLs`}),`
`]}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[`For detailed information on supported configuration fields and payload examples, refer to the `,(0,n.jsx)(r.a,{href:`/botcomposeapi/add-bot`,children:(0,n.jsx)(r.strong,{children:`Add Bot API Reference`})}),`.`]})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.h2,{id:`configure-tool-calling`,children:`Configure Tool Calling`}),`
`,(0,n.jsx)(r.p,{children:`BotCompose supports tool calling, allowing your voicebot to invoke external APIs, perform actions, fetch data, and execute business workflows during conversations.`}),`
`,(0,n.jsx)(r.p,{children:`Tool definitions can be configured in one of two ways:`}),`
`,(0,n.jsx)(r.h3,{id:`option-1-configure-during-bot-creation`,children:`Option 1: Configure During Bot Creation`}),`
`,(0,n.jsxs)(r.p,{children:[`Tool calling configuration can be included directly within the `,(0,n.jsx)(r.code,{inline:`true`,children:`/add_bot`}),` request payload when creating the voicebot.`]}),`
`,(0,n.jsx)(r.p,{children:`This approach is recommended when the tool definitions are known during bot setup and should remain tightly coupled with the bot configuration.`}),`
`,(0,n.jsx)(r.h3,{id:`option-2-configure-separately`,children:`Option 2: Configure Separately`}),`
`,(0,n.jsxs)(r.p,{children:[`Tool definitions can also be managed independently using the `,(0,n.jsx)(r.code,{inline:`true`,children:`/tool_call_payload`}),` API endpoint.`]}),`
`,(0,n.jsx)(r.p,{children:`This approach is useful when:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Tool definitions need to be updated as the calls happen.`}),`
`,(0,n.jsx)(r.li,{children:`Multiple bots share the same tools`}),`
`,(0,n.jsx)(r.li,{children:`Tool configurations are managed dynamically by external systems`}),`
`]}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[`For detailed information on tool definitions, refer to the `,(0,n.jsx)(r.a,{href:`/botcomposeapi/tool-calling`,children:(0,n.jsx)(r.strong,{children:`Tool Calling API`})}),`.`]})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.h2,{id:`configure-tts-response-cache`,children:`Configure TTS Response Cache`}),`
`,(0,n.jsx)(r.p,{children:`BotCompose supports pre-generating and caching TTS audio for frequently used bot responses.
This helps reduce response latency by serving pre-generated audio instead of synthesizing speech during the call.`}),`
`,(0,n.jsx)(r.p,{children:`Common use cases include:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Greetings and welcome messages`}),`
`,(0,n.jsx)(r.li,{children:`Compliance disclosures`}),`
`,(0,n.jsx)(r.li,{children:`Hold messages`}),`
`,(0,n.jsx)(r.li,{children:`Frequently repeated prompts`}),`
`,(0,n.jsx)(r.li,{children:`Closing statements`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`TTS cache entries can be configured in one of two ways:`}),`
`,(0,n.jsx)(r.h3,{id:`option-1-configure-during-bot-creation-1`,children:`Option 1: Configure During Bot Creation`}),`
`,(0,n.jsxs)(r.p,{children:[`TTS cache definitions can be included directly within the `,(0,n.jsx)(r.code,{inline:`true`,children:`/add_bot`}),` request payload when creating the voicebot.`]}),`
`,(0,n.jsx)(r.p,{children:`This approach is recommended when the cached responses are known during bot setup and should be deployed alongside the bot configuration.`}),`
`,(0,n.jsx)(r.h3,{id:`option-2-configure-separately-1`,children:`Option 2: Configure Separately`}),`
`,(0,n.jsxs)(r.p,{children:[`TTS cache entries can also be added or updated independently using the `,(0,n.jsx)(r.code,{inline:`true`,children:`/populate_tts_cache`}),` API endpoint.`]}),`
`,(0,n.jsx)(r.p,{children:`This approach is useful when:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`New cached responses need to be added after deployment`}),`
`,(0,n.jsx)(r.li,{children:`Existing cached phrases need to be updated`}),`
`,(0,n.jsx)(r.li,{children:`Multiple bots share common pre-generated responses`}),`
`,(0,n.jsx)(r.li,{children:`Cache content is managed dynamically by external systems`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`When a cached response is available, BotCompose can serve the pre-generated audio directly, reducing TTS generation overhead and improving response times.`}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[`For detailed information, refer to `,(0,n.jsx)(r.a,{href:`/botcomposeapi/populate-tts-cache`,children:(0,n.jsx)(r.strong,{children:`Populate TTS Cache API`})}),`.`]})}),`
`]}),`
`]})}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`speech-to-text-stt-plugins`,children:`Speech-to-Text (STT) Plugins`}),`
`,(0,n.jsx)(r.p,{children:`The following STT plugins are available for converting user speech into text:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Plugin Name`}),(0,n.jsx)(r.th,{children:`Description`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`deepgram`})}),(0,n.jsx)(r.td,{children:`Deepgram Speech-to-Text`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`deepgram_streaming`})}),(0,n.jsx)(r.td,{children:`Deepgram Streaming Speech-to-Text`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`sarvam`})}),(0,n.jsx)(r.td,{children:`Sarvam AI Speech-to-Text`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`azure`})}),(0,n.jsx)(r.td,{children:`Microsoft Azure Speech Services`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`google`})}),(0,n.jsx)(r.td,{children:`Google Speech-to-Text`})]})]})]}),`
`,(0,n.jsx)(r.h2,{id:`text-to-speech-tts-plugins`,children:`Text-to-Speech (TTS) Plugins`}),`
`,(0,n.jsx)(r.p,{children:`The following TTS plugins are available for converting bot responses into speech:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Plugin Name`}),(0,n.jsx)(r.th,{children:`Description`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`elevenlabs`})}),(0,n.jsx)(r.td,{children:`ElevenLabs Text-to-Speech`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`openai`})}),(0,n.jsx)(r.td,{children:`OpenAI Text-to-Speech`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`google`})}),(0,n.jsx)(r.td,{children:`Google Cloud Text-to-Speech`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`azure`})}),(0,n.jsx)(r.td,{children:`Microsoft Azure Speech Services`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`sarvam`})}),(0,n.jsx)(r.td,{children:`Sarvam AI Text-to-Speech`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`Smallestai`})}),(0,n.jsx)(r.td,{children:`Smallest AI Text-to-Speech`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`Cartesia`})}),(0,n.jsx)(r.td,{children:`Cartesia Text-to-Speech`})]})]})]}),`
`,(0,n.jsx)(r.h2,{id:`large-language-model-llm-plugins`,children:`Large Language Model (LLM) Plugins`}),`
`,(0,n.jsx)(r.h3,{id:`openai_like`,children:(0,n.jsx)(r.code,{inline:`true`,children:`openai_like`})}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{inline:`true`,children:`openai_like`}),` plugin provides a unified interface for integrating with OpenAI-compatible APIs.`]}),`
`,(0,n.jsxs)(r.p,{children:[`To use a supported provider, configure the appropriate `,(0,n.jsx)(r.code,{inline:`true`,children:`base_url`}),` in the plugin configuration.`]}),`
`,(0,n.jsx)(r.h3,{id:`supported-providers`,children:`Supported Providers`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Provider`}),(0,n.jsx)(r.th,{children:`Supported`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`OpenAI`}),(0,n.jsx)(r.td,{children:`✅`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Azure OpenAI / Azure AI Foundry`}),(0,n.jsx)(r.td,{children:`✅`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Groq`}),(0,n.jsx)(r.td,{children:`✅`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Fireworks.ai`}),(0,n.jsx)(r.td,{children:`✅`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Hugging Face Inference Router`}),(0,n.jsx)(r.td,{children:`✅`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Vercel AI Gateway`}),(0,n.jsx)(r.td,{children:`✅`})]})]})]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=create-voicebot-fB3DlKt8.js.map