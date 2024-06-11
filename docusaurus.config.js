// docusaurus.config.js

const config = {
  title: "My Docs Site",
  tagline: "A Docusaurus site for public and private docs",
  url: "https://Fab-AF.github.io",
  baseUrl: "/docusaurus/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Fab-AF", // Your GitHub organization/user name.
  projectName: "docusaurus", // Your GitHub repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs", // Directory where your documentation files are stored
          routeBasePath: "/", // URL base path for the docs
          sidebarPath: require.resolve("./sidebars.js"),
          // The edit URL should point to the edit page of your docs directory on GitHub
          editUrl: "https://github.com/Fab-AF/docusaurus/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      navbar: {
        title: "My Docs Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "public/faqs", // The default doc to open
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/Fab-AF/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Public Documentation",
                to: "/public/faqs",
              },
              {
                label: "Private Documentation",
                to: "/private/api-overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Fab-AF/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fab-AF, Inc.`,
      },
    }),
};

export default config;
