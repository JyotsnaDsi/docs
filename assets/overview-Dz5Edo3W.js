import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-G-RPdD_e.js";var n=e(),r=`The rate at which outbound calls are initiated. CPS represents the maximum number of call attempts that can be started per second.`,i=[{depth:1,text:`Outbound Campaign Capacity and Dialing Overview`,id:`outbound-campaign-capacity-and-dialing-overview`,children:[{depth:2,text:`1. Key Definitions`,id:`1-key-definitions`,children:[{depth:3,text:`Calls Per Second (CPS)`,id:`calls-per-second-cps`},{depth:3,text:`Channels`,id:`channels`},{depth:3,text:`Call Volume`,id:`call-volume`},{depth:3,text:`Important Notes`,id:`important-notes`}]},{depth:2,text:`2. Dialing Behavior in IraVoice`,id:`2-dialing-behavior-in-iravoice`,children:[{depth:3,text:`When Channel Capacity Is Reached`,id:`when-channel-capacity-is-reached`},{depth:3,text:`Typical Connect Rate`,id:`typical-connect-rate`}]},{depth:2,text:`3. Factors Affecting Campaign Throughput`,id:`3-factors-affecting-campaign-throughput`},{depth:2,text:`4. Regulatory Considerations (TRAI)`,id:`4-regulatory-considerations-trai`,children:[{depth:3,text:`Impact on Campaign Operations`,id:`impact-on-campaign-operations`}]}]}],a={lastModifiedTime:`2026-06-12T13:02:45.000Z`},o=`pages/iravoice/overview.mdx`;function s(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,note:`note`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`outbound-campaign-capacity-and-dialing-overview`,children:`Outbound Campaign Capacity and Dialing Overview`}),`
`,(0,n.jsx)(r.h2,{id:`1-key-definitions`,children:`1. Key Definitions`}),`
`,(0,n.jsx)(r.h3,{id:`calls-per-second-cps`,children:`Calls Per Second (CPS)`}),`
`,(0,n.jsx)(r.p,{children:`The rate at which outbound calls are initiated. CPS represents the maximum number of call attempts that can be started per second.`}),`
`,(0,n.jsx)(r.h3,{id:`channels`,children:`Channels`}),`
`,(0,n.jsx)(r.p,{children:`The total number of concurrent call sessions that can exist at any given time, including both dialing and connected calls.`}),`
`,(0,n.jsx)(r.h3,{id:`call-volume`,children:`Call Volume`}),`
`,(0,n.jsx)(r.p,{children:`The total number of calls planned for a campaign over a defined period (daily, weekly, or monthly).`}),`
`,(0,n.jsxs)(r.note,{children:[(0,n.jsx)(r.h3,{id:`important-notes`,children:`Important Notes`}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`CPS is dependent on the available channel capacity.`}),`
`,(0,n.jsx)(r.li,{children:`The number of channels is always greater than the CPS value.`}),`
`,(0,n.jsx)(r.li,{children:`Channels determine the maximum number of parallel calls that can be handled.`}),`
`]})]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Example`})}),`
`,(0,n.jsxs)(r.p,{children:[`A telecom provider may allocate `,(0,n.jsx)(r.strong,{children:`35 CPS with 1,000 channels`}),`. This means:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Up to `,(0,n.jsx)(r.strong,{children:`35 new calls`}),` can be initiated every second.`]}),`
`,(0,n.jsxs)(r.li,{children:[`A maximum of `,(0,n.jsx)(r.strong,{children:`1,000 concurrent call sessions`}),` can exist at any given time.`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`2-dialing-behavior-in-iravoice`,children:`2. Dialing Behavior in IraVoice`}),`
`,(0,n.jsxs)(r.p,{children:[`IraVoice initiates outbound calls at the configured CPS rate (for example, `,(0,n.jsx)(r.strong,{children:`35 CPS`}),`).`]}),`
`,(0,n.jsxs)(r.p,{children:[`As calls are placed, channels are gradually occupied. With 1,000 available channels and a dialing rate of 35 CPS, channel capacity is typically reached within approximately `,(0,n.jsx)(r.strong,{children:`30 seconds`}),`.`]}),`
`,(0,n.jsx)(r.h3,{id:`when-channel-capacity-is-reached`,children:`When Channel Capacity Is Reached`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`New call attempts are placed in a queue.`}),`
`,(0,n.jsx)(r.li,{children:`Additional dialing resumes only when active channels become available.`}),`
`,(0,n.jsx)(r.li,{children:`Channel availability is determined by call completion, rejection, or disconnect events.`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`typical-connect-rate`,children:`Typical Connect Rate`}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[`In India, approximately `,(0,n.jsx)(r.strong,{children:`35–40%`}),` of dialed calls are answered and connected. Connected calls generally occupy channels longer than unanswered or failed call attempts.`]})}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`3-factors-affecting-campaign-throughput`,children:`3. Factors Affecting Campaign Throughput`}),`
`,(0,n.jsx)(r.p,{children:`Actual campaign throughput depends on the following factors:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Factor`}),(0,n.jsx)(r.th,{children:`Description`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Channels`})}),(0,n.jsx)(r.td,{children:`Number of calls that can run concurrently.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Call Duration`})}),(0,n.jsx)(r.td,{children:`Longer calls keep channels occupied for extended periods.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Answer/Connect Rate`})}),(0,n.jsx)(r.td,{children:`Higher connect rates increase channel occupancy because connected calls last longer.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`CPS`})}),(0,n.jsx)(r.td,{children:`Determines how quickly new call attempts can be initiated.`})]})]})]}),`
`,(0,n.jsx)(r.p,{children:`These factors collectively influence the total number of calls that can be processed during a campaign.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`4-regulatory-considerations-trai`,children:`4. Regulatory Considerations (TRAI)`}),`
`,(0,n.jsx)(r.p,{children:`According to TRAI regulations:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`140-series numbers`}),` must be used for telemarketing and promotional calling campaigns.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`160-series numbers`}),` are generally reserved for transactional and service-related communications.`]}),`
`]}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:`/sandbox/compliance`,children:`click here`}),` for more information on TRAI Regulations.`]})}),`
`,(0,n.jsx)(r.h3,{id:`impact-on-campaign-operations`,children:`Impact on Campaign Operations`}),`
`,(0,n.jsx)(r.p,{children:`Regulatory requirements affect:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Number provisioning and allocation`}),`
`,(0,n.jsx)(r.li,{children:`Campaign configuration (including permitted calling hours)`}),`
`,(0,n.jsx)(r.li,{children:`Compliance and governance for outbound dialing activities`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Organizations should ensure that the appropriate numbering series is used based on the nature of the communication to remain compliant with TRAI guidelines.`})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=overview-Dz5Edo3W.js.map