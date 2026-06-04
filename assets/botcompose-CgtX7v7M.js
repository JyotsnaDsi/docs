import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-C2cyKK4t.js";var n=e(),r=`BotCompose is a VoiceBot orchestration engine designed to integrate seamlessly with existing PBX, UC, and Contact Center platforms. It replaces rigid IVR flows with natural conversational AI while staying flexible, performant, and vendor-agnostic across STT, TTS, and LLM components..`,i=[{depth:1,text:`BotCompose Sandbox`,id:`botcompose-sandbox`,children:[{depth:2,text:`Steps to create a voice bot using BotCompose`,id:`steps-to-create-a-voice-bot-using-botcompose`,children:[{depth:3,text:`BotCompose Sample Script`,id:`botcompose-sample-script`}]},{depth:2,text:`Testing the Voicebot`,id:`testing-the-voicebot`,children:[{depth:3,text:`Frequently Asked questions`,id:`frequently-asked-questions`}]}]}],a={lastModifiedTime:`2026-06-04T11:53:07.000Z`},o=`pages/sandbox/botcompose.mdx`;function s(e){let r={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,note:`note`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,tip:`tip`,ul:`ul`,xyz:`xyz`,...t(),...e.components},{Stepper:i}=r;return i||l(`Stepper`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`botcompose-sandbox`,children:`BotCompose Sandbox`}),`
`,(0,n.jsx)(r.p,{children:`BotCompose is a VoiceBot orchestration engine designed to integrate seamlessly with existing PBX, UC, and Contact Center platforms. It replaces rigid IVR flows with natural conversational AI while staying flexible, performant, and vendor-agnostic across STT, TTS, and LLM components..`}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Base URL:`}),` `,(0,n.jsx)(r.a,{href:`https://sandboxwa.epicode.in/api/`,children:`https://sandboxwa.epicode.in/api/`})]})}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`/botcomposeapi`,children:`Click here`}),` for `,(0,n.jsx)(r.strong,{children:`Botcompose API documentation`}),`.`]})}),`
`,(0,n.jsx)(r.p,{children:`To begin using botcompose from our sandbox environment, you will be provided with below details:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Tenant Id`}),`
`,(0,n.jsxs)(r.li,{children:[`API credentials (Bearer token`,(0,n.jsx)(r.xyz,{}),`)`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`These credentials should be used exclusively for testing purposes.`}),`
`,(0,n.jsx)(r.h2,{id:`steps-to-create-a-voice-bot-using-botcompose`,children:`Steps to create a voice bot using BotCompose`}),`
`,(0,n.jsx)(i,{children:(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Obtain Provider API Keys`}),`: Create accounts with your preferred STT, LLM, and TTS providers and procure the required API credentials.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/botcomposeapi/add-secret`,children:(0,n.jsx)(r.strong,{children:`Add Provider Secrets`})}),`: Add the STT, TTS, and LLM credentials of the model providers you have procured.\xA0`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/botcomposeapi/add-bot`,children:(0,n.jsx)(r.strong,{children:`Create the Voicebot`})}),`: Configure and create your voicebot using the required parameters.\xA0`]}),`
`]})}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`/botcompose/create-voicebot`,children:`Click here`}),` for a complete guide to voicebot creation and available plugins.`]})}),`
`,(0,n.jsxs)(r.tip,{children:[(0,n.jsx)(r.h3,{id:`botcompose-sample-script`,children:`BotCompose Sample Script`}),(0,n.jsxs)(r.p,{children:[`You can also refer to `,(0,n.jsx)(r.a,{href:`/botcompose/botcomposescript`,children:`BotCompose Sample Script`}),` for testing purposes.`]})]}),`
`,(0,n.jsx)(r.h2,{id:`testing-the-voicebot`,children:`Testing the Voicebot`}),`
`,(0,n.jsxs)(r.p,{children:[`Once your voicebot is created and configured, you can validate its performance using an `,(0,n.jsx)(r.strong,{children:`IraVoice outbound call`}),`.`,(0,n.jsx)(r.br,{}),`
`,`The outbound call will directly connect to the voicebot you’ve built, allowing end-to-end functional testing.`]}),`
`,(0,n.jsx)(r.p,{children:`You will be provided with below details over the mail:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Tenant Id`}),`
`,(0,n.jsx)(r.li,{children:`API Credentials (Bearer token: abc)`}),`
`,(0,n.jsx)(r.li,{children:`Campaign Name`}),`
`,(0,n.jsx)(r.li,{children:`From Number (DID Number)`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Sample CURL request for initiating a MakeCall using a BotCompose-configured voice bot`}),`\xA0`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`curl --location 'https://sandboxld.epicode.in/api/makecall' \\`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:` --header 'Content-Type: application/json' \\`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:` --header 'Authorization: Bearer <Bearer token>' \\`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:` --data '{  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "campaign_name": "<campaign_name>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "tenant_id": "<tenant_id>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "from_number": "<from_number>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "to_number": "<your-number>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "call_params": {`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"bot_id": "<unique-name-of-your-voicebot>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 \xA0 \xA0 "call_type":"botcompose",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"streaming_useraudio": false,  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 \xA0 \xA0 "event_url" : "<your-http-endpoint>"  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 }  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}'`})})]})})}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`/api`,children:`Click here`}),` for `,(0,n.jsx)(r.strong,{children:`IraVoice API documentation`}),`.`]})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`API request endpoint for integration testing : `,(0,n.jsx)(r.a,{href:`https://sandboxld.epicode.in/api/makecall`,children:`https://sandboxld.epicode.in/api/makecall`}),`\xA0`]}),`
`,(0,n.jsxs)(r.li,{children:[`For more details on `,(0,n.jsx)(r.a,{href:`/api/makecall-make-outbound-call`,children:(0,n.jsx)(r.strong,{children:`Make Call request parameters`})})]}),`
`,(0,n.jsxs)(r.li,{children:[`To connect to the newly created `,(0,n.jsx)(r.strong,{children:`voicebot`}),`, you must specify the following `,(0,n.jsx)(r.strong,{children:`within`}),` `,(0,n.jsx)(r.strong,{children:`call_params`}),`:\xA0\xA0\xA0`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Include "`,(0,n.jsx)(r.strong,{children:`bot_id`}),`" : "`,(0,n.jsx)(r.strong,{children:`unique-name-of-your-voicebot`}),`" which was created using BotCompose APIs.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Remove the fields `,(0,n.jsx)(r.strong,{children:`websocket_host`}),`, `,(0,n.jsx)(r.strong,{children:`websocket_port`}),` and `,(0,n.jsx)(r.strong,{children:`websocket_app`}),` and use \xA0"`,(0,n.jsx)(r.strong,{children:`call_type`}),`":"`,(0,n.jsx)(r.strong,{children:`botcompose`}),`" field instead.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Set "`,(0,n.jsx)(r.strong,{children:`streaming_useraudio`}),`": `,(0,n.jsx)(r.strong,{children:`false`}),` if you are using `,(0,n.jsx)(r.strong,{children:`Non-streaming STT`}),`.`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.li,{children:`Should you require access to CDR transcripts from BotCompose, Call Recordings, or the Live Call Monitor, please let us know.`}),`
`]}),`
`,(0,n.jsxs)(r.tip,{children:[(0,n.jsx)(r.h3,{id:`frequently-asked-questions`,children:`Frequently Asked questions`}),(0,n.jsxs)(r.p,{children:[`For common doubts and queries with BotCompose please refer to `,(0,n.jsx)(r.a,{href:`https://epicode.in/botcompose#FAQs`,children:`BotCompose FAQ's`}),`.`]})]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=botcompose-CgtX7v7M.js.map