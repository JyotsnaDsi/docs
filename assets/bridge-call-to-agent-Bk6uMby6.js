import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-G-RPdD_e.js";var n=e(),r=`This guide explains how to transfer an active customer call from a voice bot to a human agent using IraVoice.`,i=[{depth:1,text:`Bridge Call to Agent`,id:`bridge-call-to-agent`,children:[{depth:2,text:`1. Blind Transfer`,id:`1-blind-transfer`,children:[{depth:3,text:`Step 1: Stop Voice Bot Streaming`,id:`step-1-stop-voice-bot-streaming`},{depth:3,text:`Step 2: Initiate the Agent Call`,id:`step-2-initiate-the-agent-call`},{depth:3,text:`Step 3: Wait for Agent Answer`,id:`step-3-wait-for-agent-answer`},{depth:3,text:`Step 4: Bridge the Calls`,id:`step-4-bridge-the-calls`,children:[{depth:4,text:`Result`,id:`result`}]},{depth:3,text:`Agent Unavailable Scenario`,id:`agent-unavailable-scenario`}]},{depth:2,text:`2. Assisted Transfer`,id:`2-assisted-transfer`,children:[{depth:3,text:`Step 1: Inform the Customer`,id:`step-1-inform-the-customer`},{depth:3,text:`Step 2: Initiate the Agent Call`,id:`step-2-initiate-the-agent-call-1`},{depth:3,text:`Step 3: Monitor Agent Response`,id:`step-3-monitor-agent-response`,children:[{depth:4,text:`Case A: Agent Answers`,id:`case-a-agent-answers`},{depth:4,text:`Stop Voice Bot Streaming`,id:`stop-voice-bot-streaming`},{depth:4,text:`Bridge the Calls`,id:`bridge-the-calls`},{depth:4,text:`Result`,id:`result-1`},{depth:4,text:`Case B: Agent Does Not Answer`,id:`case-b-agent-does-not-answer`}]}]},{depth:2,text:`Event Monitoring`,id:`event-monitoring`,children:[{depth:3,text:`Best Practices`,id:`best-practices`}]}]}],a={lastModifiedTime:`2026-07-15T11:53:44.000Z`},o=`pages/iravoice/bridge-call-to-agent.mdx`;function s(e){let r={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,note:`note`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tip:`tip`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`bridge-call-to-agent`,children:`Bridge Call to Agent`}),`
`,(0,n.jsx)(r.p,{children:`This guide explains how to transfer an active customer call from a voice bot to a human agent using IraVoice.`}),`
`,(0,n.jsx)(r.p,{children:`Two transfer mechanisms are supported:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Blind Transfer`}),` – The voice bot disconnects before the agent is contacted. Once the agent answers, the customer and agent calls are bridged together.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Assisted Transfer`}),` – The voice bot remains connected to the customer while an agent is contacted in parallel. The transfer occurs only after the agent answers.`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Choose the transfer method based on your desired customer experience and business workflow.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`1-blind-transfer`,children:`1. Blind Transfer`}),`
`,(0,n.jsx)(r.p,{children:`In a blind transfer, the voice bot disconnects from the customer before the agent is contacted. The customer is transferred only if the agent successfully answers.`}),`
`,(0,n.jsx)(r.h3,{id:`step-1-stop-voice-bot-streaming`,children:`Step 1: Stop Voice Bot Streaming`}),`
`,(0,n.jsx)(r.p,{children:`Disconnect the voice bot from the customer call to prevent any further interaction during the transfer process.`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`POST /api/stopstream`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`{`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "call_uuid": "<customer_call_uuid>"`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}`})})]})})}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`step-2-initiate-the-agent-call`,children:`Step 2: Initiate the Agent Call`}),`
`,(0,n.jsx)(r.p,{children:`Create a new outbound call to the agent.`}),`
`,(0,n.jsxs)(r.note,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Important:`})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Generate a unique `,(0,n.jsx)(r.code,{inline:`true`,children:`call_uuid`}),` for the agent leg.`]}),`
`,(0,n.jsx)(r.li,{children:`Use the appropriate SIP gateway configured for your deployment.`}),`
`,(0,n.jsx)(r.li,{children:`Disable streaming and recording for the agent leg.`}),`
`]})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`POST /api/makecallnow`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`{`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "gateway": "sofia/gateway/epi-poc-trunk",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "from_number": "<your_number>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "to_number": "<agent_number>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "tenant_id": "<tenant_id>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "call_uuid": "<agent_call_uuid>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "call_params": {`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`    "disable_streaming": true,`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`    "disable_recording": true,`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`    "event_url": "<event_url>"`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  }`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}`})})]})})}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`step-3-wait-for-agent-answer`,children:`Step 3: Wait for Agent Answer`}),`
`,(0,n.jsxs)(r.p,{children:[`Monitor the configured `,(0,n.jsx)(r.code,{inline:`true`,children:`event_url`}),` for call events.`]}),`
`,(0,n.jsx)(r.p,{children:`Proceed with the transfer only after receiving an:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`iravoice::answered`})})})})}),`
`,(0,n.jsx)(r.p,{children:`event for the agent call.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`step-4-bridge-the-calls`,children:`Step 4: Bridge the Calls`}),`
`,(0,n.jsx)(r.p,{children:`Once the agent answers, bridge the customer call and the agent call.`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`POST /api/bridgecalls`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`{`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "first_uuid": "<customer_call_uuid>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "second_uuid": "<agent_call_uuid>"`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}`})})]})})}),`
`,(0,n.jsx)(r.h4,{id:`result`,children:`Result`}),`
`,(0,n.jsx)(r.p,{children:`The customer and agent are connected directly, and the transfer process is complete.`}),`
`,(0,n.jsxs)(r.tip,{children:[(0,n.jsx)(r.h3,{id:`agent-unavailable-scenario`,children:`Agent Unavailable Scenario`}),(0,n.jsxs)(r.p,{children:[`If the agent does not answer, is busy, or the call fails (identified through the `,(0,n.jsx)(r.code,{inline:`true`,children:`iravoice::hangup`}),` event):`]}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Keep the voice bot active.`}),`
`,(0,n.jsx)(r.li,{children:`Play a fallback message to the customer.`}),`
`,(0,n.jsx)(r.li,{children:`Optionally retry another agent.`}),`
`,(0,n.jsx)(r.li,{children:`Disconnect the call if no agent is available.`}),`
`]})]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`2-assisted-transfer`,children:`2. Assisted Transfer`}),`
`,(0,n.jsx)(r.p,{children:`In an assisted transfer, the voice bot remains connected to the customer while an agent is contacted in parallel. This provides a smoother customer experience because the caller remains engaged during the transfer process.`}),`
`,(0,n.jsx)(r.h3,{id:`step-1-inform-the-customer`,children:`Step 1: Inform the Customer`}),`
`,(0,n.jsx)(r.p,{children:`Continue streaming through the voice bot and play a transfer message such as:`}),`
`,(0,n.jsxs)(r.blockquote,{children:[`
`,(0,n.jsx)(r.p,{children:`"Please wait while we connect you to an agent."`}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`step-2-initiate-the-agent-call-1`,children:`Step 2: Initiate the Agent Call`}),`
`,(0,n.jsx)(r.p,{children:`Place a parallel call to the agent while the customer remains connected to the voice bot.`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`POST /api/makecallnow`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`{`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "campaign_name": "<campaign_name>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "from_number": "<your_number>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "to_number": "<agent_number>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "tenant_id": "<tenant_id>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "call_params": {`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`    "disable_streaming": true,`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`    "disable_recording": true,`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`    "event_url": "<event_url>"`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  }`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}`})})]})})}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h3,{id:`step-3-monitor-agent-response`,children:`Step 3: Monitor Agent Response`}),`
`,(0,n.jsxs)(r.p,{children:[`Use the configured `,(0,n.jsx)(r.code,{inline:`true`,children:`event_url`}),` to monitor the status of the agent call.`]}),`
`,(0,n.jsx)(r.h4,{id:`case-a-agent-answers`,children:`Case A: Agent Answers`}),`
`,(0,n.jsx)(r.h4,{id:`stop-voice-bot-streaming`,children:`Stop Voice Bot Streaming`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`POST /api/stopstream`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`{`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "call_uuid": "<customer_call_uuid>"`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}`})})]})})}),`
`,(0,n.jsx)(r.h4,{id:`bridge-the-calls`,children:`Bridge the Calls`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-text shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`POST /api/bridgecalls`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`{`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "first_uuid": "<customer_call_uuid>",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`  "second_uuid": "<agent_call_uuid>"`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{children:`}`})})]})})}),`
`,(0,n.jsx)(r.h4,{id:`result-1`,children:`Result`}),`
`,(0,n.jsx)(r.p,{children:`The customer is seamlessly transferred to the agent after the agent answers.`}),`
`,(0,n.jsx)(r.h4,{id:`case-b-agent-does-not-answer`,children:`Case B: Agent Does Not Answer`}),`
`,(0,n.jsxs)(r.p,{children:[`If the agent is unavailable, busy, or the call fails (identified through the `,(0,n.jsx)(r.code,{inline:`true`,children:`iravoice::hangup`}),` event):`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Keep the voice bot connected.`}),`
`,(0,n.jsx)(r.li,{children:`Inform the customer that an agent is unavailable.`}),`
`,(0,n.jsx)(r.li,{children:`Play a fallback message.`}),`
`,(0,n.jsx)(r.li,{children:`Optionally attempt another agent transfer.`}),`
`,(0,n.jsx)(r.li,{children:`Disconnect the call if required by your workflow.`}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`event-monitoring`,children:`Event Monitoring`}),`
`,(0,n.jsx)(r.p,{children:`During both transfer flows, the following events are commonly used:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Event`}),(0,n.jsx)(r.th,{children:`Purpose`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`iravoice::answered`})}),(0,n.jsx)(r.td,{children:`Indicates that the agent has answered the call`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`iravoice::hangup`})}),(0,n.jsx)(r.td,{children:`Indicates call failure, timeout, rejection, or disconnect`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`iravoice::bridged`})}),(0,n.jsx)(r.td,{children:`Indicates that two call legs have been successfully bridged`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{inline:`true`,children:`iravoice::unbridged`})}),(0,n.jsx)(r.td,{children:`Indicates that a bridged call has been disconnected`})]})]})]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsxs)(r.tip,{children:[(0,n.jsx)(r.h3,{id:`best-practices`,children:`Best Practices`}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Always generate a unique `,(0,n.jsx)(r.code,{inline:`true`,children:`call_uuid`}),` for the agent leg.`]}),`
`,(0,n.jsx)(r.li,{children:`Disable streaming on the agent leg unless explicitly required.`}),`
`,(0,n.jsxs)(r.li,{children:[`Wait for the `,(0,n.jsx)(r.code,{inline:`true`,children:`iravoice::answered`}),` event before bridging calls.`]}),`
`,(0,n.jsx)(r.li,{children:`Implement timeout handling for unanswered agent calls.`}),`
`,(0,n.jsx)(r.li,{children:`Provide fallback messaging to avoid leaving customers in silence.`}),`
`,(0,n.jsx)(r.li,{children:`Log all transfer events for troubleshooting and reporting purposes.`}),`
`]})]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=bridge-call-to-agent-Bk6uMby6.js.map