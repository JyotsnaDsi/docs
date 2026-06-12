import{t as e}from"./jsx-runtime-BFqoZbY3.js";import{n as t}from"./lib-G-RPdD_e.js";var n=e(),r=`The WhatsApp Business Calling API enables businesses to initiate and receive voice calls with WhatsApp users using Voice over VoIP.
Unlike traditional Cloud API messaging workflows that rely on Graph API endpoints and webhooks,
WhatsApp Calling supports SIP (Session Initiation Protocol) as the signaling protocol for voice communication.`,i=[{depth:1,text:`WhatsApp Business Calling API Integration`,id:`whatsapp-business-calling-api-integration`,children:[{depth:2,text:`Introduction`,id:`introduction`},{depth:2,text:`Setup`,id:`setup`,children:[{depth:3,text:`Prerequisites and Account Setup`,id:`prerequisites-and-account-setup`},{depth:3,text:`Account Requirements`,id:`account-requirements`},{depth:3,text:`Application Requirements`,id:`application-requirements`}]},{depth:2,text:`User-Initiated Calls`,id:`user-initiated-calls`,children:[{depth:3,text:`Configuration Steps`,id:`configuration-steps`},{depth:3,text:`Important Notes`,id:`important-notes`},{depth:3,text:`Example API Request`,id:`example-api-request`},{depth:3,text:`Reconfiguration`,id:`reconfiguration`}]},{depth:2,text:`Business-Initiated Calls`,id:`business-initiated-calls`,children:[{depth:3,text:`Requirements`,id:`requirements`}]},{depth:2,text:`References`,id:`references`}]}],a={lastModifiedTime:`2026-06-12T12:43:20.000Z`},o=`pages/iravoice/whatsapp-calling.mdx`;function s(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,note:`note`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...t(),...e.components},{Stepper:i}=r;return i||l(`Stepper`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`whatsapp-business-calling-api-integration`,children:`WhatsApp Business Calling API Integration`}),`
`,(0,n.jsx)(r.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,n.jsx)(r.p,{children:`The WhatsApp Business Calling API enables businesses to initiate and receive voice calls with WhatsApp users using Voice over VoIP.
Unlike traditional Cloud API messaging workflows that rely on Graph API endpoints and webhooks,
WhatsApp Calling supports SIP (Session Initiation Protocol) as the signaling protocol for voice communication.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`setup`,children:`Setup`}),`
`,(0,n.jsx)(r.h3,{id:`prerequisites-and-account-setup`,children:`Prerequisites and Account Setup`}),`
`,(0,n.jsx)(r.p,{children:`Before configuring WhatsApp Calling, ensure the following prerequisites are met:`}),`
`,(0,n.jsx)(r.h3,{id:`account-requirements`,children:`Account Requirements`}),`
`,(0,n.jsx)(i,{children:(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Create a verified WhatsApp Business Account (WABA) in Meta Business Manager.`})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Register a phone number for calling.`})}),`
`,(0,n.jsx)(r.p,{children:`The business number must be connected to the WhatsApp Cloud API (not the WhatsApp Business App).`}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Reference:`}),`
`,(0,n.jsx)(r.a,{href:`https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers`,children:`https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers`})]})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Obtain a Permanent Access Token or System User Access Token for API authentication.`})}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Reference:`}),`
`,(0,n.jsx)(r.a,{href:`https://developers.facebook.com/docs/whatsapp/business-management-api/get-started/#system-user-access-tokens`,children:`https://developers.facebook.com/docs/whatsapp/business-management-api/get-started/#system-user-access-tokens`})]})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Enable Calling on the business phone number.`})}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Reference:`}),`
`,(0,n.jsx)(r.a,{href:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/call-settings`,children:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/call-settings`})]})}),`
`]}),`
`]})}),`
`,(0,n.jsx)(r.h3,{id:`application-requirements`,children:`Application Requirements`}),`
`,(0,n.jsx)(r.p,{children:`Before configuring SIP signaling:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Ensure all WhatsApp Calling prerequisites are satisfied.`}),`
`,(0,n.jsx)(r.li,{children:`Verify that the application has messaging permissions for the target business phone number.`}),`
`,(0,n.jsx)(r.li,{children:`Validate messaging functionality by sending and receiving messages through the Graph API.`}),`
`,(0,n.jsx)(r.li,{children:`Use the same application for SIP configuration.`}),`
`,(0,n.jsx)(r.li,{children:`Verify the phone number status using the Health Status API.`}),`
`,(0,n.jsxs)(r.li,{children:[`Ensure the application mode is set to `,(0,n.jsx)(r.strong,{children:`Live`}),` (not Development).`]}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`user-initiated-calls`,children:`User-Initiated Calls`}),`
`,(0,n.jsx)(r.p,{children:`User-initiated calls are calls placed by a WhatsApp user to your business.`}),`
`,(0,n.jsx)(r.h3,{id:`configuration-steps`,children:`Configuration Steps`}),`
`,(0,n.jsx)(r.p,{children:`Enable and configure SIP on the business phone number.`}),`
`,(0,n.jsx)(r.note,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Reference:`}),`
`,(0,n.jsx)(r.a,{href:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/sip#configure-update-sip-settings-on-business-phone-number`,children:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/sip#configure-update-sip-settings-on-business-phone-number`})]})}),`
`,(0,n.jsxs)(r.note,{children:[(0,n.jsx)(r.h3,{id:`important-notes`,children:`Important Notes`}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Generate a Bearer Token using the Permanent Access Token method.`}),`
`,(0,n.jsx)(r.li,{children:`Assign a hostname to the FreeSWITCH server and install a valid SSL certificate.`}),`
`,(0,n.jsx)(r.li,{children:`TLS support must be enabled in FreeSWITCH.`}),`
`,(0,n.jsx)(r.li,{children:`All fields in the API request are mandatory.`}),`
`]})]}),`
`,(0,n.jsx)(r.h3,{id:`example-api-request`,children:`Example API Request`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`language-bash shiki shiki-themes github-light github-dark`,inline:`false`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,children:[(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`curl`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'https://graph.facebook.com/v23.0/<Unique-ID-of-the-Registered-Number>/settings'`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`-H `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Authorization: Bearer <ACCESS_TOKEN>'`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`-H `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"Content-Type: application/json"`}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,children:[(0,n.jsx)(r.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`-d `}),(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'{`})]}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`  "messaging_product":"whatsapp",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`  "calling":{`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    "status":"ENABLED",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    "call_icon_visibility":"DEFAULT",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    "callback_permission_status":"ENABLED",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    "srtp_key_exchange_protocol":"SDES",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    "sip":{`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`      "status":"ENABLED",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`      "servers":[`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        {`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`          "hostname":"wacall.epicode.in",`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`          "port":5061`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        }`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`      ]`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    }`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`  }`})}),`
`,(0,n.jsx)(r.span,{className:`line`,children:(0,n.jsx)(r.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`}'`})})]})})}),`
`,(0,n.jsx)(r.h3,{id:`reconfiguration`,children:`Reconfiguration`}),`
`,(0,n.jsx)(r.p,{children:`To route incoming calls to a different Botstream/FreeSWITCH server:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Update the `,(0,n.jsx)(r.code,{inline:`true`,children:`hostname`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Update the `,(0,n.jsx)(r.code,{inline:`true`,children:`port`}),` if required.`]}),`
`,(0,n.jsx)(r.li,{children:`Re-run the API request.`}),`
`]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsx)(r.h2,{id:`business-initiated-calls`,children:`Business-Initiated Calls`}),`
`,(0,n.jsx)(r.p,{children:`Business-initiated calls are calls placed by your business to a WhatsApp user.`}),`
`,(0,n.jsx)(r.h3,{id:`requirements`,children:`Requirements`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Ensure that the user has granted calling permission to the business.`}),`
`,(0,n.jsx)(r.li,{children:`The account owner must retrieve the Meta-generated SIP password.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`To enable Outbound WhatsApp Calls via IraVoice, Epicode team will configure the SIP password on the SIP server to respond to Meta's digest authentication challenges.`}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsxs)(r.note,{children:[(0,n.jsx)(r.h2,{id:`references`,children:`References`}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`WhatsApp Cloud Calling API`}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/`,children:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/`})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Calling Settings`}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/call-settings`,children:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/call-settings`})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`SIP Configuration`}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/sip`,children:`https://developers.facebook.com/docs/whatsapp/cloud-api/calling/sip`})})]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};
//# sourceMappingURL=whatsapp-calling-4YYM_ROh.js.map