import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/epicode-docs",
  "metadata": {
    "title": "Epicode Docs",
    "description": "Dumentation for the Epicode Product Suite.",
    "logo": "https://epicode.in/epicode/wp-content/uploads/2025/09/Epicode-SiteIcon.svg",
    "favicon": "https://epicode.in/epicode/wp-content/uploads/2025/09/Epicode-SiteIcon.svg",
    "applicationName": "Epicode Docs",
    "keywords": ["example", "website", "metadata", "SEO"],
  },
  search: {
    type: "pagefind",
    // Optional: Maximum number of sub results per page
    maxSubResults: 3,
    // Optional: Configure search result ranking (defaults shown below)
    ranking: {
      termFrequency: 0.8,
      pageLength: 0.6,
      termSimilarity: 1.2,
      termSaturation: 1.2,
    },
  },
  "theme": {
      "light": {
        "background": "#fdfdfd",
        "foreground": "#000000",
        "card": "#fdfdfd",
        "cardForeground": "#000000",
        "popover": "#ecfeff",
        "popoverForeground": "#000000",
        "primary": "#9810fa",
        "primaryForeground": "#ffffff",
        "secondary": "#7c86ff",
        "secondaryForeground": "#080808",
        "muted": "#f5f5f5",
        "mutedForeground": "#525252",
        "accent": "#dab2ff",
        "accentForeground": "#2f0d68",
        "destructive": "#f54a88",
        "destructiveForeground": "#ffffff",
        "border": "#f4f4f5",
        "input": "#ebebeb",
        "ring": "#8200db"
      },
    "dark": {
      "background": "#000000",
      "foreground": "#f0f0f0",
      "card": "#053345",
      "cardForeground": "#f0f0f0",
      "popover": "#1a1b1b",
      "popoverForeground": "#f0f0f0",
      "primary": "#00d3f3",
      "primaryForeground": "#621de2",
      "secondary": "#8200db",
      "secondaryForeground": "#f0f0f0",
      "muted": "#053345",
      "mutedForeground": "#969696",
      "accent": "#1098ad",
      "accentForeground": "#fefefe",
      "destructive": "#c6005c",
      "destructiveForeground": "#ffffff",
      "border": "#104e64",
      "input": "#f3e8ff",
      "ring": "#53eafd"
    }
  },
  site: {
    title: "Epicode Docs",
    logo: {
      src: { light: "/epicode-logo-web.png", dark: "/epicode-logo-white.webp" },
      alt: "Epicode Logo",
      width: "130px",
    },
    footer: {
      // Footer configuration goes here
      position: "center",
      copyright: `© ${new Date().getFullYear()} Epicode Pvt Ltd. All rights reserved.`,
      columns: [
        {
          title: "Products",
          position: "center", // position in grid, optional: start, center, end
          links: [
            { label: "IraVoice", href: "https://www.epicode.in/iravoice" },
            { label: "BotCompose", href: "https://www.epicode.in/botcompose" },
            { label: "IraCPA", href: "https://www.epicode.in/iracpa" },
            { label: "IraTap", href: "https://www.epicode.in/iratap" }, // Auto-detected as external
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "https://www.epicode.in/about" },
            { label: "Contact", href: "https://www.epicode.in/contact" },
          ],
        },
      ],
      social: [
        {
          icon: "linkedin",
          href: "https://www.linkedin.com/company/epicode-in/",
          label: "LinkedIn",
        },
        {
          icon: "youtube",
          href: "https://www.youtube.com/@epicode-insights",
          label: "Youtube", // optional label text
        },
      ],
      logo: {
        src: {
          light: "/epicode-docs/epicode-logo-web.png",
          dark: "/epicode-docs/epicode-logo-white.webp"
        },
        alt: "Company Logo",
        width: "120px" // optional width
      },
    },
  },
  slots: {
      "footer-before": () => (
        <div>
          <h3> Reach out to us</h3><br></br>
          <p>+91 8203542261 </p>
          <p>support@epicode.in</p>
        </div>
      ),
      "footer-after": () => (
        <div>
          <p>Corporate Office/R&D Centre
8-94-E2, Hotel Bhavani Building, Eshwar Nagar, NH169A, Manipal - 576104
<br/><br/>
Sales
#37(S), Unnati, 2nd A Main Road, 2nd Phase, Chandra Layout, Bangalore - 560040</p>
        </div>
      )
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          collapsible: false,
          items: [
            {
              "type": "doc",
              "label": "Introduction",
              "file": "/sandbox/introduction",
              "icon": "circle-play",
            },
            {
              "type": "doc",
              "label": "IraVoice Sandbox",
              "file": "/sandbox/iravoice",
              "icon": "box",
            },
            // "/sandbox/botcompose",
            {
              "type": "doc",
              "label": "Customer Info",
              "file":  "/sandbox/customerinfo",
              "icon": "user",
            },
            {
              "type": "doc",
              "label": "Compliance & Regulations",
              "file":  "/sandbox/compliance",
              "icon": "shield-check",
            },
          ],
        },
        {
          type: "category",
          label: "IraVoice - Telephony Stack",
          icon: "phone",
          collapsible: false,
          items: [
            {
              "type": "link",
              "label": "IraVoice API",
              "to": "/api",
              "icon": "cog",
            },
            {
              "type": "doc",
              "label": "Dialing Overview",
              "file": "/iravoice/overview",
              "icon": "eye",
            },
            {
              "type": "doc",
              "label": "Websocket Message Model",
              "file": "/iravoice/websocket-message-model",
              "icon": "code",
            }, 
            {
              "type": "doc",
              "label": "Webhook Event Payload",
              "file": "/iravoice/webhook-event",
              "icon": "webhook",
            },
            {
              "type": "doc",
              "label": "Bridge Call to Agent",
              "file": "iravoice/bridge-call-to-agent",
              "icon": "headset",
            },
            {
              "type": "doc",
              "label": "Latency Monitoring",
              "file": "/iravoice/call-latency",
              "icon": "square-activity",
            },
            {
              "type": "doc",
              "label": "Benchmarks",
              "file": "/iravoice/benchmarks",
              "icon": "gauge",
            },
            {
              "type": "doc",
              "label": "Call Dispositions",
              "file": "/iravoice/call-dispositions",
              "icon": "message-circle-warning",
            },
            {
              "type": "doc",
              "label": "Campaign Manager",
              "file": "/iravoice/campaign-manager",
              "icon": "monitor-cog",
            },
            {
              "type": "doc",
              "label": "Web Monitor",
              "file": "/iravoice/web-monitor",
              "icon": "monitor",
            },
            {
              type: "category",
              label: "Voice AI Integrations",
              icon: "blocks",
              collapsible: true,
              items: [
                {
                  "type": "doc",
                  "label": "Livekit",
                  "file":  "/iravoice/livekit-integration",
                  "icon": "puzzle",
                },
                {
                  "type": "doc",
                  "label": "Vapi",
                  "file":  "/iravoice/vapi-integration",
                  "icon": "puzzle",
                },
              ],
            },
            {
              type: "category",
              label: "Voice Channels",
              icon: "antenna",
              collapsible: true,
              items: [
                {
                  "type": "doc",
                  "label": "WhatsApp Calling",
                  "file":  "/iravoice/whatsapp-calling",
                  "icon": "message-circle-dashed",
                },
              ],
            },
          ],
        },
        
        // {
        //   type: "category",
        //   label: "BotCompose - Orchestration",
        //   icon: "box",
        //   collapsible: false,
        //   items: [
        //     {
        //       "type": "link",
        //       "label": "BotCompose API",
        //       "to": "/botcomposeapi",
        //       "icon": "cog"
        //     },
        //     "/botcompose/create-voicebot",
        //     "/botcompose/botcomposescript",
        //     "/botcompose/botlatency",
        //   ],
        // },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "IraVoice API Reference",
    },
    // {
    //   type: "link",
    //   to: "/botcomposeapi",
    //   label: "BotCompose API Reference",
    // },
  ],
  redirects: [{ from: "/", to: "/sandbox/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/iravoice.json",
      path: "/api",
      options: {
        expandAllTags: false,
      }
    },
    // {
    //   type: "file",
    //   input: "./apis/botcompose.json",
    //   path: "/botcomposeapi",
    //   options: {
    //     expandAllTags: false,
    //   }
    // },
  ],
  docs: {
    files: "pages/**/*.{md,mdx}", // Your markdown files
    publishMarkdown: true, // Generate .md files
    llms: {
      llmsTxt: true, // Generate llms.txt
      llmsTxtFull: true, // Generate llms-full.txt
      includeProtected: false, // Exclude protected routes
    },
  },
};


export default config;

