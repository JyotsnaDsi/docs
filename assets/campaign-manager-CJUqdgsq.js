import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-C2cyKK4t.js";var n=e(),r=`The IraVoice Campaign Manager enables developers and administrators to create, configure, and manage outbound calling campaigns based on the available SIP trunk and dialer capacity.`,i=[{depth:1,text:`Campaign Manager`,id:`campaign-manager`,children:[{depth:2,text:`Campaign Configuration Parameters`,id:`campaign-configuration-parameters`,children:[{depth:3,text:`Campaign Name`,id:`campaign-name`},{depth:3,text:`Tenant ID`,id:`tenant-id`},{depth:3,text:`Campaign Type`,id:`campaign-type`},{depth:3,text:`Working Hours`,id:`working-hours`},{depth:3,text:`Cluster ID`,id:`cluster-id`},{depth:3,text:`Maximum Concurrent Call Limit`,id:`maximum-concurrent-call-limit`},{depth:3,text:`Cluster Weightage`,id:`cluster-weightage`},{depth:3,text:`Gateway`,id:`gateway`},{depth:3,text:`DID Range`,id:`did-range`}]},{depth:2,text:`Cluster and Gateway Architecture`,id:`cluster-and-gateway-architecture`}]}],a={lastModifiedTime:`2026-05-29T12:55:42.000Z`},o=`pages/iravoice/campaign-manager.mdx`;function s(e){let r={a:`a`,caution:`caution`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tip:`tip`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`campaign-manager`,children:`Campaign Manager`}),`
`,(0,n.jsx)(r.p,{children:`The IraVoice Campaign Manager enables developers and administrators to create, configure, and manage outbound calling campaigns based on the available SIP trunk and dialer capacity.`}),`
`,(0,n.jsx)(r.p,{children:`Campaigns can be configured for different dialing strategies and activated to handle large-scale outbound calling operations efficiently.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:`/epicode-docs/campaign-mgr.png`,alt:``})}),`
`,(0,n.jsx)(r.h2,{id:`campaign-configuration-parameters`,children:`Campaign Configuration Parameters`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:`/epicode-docs/create-cmpn.png`,alt:``})}),`
`,(0,n.jsx)(r.p,{children:`When creating a campaign, the following parameters must be configured:`}),`
`,(0,n.jsx)(r.h3,{id:`campaign-name`,children:`Campaign Name`}),`
`,(0,n.jsx)(r.p,{children:`A unique name used to identify the campaign.`}),`
`,(0,n.jsx)(r.h3,{id:`tenant-id`,children:`Tenant ID`}),`
`,(0,n.jsx)(r.p,{children:`The unique tenant identifier assigned by the Epicode team during onboarding.`}),`
`,(0,n.jsx)(r.h3,{id:`campaign-type`,children:`Campaign Type`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Campaign Type`}),(0,n.jsx)(r.th,{children:`Description`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Voicebot`})}),(0,n.jsx)(r.td,{children:`Used for AI voicebot-driven outbound campaigns.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Preview`})}),(0,n.jsx)(r.td,{children:`Used for agent-assisted calling where agents review customer information before initiating a one-to-one call.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Progressive`})}),(0,n.jsx)(r.td,{children:`Used for continuous agent-based dialing where calls are initiated based on agent availability, enabling minimum idle time.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Predictive`})}),(0,n.jsx)(r.td,{children:`Used for high-volume agent campaigns where the system predicts the number of calls to dial based on agent availability and answer rate patterns.`})]})]})]}),`
`,(0,n.jsx)(r.h3,{id:`working-hours`,children:`Working Hours`}),`
`,(0,n.jsx)(r.p,{children:`Defines the start and stop time during which the campaign is allowed to run.`}),`
`,(0,n.jsx)(r.caution,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Important:`}),` Outbound campaigns using 140-series numbers in India must comply with TRAI-approved calling hours and telecom regulations.
Calls placed outside the permitted time window may be rejected by telecom providers.
To learn more, `,(0,n.jsx)(r.a,{href:`/sandbox/compliance#TRAI-Regulations-for-140-Series-Numbers`,children:`click here`}),`.`]})}),`
`,(0,n.jsx)(r.h3,{id:`cluster-id`,children:`Cluster ID`}),`
`,(0,n.jsx)(r.p,{children:`Each campaign must be associated with one or more IraVoice Dialer clusters.`}),`
`,(0,n.jsx)(r.p,{children:`A cluster can hold one or more dialer components responsible for processing outbound calls.`}),`
`,(0,n.jsx)(r.h3,{id:`maximum-concurrent-call-limit`,children:`Maximum Concurrent Call Limit`}),`
`,(0,n.jsx)(r.p,{children:`Defines the maximum number of concurrent outbound calls allowed for a cluster.`}),`
`,(0,n.jsx)(r.p,{children:`This limit is generally configured based on the allocated SIP trunk channel capacity.`}),`
`,(0,n.jsx)(r.h3,{id:`cluster-weightage`,children:`Cluster Weightage`}),`
`,(0,n.jsx)(r.p,{children:`Determines the priority of a cluster within a campaign.`}),`
`,(0,n.jsx)(r.p,{children:`Clusters with higher weightage receive higher call allocation priority compared to other clusters in the same campaign.`}),`
`,(0,n.jsx)(r.h3,{id:`gateway`,children:`Gateway`}),`
`,(0,n.jsx)(r.p,{children:`Specifies the gateway connected to the SIP trunk through which IraVoice initiates outbound calls.`}),`
`,(0,n.jsx)(r.h3,{id:`did-range`,children:`DID Range`}),`
`,(0,n.jsx)(r.p,{children:`Defines the DID number range allocated to the associated SIP trunk for outbound calling.`}),`
`,(0,n.jsxs)(r.tip,{children:[(0,n.jsxs)(r.p,{children:[`Click on `,(0,n.jsx)(r.strong,{children:`Sync`}),` to synchronize the campaign configuration across all associated campaigns.`]}),(0,n.jsx)(r.p,{children:`The sync operation loads newly created campaigns and applies any configuration updates made to existing campaigns at any point in time.`})]}),`
`,(0,n.jsx)(r.h2,{id:`cluster-and-gateway-architecture`,children:`Cluster and Gateway Architecture`}),`
`,(0,n.jsx)(r.p,{children:`A single campaign can contain multiple dialer clusters.`}),`
`,(0,n.jsx)(r.p,{children:`Each  cluster can further contain multiple gateways connected to different SIP trunks or telecom providers.`}),`
`,(0,n.jsx)(r.p,{children:`This architecture provides:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Load distribution across dialers`}),`
`,(0,n.jsx)(r.li,{children:`High availability and failover handling`}),`
`,(0,n.jsx)(r.li,{children:`Flexible SIP trunk utilization`}),`
`,(0,n.jsx)(r.li,{children:`Scalability for high-volume outbound campaigns`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`The Campaign Manager dynamically distributes outbound traffic across configured clusters and gateways based on campaign settings, weightage, and available capacity.`})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=campaign-manager-CJUqdgsq.js.map