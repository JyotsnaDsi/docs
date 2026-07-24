import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-G-RPdD_e.js";var n=e(),r=`IraCPA determines whether an outbound call has been answered by a live person or an answering machine. It does so by analysing speech pacing and prosody and does not rely on speech transcription.`,i=[{depth:1,text:`IraCPA - Detection Edge Cases`,id:`iracpa---detection-edge-cases`,children:[{depth:2,text:`Overview`,id:`overview`},{depth:2,text:`Common False-Positive Cases (Machine Detected as Human)`,id:`common-false-positive-cases-machine-detected-as-human`},{depth:2,text:`Common False-Negative Cases (Human Detected as Machine)`,id:`common-false-negative-cases-human-detected-as-machine`},{depth:2,text:`Common Reasons for False Positives and False Negatives`,id:`common-reasons-for-false-positives-and-false-negatives`},{depth:2,text:`Mitigating False Detections`,id:`mitigating-false-detections`}]}],a={lastModifiedTime:`2026-07-24T06:43:50.000Z`},o=`pages/iracpa/detection-edge-cases.mdx`;function s(e){let r={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`iracpa---detection-edge-cases`,children:`IraCPA - Detection Edge Cases`}),`
`,(0,n.jsx)(r.h2,{id:`overview`,children:`Overview`}),`
`,(0,n.jsx)(r.p,{children:`IraCPA determines whether an outbound call has been answered by a live person or an answering machine. It does so by analysing speech pacing and prosody and does not rely on speech transcription.`}),`
`,(0,n.jsxs)(r.p,{children:[`By default, IraCPA analyses the first `,(0,n.jsx)(r.strong,{children:`1.75 seconds`}),` of speech to comply with TCPA regulations, which require connecting the customer to an agent within two seconds of the first utterance.`]}),`
`,(0,n.jsx)(r.p,{children:`False classifications occur when the system misinterprets audio patterns, resulting in either abandoned calls or unnecessary agent time being spent on answering machines.`}),`
`,(0,n.jsx)(r.h2,{id:`common-false-positive-cases-machine-detected-as-human`,children:`Common False-Positive Cases (Machine Detected as Human)`}),`
`,(0,n.jsx)(r.p,{children:`A false positive occurs when an answering machine is incorrectly classified as a live person. This usually happens when voicemail greetings are human-recorded and contain a pause after the initial greeting.`}),`
`,(0,n.jsx)(r.p,{children:`For example:`}),`
`,(0,n.jsxs)(r.blockquote,{children:[`
`,(0,n.jsx)(r.p,{children:`"Hi there! I am currently not available. Please leave a message after the beep."`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`During the first `,(0,n.jsx)(r.strong,{children:`1.75 seconds`}),`, only `,(0,n.jsx)(r.strong,{children:`"Hi there!"`}),` may be present, which can resemble a human greeting and lead to a false positive.`]}),`
`,(0,n.jsx)(r.h2,{id:`common-false-negative-cases-human-detected-as-machine`,children:`Common False-Negative Cases (Human Detected as Machine)`}),`
`,(0,n.jsx)(r.p,{children:`A false negative occurs when a live person is incorrectly classified as an answering machine or voicemail. This typically happens when a business representative answers with a long greeting.`}),`
`,(0,n.jsx)(r.p,{children:`For example:`}),`
`,(0,n.jsxs)(r.blockquote,{children:[`
`,(0,n.jsx)(r.p,{children:`"Welcome to McDonald's. How may I help you?"`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`The speech pattern during the first `,(0,n.jsx)(r.strong,{children:`1.75 seconds`}),` may resemble a voicemail greeting and result in an incorrect answering machine detection. This often introduces a delay before the customer can speak to an agent or causes the call to be incorrectly routed to voicemail message drop logic.`]}),`
`,(0,n.jsx)(r.h2,{id:`common-reasons-for-false-positives-and-false-negatives`,children:`Common Reasons for False Positives and False Negatives`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Slow or delayed greetings.`}),`
`,(0,n.jsx)(r.li,{children:`Long business greetings.`}),`
`,(0,n.jsx)(r.li,{children:`Human-recorded voicemail messages.`}),`
`,(0,n.jsx)(r.li,{children:`Pauses in voicemail greetings.`}),`
`,(0,n.jsx)(r.li,{children:`Background noise during answer.`}),`
`,(0,n.jsx)(r.li,{children:`Poor network quality.`}),`
`,(0,n.jsx)(r.li,{children:`Audio clipping or packet loss.`}),`
`,(0,n.jsx)(r.li,{children:`Low-quality audio.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`mitigating-false-detections`,children:`Mitigating False Detections`}),`
`,(0,n.jsx)(r.p,{children:`Understanding the impact of false positives and false negatives is important when designing an outbound dialer workflow.`}),`
`,(0,n.jsx)(r.p,{children:`In case of False Positive, the call may be bridged to a human agent or a voice bot. As long as these occurrences remain a small percentage of the total call volume, the agent or voice bot can usually determine that the call has reached voicemail and either disconnect or leave a message.`}),`
`,(0,n.jsxs)(r.p,{children:[`IraCPA allows developers to control when CPA analysis should stop by configuring the `,(0,n.jsx)(r.code,{inline:`true`,children:`break_events`}),` parameter. Instead of stopping analysis immediately upon the first Human (LV) or Answering Machine (AM) event, we recommend allowing the analysis to continue.`]}),`
`,(0,n.jsxs)(r.p,{children:[`If a Silence (SL) event is triggered shortly after an Answering Machine (AM) event, typically within `,(0,n.jsx)(r.strong,{children:`three to four seconds`}),`, it often indicates that the initial AM classification was incorrect. Answering machine greetings are generally much longer and rarely pause so quickly. Therefore, an early silence is usually a live person waiting for a response after their greeting. In such scenarios, the application can safely bridge the call to a human agent or a voice bot, thereby recovering many false-negative detections and improving overall accuracy.`]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=detection-edge-cases-B7IuSauU.js.map