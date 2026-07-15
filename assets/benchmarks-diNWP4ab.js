import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-G-RPdD_e.js";var n=e(),r=`Answering Machine Detection (AMD) is a technology used with dialers to identify calls answered by voicemail systems instead of a live person. The objective is to quickly determine whether the call has been answered by:`,i=[{depth:1,text:`IraCPA Machine Detection and Accuracy`,id:`iracpa-machine-detection-and-accuracy`,children:[{depth:2,text:`Answering Machine Detection (AMD)`,id:`answering-machine-detection-amd`},{depth:2,text:`Evaluation Techniques`,id:`evaluation-techniques`},{depth:2,text:`Voicemail Beep Detection`,id:`voicemail-beep-detection`},{depth:2,text:`Handling Early Answer Events`,id:`handling-early-answer-events`},{depth:2,text:`Benchmarks`,id:`benchmarks`}]}],a={lastModifiedTime:`2026-07-15T11:53:44.000Z`},o=`pages/iracpa/benchmarks.mdx`;function s(e){let r={h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`iracpa-machine-detection-and-accuracy`,children:`IraCPA Machine Detection and Accuracy`}),`
`,(0,n.jsx)(r.h2,{id:`answering-machine-detection-amd`,children:`Answering Machine Detection (AMD)`}),`
`,(0,n.jsx)(r.p,{children:`Answering Machine Detection (AMD) is a technology used with dialers to identify calls answered by voicemail systems instead of a live person. The objective is to quickly determine whether the call has been answered by:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Live Human`}),`
`,(0,n.jsx)(r.li,{children:`Answering Machine`}),`
`,(0,n.jsx)(r.li,{children:`Voicemail`}),`
`,(0,n.jsx)(r.li,{children:`Fax`}),`
`,(0,n.jsx)(r.li,{children:`Modem`}),`
`,(0,n.jsx)(r.li,{children:`IVR`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`This decision must typically be made within `,(0,n.jsx)(r.strong,{children:`2 seconds`}),` to comply with `,(0,n.jsx)(r.strong,{children:`TCPA regulations`}),` in the United States. TCPA requires the call to be transferred to a live agent within `,(0,n.jsx)(r.strong,{children:`2 seconds`}),` after the called party completes their greeting.`]}),`
`,(0,n.jsx)(r.h2,{id:`evaluation-techniques`,children:`Evaluation Techniques`}),`
`,(0,n.jsxs)(r.p,{children:[`Epicode's `,(0,n.jsx)(r.strong,{children:`Call Progress Analysis (IraCPA)`}),` module uses advanced voice analysis algorithms that evaluate:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Speech patterns`}),`
`,(0,n.jsx)(r.li,{children:`Tone of voice`}),`
`,(0,n.jsx)(r.li,{children:`Speaking speed`}),`
`,(0,n.jsx)(r.li,{children:`Post-greeting silence`}),`
`,(0,n.jsx)(r.li,{children:`Audio characteristics`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`These techniques enable `,(0,n.jsx)(r.strong,{children:`industry-leading detection accuracy`}),` with an analysis time of only `,(0,n.jsx)(r.strong,{children:`1.75 seconds`}),`, leaving approximately `,(0,n.jsx)(r.strong,{children:`0.25 seconds`}),` for applications to transfer or bridge the call to an agent while remaining fully TCPA compliant.`]}),`
`,(0,n.jsx)(r.h2,{id:`voicemail-beep-detection`,children:`Voicemail Beep Detection`}),`
`,(0,n.jsx)(r.p,{children:`IraCPA also supports voicemail drop workflows.`}),`
`,(0,n.jsx)(r.p,{children:`After detecting that the call has been answered by an answering machine:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`IraCPA immediately notifies the application.`}),`
`,(0,n.jsx)(r.li,{children:`Audio analysis continues while listening for the voicemail beep.`}),`
`,(0,n.jsx)(r.li,{children:`Once the beep is detected, another notification is sent.`}),`
`,(0,n.jsx)(r.li,{children:`The application can then automatically play a prerecorded voicemail message.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`handling-early-answer-events`,children:`Handling Early Answer Events`}),`
`,(0,n.jsxs)(r.p,{children:[`During large-scale deployments, some telecom carriers generate the `,(0,n.jsx)(r.strong,{children:`call answered`}),` event before the audio path is fully established. This can result in the first few seconds of the call containing complete silence.`]}),`
`,(0,n.jsx)(r.p,{children:`To improve detection accuracy, IraCPA can:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Distinguish between `,(0,n.jsx)(r.strong,{children:`absolute silence`}),` and `,(0,n.jsx)(r.strong,{children:`ambient background noise`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Ignore initial silence for a configurable duration (up to `,(0,n.jsx)(r.strong,{children:`5 seconds`}),`)`]}),`
`,(0,n.jsx)(r.li,{children:`Begin analysis only after meaningful audio is detected`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`This significantly improves the accuracy of distinguishing between live humans and answering machines.`}),`
`,(0,n.jsx)(r.h2,{id:`benchmarks`,children:`Benchmarks`}),`
`,(0,n.jsxs)(r.p,{children:[`The following benchmarks are based on extensive internal testing along with production deployments across the `,(0,n.jsx)(r.strong,{children:`United States`}),` and `,(0,n.jsx)(r.strong,{children:`Europe`}),`.`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Time Since First Utterance`}),(0,n.jsx)(r.th,{style:{textAlign:`right`},children:`Sample Size`}),(0,n.jsx)(r.th,{style:{textAlign:`right`},children:`Human Accuracy`}),(0,n.jsx)(r.th,{style:{textAlign:`right`},children:`Machine Accuracy`}),(0,n.jsx)(r.th,{style:{textAlign:`right`},children:`Fax Accuracy`}),(0,n.jsx)(r.th,{style:{textAlign:`right`},children:`Overall Accuracy`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`1.50 seconds`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`10,000`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`86%`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`90%`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`100%`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`86.8%`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`1.75 seconds`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`10,000`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`92%`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`95%`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:`100%`}),(0,n.jsx)(r.td,{style:{textAlign:`right`},children:(0,n.jsx)(r.strong,{children:`93.2%`})})]})]})]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=benchmarks-diNWP4ab.js.map