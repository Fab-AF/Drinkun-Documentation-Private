// docusaurus.config.js

module.exports = {
  title: "My Docs Site",
  tagline: "A Docusaurus site for public and private docs",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "my-org", // Usually your GitHub org/user name.
  projectName: "my-docs-site", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/my-org/my-docs-site/edit/main/",
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
            href: "https://github.com/my-org/my-docs-site",
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
                to: "/docs/public/faqs",
              },
              {
                label: "Private Documentation",
                to: "/docs/private/api-overview",
              },
            ],
          },
          // ...other links
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Docs Site, Inc.`,
      },
    }),
};
