import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-Fyu0Mufw.js";var n=e(),r=`The Epicode Sandbox environment is provided to help customers safely test and validate their integration before moving to production.`,i=[{depth:1,text:`IraVoice Sandbox Environment`,id:`iravoice-sandbox-environment`,children:[{depth:2,text:`Access Details`,id:`access-details`},{depth:2,text:`Making a test call for IraVoice`,id:`making-a-test-call-for-iravoice`,children:[{depth:3,text:`Key configurations:`,id:`key-configurations`}]},{depth:2,text:`Making an inbound call in Iravoice`,id:`making-an-inbound-call-in-iravoice`},{depth:2,text:`Frequently asked questions`,id:`frequently-asked-questions`}]}],a={lastModifiedTime:`2026-05-25T06:22:18.000Z`},o=`pages/sandbox/IravoiceSandbox.mdx`;function s(e){let r={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,info:`info`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,xyz:`xyz`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`iravoice-sandbox-environment`,children:`IraVoice Sandbox Environment`}),`
`,(0,n.jsx)(r.p,{children:`The Epicode Sandbox environment is provided to help customers safely test and validate their integration before moving to production.`}),`
`,(0,n.jsx)(r.p,{children:`This environment allows you to simulate calling workflows, verify API integrations, and ensure system readiness without impacting real users.`}),`
`,(0,n.jsx)(r.h2,{id:`access-details`,children:`Access Details`}),`
`,(0,n.jsxs)(r.p,{children:[`In the Sandbox environment, you have access to `,(0,n.jsx)(r.strong,{children:`2 channels`}),` with a `,(0,n.jsx)(r.strong,{children:`DID number`}),`.\xA0`]}),`
`,(0,n.jsx)(r.p,{children:`To begin using the sandbox, you will be provided with the following details over the mail:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`tenant_id`}),`
`,(0,n.jsxs)(r.li,{children:[`API credentials (Bearer token`,(0,n.jsx)(r.xyz,{}),`)`]}),`
`,(0,n.jsx)(r.li,{children:`campaign_name`}),`
`,(0,n.jsx)(r.li,{children:`From_number (DID number)`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`These credentials should be used exclusively for testing purposes.`}),`
`,(0,n.jsx)(r.info,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`BASE_URL`}),`: `,(0,n.jsx)(r.a,{href:`https://sandboxld.epicode.in/api/`,children:`https://sandboxld.epicode.in/api/`})]})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:`/api`,children:`Click here`}),` for IraVoice API documentation`]})}),`
`,(0,n.jsx)(r.h2,{id:`making-a-test-call-for-iravoice`,children:`Making a test call for IraVoice`}),`
`,(0,n.jsx)(r.p,{children:`Below is a sample request to make call through IraVoice:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`curl --location 'https://sandboxld.epicode.in/api/makecall' \\\\  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\\--header 'Content-Type: application/json' \\\\  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\\--header 'Authorization: Bearer <Bearer token>' \\\\  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\\--data '{  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "campaign_name": "<campaign_name>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "tenant_id": "<tenant_id>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "from_number": "<from_number>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "to_number": "<your-number>",  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 "call_params": {  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0 \xA0 \xA0 \xA0 "websocket_host": "<websocket-host>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"websocket_port": "<websocket-port>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"websocket_app": "<websocket-path>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"event_url" : "<your-http-endpoint>"\xA0\xA0`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`\xA0\xA0}  `})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}'`})})]})})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`You can replace the\xA0 `,(0,n.jsx)(r.strong,{children:`websocket_host,`}),` `,(0,n.jsx)(r.strong,{children:`websocket_port`}),` and `,(0,n.jsx)(r.strong,{children:`websocket_app`}),` values to match those of your voicebot and `,(0,n.jsx)(r.strong,{children:`to_number`}),` to the number you are making an outbound call to.\xA0`]}),`
`,(0,n.jsxs)(r.li,{children:[`Please refer to the sample websocket code: `,(0,n.jsx)(r.a,{href:`https://drive.google.com/file/d/1n_dXpTgm5BNImtT1gWIWic6H4eDzNHHv/view?usp=sharing`,children:(0,n.jsx)(r.strong,{children:`websocket_script`})})]}),`
`,(0,n.jsxs)(r.li,{children:[`For more details on `,(0,n.jsx)(r.strong,{children:`Make Call request parameters`}),`: `,(0,n.jsx)(r.a,{href:`https://support.epicode.in/help/en-gb/15/272`,children:`https://support.epicode.in/help/en-gb/15/272`})]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`key-configurations`,children:`Key configurations:`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Media Stream Format:`}),(0,n.jsx)(r.br,{}),`
`,`The voicebot application must stream audio to IraVoice over WebSocket in the following format:`]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`PCM (signed 16-bit)`}),`
`,(0,n.jsx)(r.li,{children:`Sampling rate: 8 kHz or 16 kHz`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Streaming Modes:`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`VAD Mode`}),` ("streaming_useraudio": false)`]}),`
`,(0,n.jsx)(r.li,{children:`Audio is delivered as complete utterances`}),`
`,(0,n.jsx)(r.li,{children:`Triggered when the user finishes speaking`}),`
`,(0,n.jsxs)(r.li,{children:[`\xA0`,(0,n.jsx)(r.strong,{children:`Non-VAD Mode`}),` ("streaming_useraudio": true)`]}),`
`,(0,n.jsx)(r.li,{children:`Audio is streamed continuously in chunks`}),`
`,(0,n.jsx)(r.li,{children:`Default chunk size: 3200 bytes (~200 ms of audio)`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Supported Codecs by IraVoice:`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`PCMU (8kHz)`}),`
`,(0,n.jsx)(r.li,{children:`PCMA (8kHz)`}),`
`,(0,n.jsx)(r.li,{children:`OPUS (16kHz)`}),`
`,(0,n.jsx)(r.li,{children:`G722 (16khz)`}),`
`,(0,n.jsx)(r.li,{children:`G722.2 / AMR-WB (16kHz)`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`making-an-inbound-call-in-iravoice`,children:`Making an inbound call in Iravoice`}),`
`,(0,n.jsx)(r.p,{children:`To configure inbound calling for a particular number you can reach out to Epicode support team and share the call params you want us to set for the inbound calls.`}),`
`,(0,n.jsx)(r.h2,{id:`frequently-asked-questions`,children:`Frequently asked questions`}),`
`,(0,n.jsxs)(r.p,{children:[`For common doubts and queries with IraVoice please refer\xA0 to `,(0,n.jsx)(r.a,{href:`https://docs.google.com/document/d/1TmWbWD27Z5wX3672bXrRIt90uFIuBmXHT0qWnhP94zQ/edit?usp=sharing`,children:`IraVoice FAQ's`})]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=IravoiceSandbox-Br9up97N.js.map