import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-Fyu0Mufw.js";var n=e(),r=`BotCompose is a VoiceBot orchestration engine designed to integrate seamlessly with existing PBX, UC, and Contact Center platforms. It replaces rigid IVR flows with natural conversational AI while staying flexible, performant, and vendor-agnostic across STT, TTS, and LLM components..`,i=[{depth:1,text:`Get Started with BotCompose`,id:`get-started-with-botcompose`,children:[{depth:2,text:`Steps to create a voice bot using BotCompose:`,id:`steps-to-create-a-voice-bot-using-botcompose`},{depth:2,text:`Testing the Voicebot:`,id:`testing-the-voicebot`},{depth:2,text:`Frequently asked questions`,id:`frequently-asked-questions`}]}],a={lastModifiedTime:`2026-05-25T06:22:18.000Z`},o=`pages/sandbox/sandboxbotcompose.mdx`;function s(e){let r={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,xyz:`xyz`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`get-started-with-botcompose`,children:`Get Started with BotCompose`}),`
`,(0,n.jsx)(r.p,{children:`BotCompose is a VoiceBot orchestration engine designed to integrate seamlessly with existing PBX, UC, and Contact Center platforms. It replaces rigid IVR flows with natural conversational AI while staying flexible, performant, and vendor-agnostic across STT, TTS, and LLM components..`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Base URL:`}),` `,(0,n.jsx)(r.a,{href:`https://sandboxwa.epicode.in/api/`,children:`https://sandboxwa.epicode.in/api/`})]}),`
`,(0,n.jsx)(r.p,{children:`To begin using botcompose from our sandbox environment, you will be provided with below details over the mail:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`tenant_id`}),`
`,(0,n.jsxs)(r.li,{children:[`API credentials (Bearer token`,(0,n.jsx)(r.xyz,{}),`)`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`These credentials should be used exclusively for testing purposes.`}),`
`,(0,n.jsx)(r.h2,{id:`steps-to-create-a-voice-bot-using-botcompose`,children:`Steps to create a voice bot using BotCompose:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Add Provider Secrets [/add_secret]:`}),` Add the STT, TTS, and LLM credentials of the model providers you have procured.\xA0`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Create the Voicebot [/add_bot]:`}),` Configure and create your voicebot using the required parameters.\xA0`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Botcompose API documentation is available on`}),` : `,(0,n.jsx)(r.a,{href:`https://docs.google.com/document/d/1omxRs1A3KZ0RkIK7PoelsYBXeNYb8NJHTKY0gqw8Ung/edit?usp=sharing`,children:`BotCompose API doc`})]}),`
`,(0,n.jsx)(r.p,{children:`The\xA0 API documentation contains the API requests for a sample voicebot; you can retain or modify these according to your use case.`}),`
`,(0,n.jsx)(r.h2,{id:`testing-the-voicebot`,children:`Testing the Voicebot:`}),`
`,(0,n.jsxs)(r.p,{children:[`Once your voicebot is created and configured, you can validate its performance using an `,(0,n.jsx)(r.strong,{children:`IraVoice outbound call`}),`.`,(0,n.jsx)(r.br,{}),`
`,`The outbound call will directly connect to the voicebot you’ve built, allowing end-to-end functional testing.`]}),`
`,(0,n.jsx)(r.p,{children:`You will be provided with below details over the mail:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`tenant_id`}),`
`,(0,n.jsxs)(r.li,{children:[`API credentials (Bearer token`,(0,n.jsx)(r.xyz,{}),`)`]}),`
`,(0,n.jsx)(r.li,{children:`campaign_name`}),`
`,(0,n.jsx)(r.li,{children:`from_number`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Sample CURL request for initiating a MakeCall using a BotCompose-configured voice bot`}),`\xA0`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`curl --location 'https://sandboxld.epicode.in/api/makecall' \\\\  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\\--header 'Content-Type: application/json' \\\\  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\\--header 'Authorization: Bearer &lt;Bearer token&gt;' \\\\  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\\--data '{  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "campaign_name": "&lt;campaign_name&gt;",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "tenant_id": "&lt;tenant_id&gt;",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "from_number": "&lt;from_number&gt;",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "to_number": "&lt;your-number&gt;",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "call_params": {`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"bot_id": "&lt;unique-name-of-your-voicebot&gt;",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 \xA0 \xA0 "call_type":"botcompose",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"streaming_useraudio": false,  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 \xA0 \xA0 "event_url" : "&lt;yout-http-endpoint&gt;"  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 }  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}'`})})]})})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`MakeCall API documentation`}),` is available on `,(0,n.jsx)(r.a,{href:`https://ld.epicode.in/documentation`,children:`https://ld.epicode.in/documentation`})]}),`
`,(0,n.jsxs)(r.li,{children:[`API request endpoint for integration testing : `,(0,n.jsx)(r.a,{href:`https://sandboxld.epicode.in/api/makecall`,children:`https://sandboxld.epicode.in/api/makecall`}),`\xA0`]}),`
`,(0,n.jsxs)(r.li,{children:[`For more details on `,(0,n.jsx)(r.strong,{children:`Make Call request parameters`}),`: `,(0,n.jsx)(r.a,{href:`https://support.epicode.in/help/en-gb/15/272`,children:`https://support.epicode.in/help/en-gb/15/272`})]}),`
`,(0,n.jsxs)(r.li,{children:[`In this Sandbox environment, you have access to `,(0,n.jsx)(r.strong,{children:`2 channels`}),` with a `,(0,n.jsx)(r.strong,{children:`DID number`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[`To connect to the newly created `,(0,n.jsx)(r.strong,{children:`voicebot`}),`, you must specify the following `,(0,n.jsx)(r.strong,{children:`within`}),` `,(0,n.jsx)(r.strong,{children:`call_params`}),`:\xA0\xA0\xA0`]}),`
`,(0,n.jsx)(r.li,{children:`Include "bot_id" : "<unique-name-of-your-voicebot->" which was created using BotCompose APIs`}),`
`,(0,n.jsxs)(r.li,{children:[`Remove the fields `,(0,n.jsx)(r.strong,{children:`websocket_host`}),`, `,(0,n.jsx)(r.strong,{children:`websocket_port`}),` and `,(0,n.jsx)(r.strong,{children:`websocket_app`}),` and use \xA0"call_type":"botcompose" field instead.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Set "streaming_useraudio": false if you are using `,(0,n.jsx)(r.strong,{children:`Non-streaming STT`}),`.`]}),`
`,(0,n.jsx)(r.li,{children:`Should you require access to CDR transcripts from BotCompose, Call Recordings, or the Live Call Monitor, please let us know.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`frequently-asked-questions`,children:`Frequently asked questions`}),`
`,(0,n.jsxs)(r.p,{children:[`For common doubts and queries with BotCompose please refer to `,(0,n.jsx)(r.a,{href:`https://docs.google.com/document/d/1nbXKLicufKQvzaR8LFOvq9zt9DwYmTnBInK-nRvvU4Y/edit?usp=sharing`,children:`BotCompose FAQ's`}),`.`]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=sandboxbotcompose-CbaTadIo.js.map