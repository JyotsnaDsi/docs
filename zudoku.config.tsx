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
  theme: {
    "light": {
      "background": "oklch(100% 0 none)",
      "foreground": "oklch(14.5% 0 none)",
      "card": "oklch(100% 0 none)",
      "cardForeground": "oklch(14.5% 0 none)",
      "popover": "oklch(100% 0 none)",
      "popoverForeground": "oklch(14.5% 0 none)",
      "primary": "oklch(57.7% 0.215 27.3)",
      "primaryForeground": "oklch(97.1% 0.013 17.4)",
      "secondary": "oklch(97% 0 none)",
      "secondaryForeground": "oklch(20.4% 0 none)",
      "muted": "oklch(97% 0 none)",
      "mutedForeground": "oklch(55.6% 0 none)",
      "accent": "oklch(97% 0 none)",
      "accentForeground": "oklch(20.4% 0 none)",
      "destructive": "oklch(63.7% 0.208 25.3)",
      "destructiveForeground": "oklch(98.5% 0 none)",
      "border": "oklch(92.2% 0 none)",
      "input": "oklch(92.2% 0 none)",
      "ring": "oklch(57.7% 0.215 27.3)",
      "radius": "0.3rem"
    },
    "dark": {
      "background": "oklch(14.5% 0 none)",
      "foreground": "oklch(98.5% 0 none)",
      "card": "oklch(14.5% 0 none)",
      "cardForeground": "oklch(98.5% 0 none)",
      "popover": "oklch(14.5% 0 none)",
      "popoverForeground": "oklch(98.5% 0 none)",
      "primary": "oklch(57.7% 0.215 27.3)",
      "primaryForeground": "oklch(97.1% 0.013 17.4)",
      "secondary": "oklch(26.9% 0 none)",
      "secondaryForeground": "oklch(98.5% 0 none)",
      "muted": "oklch(26.9% 0 none)",
      "mutedForeground": "oklch(71.5% 0 none)",
      "accent": "oklch(26.9% 0 none)",
      "accentForeground": "oklch(98.5% 0 none)",
      "destructive": "oklch(39.6% 0.133 25.7)",
      "destructiveForeground": "oklch(98.5% 0 none)",
      "border": "oklch(26.9% 0 none)",
      "input": "oklch(26.9% 0 none)",
      "ring": "oklch(57.7% 0.215 27.3)",
      "radius": "0.3rem"
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
            "/sandbox/introduction",
            "/sandbox/iravoice",
            "/sandbox/botcompose",
            "/sandbox/customerinfo",
            "/sandbox/compliance",
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
            "/iravoice/websocket-message-model",
            "/iravoice/webhook-event",
            "/iravoice/campaign-manager",
            "/iravoice/call-latency",
            "/iravoice/web-monitor",
            "/iravoice/livekit-integration"
          ],
        },
        {
          type: "category",
          label: "BotCompose - Orchestration",
          icon: "box",
          collapsible: false,
          items: [
            {
              "type": "link",
              "label": "BotCompose API",
              "to": "/botcomposeapi",
              "icon": "cog"
            },
            "/botcompose/botcomposescript",
            "/botcompose/botlatency",
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "IraVoice API Reference",
    },
    {
      type: "link",
      to: "/botcomposeapi",
      label: "BotCompose API Reference",
    },
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
    {
      type: "file",
      input: "./apis/botcompose.json",
      path: "/botcomposeapi",
      options: {
        expandAllTags: false,
      }
    },
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

