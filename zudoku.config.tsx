import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  theme: {
    registryUrl: "https://tweakcn.com/r/themes/cmpb3ai70000d04l50okk9scp",
  },
  site: {
    logo: {
      src: { light: "/epicode-logo-web.png", dark: "/logo-dark.svg" },
      alt: "Zudoku",
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
          light: "/public/epicode-logo-web.png",
          dark: "/public/epicode-logo-web.png"
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
            "/sandbox/IravoiceSandbox",
            "/sandbox/sandboxbotcompose",
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/iravoice.yaml",
      path: "/api",
    },
    {
      type: "file",
      input: "./apis/botcompose.yaml",
      path: "/iracpa",
    },
  ],
};


export default config;
