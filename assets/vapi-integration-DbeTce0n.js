import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-6rHXX_Zo.js";var n=e(),r=`IraVoice can integrate with Vapi using Vapi's WebSocket transport mechanism. This integration allows IraVoice to connect live PSTN calls to a Vapi voicebot over a secure WebSocket (WSS) connection.`,i=[{depth:1,text:`Vapi-IraVoice Integration`,id:`vapi-iravoice-integration`,children:[{depth:2,text:`Overview`,id:`overview`},{depth:2,text:`Integration Flow`,id:`integration-flow`},{depth:2,text:`Creating a Vapi WebSocket Session`,id:`creating-a-vapi-websocket-session`,children:[{depth:3,text:`Sample Request`,id:`sample-request`}]},{depth:2,text:`Endpoint Requirements`,id:`endpoint-requirements`,children:[{depth:3,text:`Sample Endpoint`,id:`sample-endpoint`},{depth:3,text:`Request from IraVoice`,id:`request-from-iravoice`}]},{depth:2,text:`Expected Response`,id:`expected-response`},{depth:2,text:`Important Considerations`,id:`important-considerations`}]}],a={lastModifiedTime:`2026-06-12T09:37:11.000Z`},o=`pages/iravoice/vapi-integration.mdx`;function s(e){let r={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,note:`note`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`vapi-iravoice-integration`,children:`Vapi-IraVoice Integration`}),`
`,(0,n.jsx)(r.h2,{id:`overview`,children:`Overview`}),`
`,(0,n.jsx)(r.p,{children:`IraVoice can integrate with Vapi using Vapi's WebSocket transport mechanism. This integration allows IraVoice to connect live PSTN calls to a Vapi voicebot over a secure WebSocket (WSS) connection.`}),`
`,(0,n.jsx)(r.p,{children:`When a call is answered, IraVoice requests a dynamically generated WebSocket URL from your application. Your application is responsible for creating a Vapi WebSocket session and returning the corresponding WSS URL to IraVoice.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`integration-flow`,children:`Integration Flow`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`An inbound or outbound call is established through IraVoice.`}),`
`,(0,n.jsx)(r.li,{children:`Once the call is answered, IraVoice sends an HTTP POST request to your configured endpoint.`}),`
`,(0,n.jsx)(r.li,{children:`Your application creates a new Vapi WebSocket transport session.`}),`
`,(0,n.jsx)(r.li,{children:`Vapi returns a dynamic WebSocket URL.`}),`
`,(0,n.jsx)(r.li,{children:`Your application returns this WSS URL in the HTTP response.`}),`
`,(0,n.jsx)(r.li,{children:`IraVoice connects to the returned WebSocket endpoint and begins streaming audio between the caller and the Vapi voicebot.`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`Caller`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   ▼`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`IraVoice`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │ POST Request`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   ▼`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`Customer Endpoint`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │ Create Vapi WebSocket Session`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   ▼`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`Vapi`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │ Returns Dynamic WSS URL`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   ▼`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`Customer Endpoint`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │ Returns WSS URL`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   ▼`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`IraVoice`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   │`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`   ▼`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`Vapi Voicebot`})})]})})}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`creating-a-vapi-websocket-session`,children:`Creating a Vapi WebSocket Session`}),`
`,(0,n.jsx)(r.p,{children:`Your application must create a WebSocket session using the Vapi Call API.`}),`
`,(0,n.jsx)(r.h3,{id:`sample-request`,children:`Sample Request`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-bash shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`curl`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'https://api.vapi.ai/call'`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -H`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'authorization: Bearer YOUR_API_KEY'`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -H`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'content-type: application/json'`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  --data-raw`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '{`})]}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    "assistantId": "YOUR_ASSISTANT_ID",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    "transport": {`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`      "provider": "vapi.websocket",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`      "audioFormat": {`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        "format": "pcm_s16le",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        "container": "raw",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        "sampleRate": 16000`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`      }`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    }`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`  }'`})})]})})}),`
`,(0,n.jsx)(r.p,{children:`The response contains a dynamically generated WebSocket URL that can be used to connect the call audio stream to the Vapi assistant.`}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Refer to`}),`: `,(0,n.jsx)(r.a,{href:`https://docs.vapi.ai/calls/websocket-transport`,children:`https://docs.vapi.ai/calls/websocket-transport`})]})}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`endpoint-requirements`,children:`Endpoint Requirements`}),`
`,(0,n.jsx)(r.p,{children:`You must expose an HTTP endpoint that IraVoice can invoke when a call is answered.`}),`
`,(0,n.jsx)(r.h3,{id:`sample-endpoint`,children:`Sample Endpoint`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`POST /vapi/wss-url`})})})})}),`
`,(0,n.jsx)(r.h3,{id:`request-from-iravoice`,children:`Request from IraVoice`}),`
`,(0,n.jsx)(r.p,{children:`IraVoice sends a POST request to your endpoint after the call has been answered.`}),`
`,(0,n.jsx)(r.p,{children:`Example:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-json shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "call_uuid"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"12345678-abcd-1234-abcd-1234567890ab"`})]}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(r.blockquote,{children:[`
`,(0,n.jsx)(r.p,{children:`The exact payload may vary depending on your implementation requirements.`}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`expected-response`,children:`Expected Response`}),`
`,(0,n.jsx)(r.p,{children:`Example Response:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-json shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "call_uuid"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"12345678-abcd-1234-abcd-1234567890ab"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "wss_url"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"wss://your-vapi-generated-websocket-url"`})]}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsxs)(r.note,{children:[(0,n.jsx)(r.h2,{id:`important-considerations`,children:`Important Considerations`}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`A new WebSocket URL should be generated for every call.`}),`
`,(0,n.jsx)(r.li,{children:`The returned URL must be valid and immediately accessible by IraVoice.`}),`
`,(0,n.jsxs)(r.li,{children:[`The voicebot application must stream audio to IraVoice over WebSocket in the following format:`,`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`PCM (signed 16-bit)`}),`
`,(0,n.jsx)(r.li,{children:`Sampling rate: 8 kHz or 16 kHz`}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.li,{children:`Ensure that your endpoint responds quickly to avoid delays in call setup.`}),`
`,(0,n.jsx)(r.li,{children:`Any authentication required for invoking your endpoint should be coordinated during the integration process.`}),`
`]})]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=vapi-integration-DbeTce0n.js.map