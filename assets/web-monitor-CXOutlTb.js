import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-G-RPdD_e.js";var n=e(),r=`The IraVoice web monitor provides realtime visibility into outbound campaign activity, telephony infrastructure, and call performance metrics. It supports multi-tenancy and enables monitoring of campaigns, dialers, SIP trunks, websocket performance, bot response metrics, and license utilization from a centralized dashboard.`,i=[{depth:1,text:`Web Monitor`,id:`web-monitor`,children:[{depth:2,text:`Campaigns/logical gateways`,id:`campaignslogical-gateways`,children:[{depth:3,text:`Queue`,id:`queue`},{depth:3,text:`Limit`,id:`limit`},{depth:3,text:`Scheduled (SCHD)`,id:`scheduled-schd`},{depth:3,text:`Used (USED)`,id:`used-used`},{depth:3,text:`Answered (ANSD) / Stream (STRM)`,id:`answered-ansd--stream-strm`},{depth:3,text:`TRNST`,id:`trnst`},{depth:3,text:`WRT`,id:`wrt`},{depth:3,text:`BDL`,id:`bdl`},{depth:3,text:`Web Errors (WERR)`,id:`web-errors-werr`},{depth:3,text:`Types of Web Errors`,id:`types-of-web-errors`}]},{depth:2,text:`Bot Errors (BERR)`,id:`bot-errors-berr`},{depth:2,text:`Dialers`,id:`dialers`},{depth:2,text:`Trunks`,id:`trunks`}]}],a={lastModifiedTime:`2026-06-18T13:52:00.000Z`},o=`pages/iravoice/web-monitor.mdx`;function s(e){let r={caution:`caution`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,li:`li`,note:`note`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`web-monitor`,children:`Web Monitor`}),`
`,(0,n.jsx)(r.p,{children:`The IraVoice web monitor provides realtime visibility into outbound campaign activity, telephony infrastructure, and call performance metrics. It supports multi-tenancy and enables monitoring of campaigns, dialers, SIP trunks, websocket performance, bot response metrics, and license utilization from a centralized dashboard.`}),`
`,(0,n.jsx)(r.p,{children:`The platform also includes a scheduler component that manages call queuing, distributes load across dialers, and supports configurations such as CPS limits and dial timeouts. Working hours can be configured globally and can also be defined during campaign creation for more granular control.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:`/epicode-docs/web-monitor.png`,alt:``})}),`
`,(0,n.jsx)(r.h2,{id:`campaignslogical-gateways`,children:`Campaigns/logical gateways`}),`
`,(0,n.jsx)(r.p,{children:`It allows multiple SIP trunks to be grouped together into logical entities and used for outbound call routing.`}),`
`,(0,n.jsx)(r.p,{children:`Logical gateways provide:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Trunk redundancy`}),`
`,(0,n.jsx)(r.li,{children:`Better load distribution`}),`
`,(0,n.jsx)(r.li,{children:`Controlled trunk utilization`}),`
`,(0,n.jsx)(r.li,{children:`Flexible outbound routing across multiple SIP trunks`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`queue`,children:`Queue`}),`
`,(0,n.jsx)(r.p,{children:`This column shows the number of contacts yet to be dialed or waiting for trunks to become available.`}),`
`,(0,n.jsx)(r.h3,{id:`limit`,children:`Limit`}),`
`,(0,n.jsx)(r.p,{children:`Limit represents the maximum concurrent calls a campaign can handle, provided sufficient telephony trunk capacity is available.`}),`
`,(0,n.jsx)(r.caution,{children:(0,n.jsx)(r.p,{children:`When multiple campaigns are running simultaneously, the total active campaign limits should not exceed the total available channels across the trunks assigned to those campaigns.
Exceeding this may consume all available channels and affect other active campaigns.`})}),`
`,(0,n.jsx)(r.h3,{id:`scheduled-schd`,children:`Scheduled (SCHD)`}),`
`,(0,n.jsx)(r.p,{children:`The router schedules calls from the queue whenever trunks become available.`}),`
`,(0,n.jsx)(r.p,{children:`This column displays the count of scheduled calls.`}),`
`,(0,n.jsx)(r.h3,{id:`used-used`,children:`Used (USED)`}),`
`,(0,n.jsx)(r.p,{children:`This column displays the total number of calls currently:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Being dialed`}),`
`,(0,n.jsx)(r.li,{children:`Ringing`}),`
`,(0,n.jsx)(r.li,{children:`Answered`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`answered-ansd--stream-strm`,children:`Answered (ANSD) / Stream (STRM)`}),`
`,(0,n.jsx)(r.p,{children:`These columns display:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`The count of ongoing answered calls`}),`
`,(0,n.jsx)(r.li,{children:`The count of active websocket audio streams connected to the bot`}),`
`]}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsx)(r.p,{children:`The difference between Answered calls and Streams should ideally remain low. A large difference may indicate issues in the botstream service or websocket streaming pipeline.
In such cases, verify the IraVoice logs for related errors.`})}),`
`,(0,n.jsx)(r.h3,{id:`trnst`,children:`TRNST`}),`
`,(0,n.jsx)(r.p,{children:`TRNST represents the average transit time.`}),`
`,(0,n.jsx)(r.p,{children:`It indicates the time taken for data to move from the websocket server to the botstream service. This metric helps identify network congestion or delays in audio/data transmission.`}),`
`,(0,n.jsx)(r.h3,{id:`wrt`,children:`WRT`}),`
`,(0,n.jsx)(r.p,{children:`WRT represents the average write time.`}),`
`,(0,n.jsx)(r.p,{children:`It measures the time required to completely write data into the socket on the websocket server.`}),`
`,(0,n.jsx)(r.h3,{id:`bdl`,children:`BDL`}),`
`,(0,n.jsx)(r.p,{children:`BDL (Average Bot Delay) represents the average time taken by the bot to respond.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`In VAD mode, it measures the average response delay across all bot responses during the call within the last 30 seconds.`}),`
`,(0,n.jsx)(r.li,{children:`In non-VAD mode, it measures the average delay for the first audio response.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`All values are measured in milliseconds.`}),`
`,(0,n.jsx)(r.h3,{id:`web-errors-werr`,children:`Web Errors (WERR)`}),`
`,(0,n.jsx)(r.p,{children:`When errors occur on the websocket server, this column displays the count of calls affected by web errors during the last 30 seconds.`}),`
`,(0,n.jsx)(r.h3,{id:`types-of-web-errors`,children:`Types of Web Errors`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:`/epicode-docs/weberr.png`,alt:``})}),`
`,(0,n.jsx)(r.p,{children:`Hover over the Web Errors column to view the error breakdown.`}),`
`,(0,n.jsx)(r.p,{children:`When errors occur on the websocket server, this column displays the count of calls affected by web errors during the last 30 seconds.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Error Type`}),(0,n.jsx)(r.th,{children:`Description`}),(0,n.jsx)(r.th,{children:`Resolution`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Resolve Errors`}),(0,n.jsx)(r.td,{children:`Number of calls experiencing delays while resolving the DNS of the websocket server.`}),(0,n.jsx)(r.td,{children:`Add the websocket DNS and corresponding IP address into the server host file.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Connect Errors`}),(0,n.jsx)(r.td,{children:`Number of calls unable to establish a connection with the websocket server.`}),(0,n.jsx)(r.td,{children:`Verify accessibility of the websocket DNS/server from the IraVoice server. If required, update firewall rules on both websocket and IraVoice servers.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`SSL Errors`}),(0,n.jsx)(r.td,{children:`Number of calls experiencing delays during SSL handshake.`}),(0,n.jsx)(r.td,{children:`SSL-related issues must be handled by the client infrastructure.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`WSS Errors`}),(0,n.jsx)(r.td,{children:`Number of calls experiencing delays during WebSocket handshake.`}),(0,n.jsx)(r.td,{children:`WSS-related issues must be handled by the client infrastructure.`})]})]})]}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Note:`}),`
SSL and WSS related issues must be handled by the client infrastructure.`]})}),`
`,(0,n.jsx)(r.h2,{id:`bot-errors-berr`,children:`Bot Errors (BERR)`}),`
`,(0,n.jsx)(r.p,{children:`For VAD mode:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Bot errors are marked for all bot audio responses received beyond the configured threshold during the last 30 seconds.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`For non-VAD mode:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Bot errors are marked only when the first audio response exceeds the configured threshold during the last 30 seconds.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`dialers`,children:`Dialers`}),`
`,(0,n.jsx)(r.p,{children:`The Dialers section provides an instance-level view of each IRaVoice dialer.`}),`
`,(0,n.jsx)(r.p,{children:`It enables monitoring of:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Call usage`}),`
`,(0,n.jsx)(r.li,{children:`Answered and dialed calls`}),`
`,(0,n.jsx)(r.li,{children:`Streaming activity`}),`
`,(0,n.jsx)(r.li,{children:`Web errors`}),`
`,(0,n.jsx)(r.li,{children:`Bot errors`}),`
`,(0,n.jsx)(r.li,{children:`Gateway utilization`}),`
`,(0,n.jsx)(r.li,{children:`Average bot delay`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`This section helps identify performance issues and monitor the health and activity of individual dialer instances in realtime.`}),`
`,(0,n.jsx)(r.h2,{id:`trunks`,children:`Trunks`}),`
`,(0,n.jsx)(r.p,{children:`The Trunk section provides detailed monitoring information for all SIP trunks configured for a tenant.`}),`
`,(0,n.jsx)(r.p,{children:`This section includes:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Channel capacity of each trunk`}),`
`,(0,n.jsx)(r.li,{children:`Configured concurrent call limits`}),`
`,(0,n.jsx)(r.li,{children:`CPS (Calls Per Second) limits`}),`
`,(0,n.jsx)(r.li,{children:`Realtime trunk utilization metrics`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`The channel capacity determines the maximum concurrent calls that can be configured during campaign creation.`}),`
`,(0,n.jsx)(r.p,{children:`Each trunk also displays operational metrics such as:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`SCHD (Scheduled calls)`}),`
`,(0,n.jsx)(r.li,{children:`USED (Calls currently in use)`}),`
`,(0,n.jsx)(r.li,{children:`CALL (Active call count)`}),`
`,(0,n.jsx)(r.li,{children:`STRM (Active audio streams)`}),`
`,(0,n.jsx)(r.li,{children:`ERR (Errors associated with the trunk)`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`This helps monitor trunk usage, identify congestion, and validate telephony capacity in realtime.`}),`
`,(0,n.jsx)(r.p,{children:`The licenses section shows license consumption per tenant, for tracking usage against allocated capacity.`})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=web-monitor-CXOutlTb.js.map