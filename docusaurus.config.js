// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Daikon',
  tagline: 'Data Acquisition, Integration, and Knowledge capture applicatiON for target-based drug discovery',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/daikon/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'saclab', // Usually your GitHub org/user name.
  projectName: 'daikon', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DAIKON',
        logo: {
          alt: 'Daikon Logo',
          src: 'img/logo-200.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog', label: 'Community', position: 'left'},
          {
            href: 'https://github.com/saclab/daikon-core-server',
            label: 'GH Core-Server',
            position: 'right',
          },
          {
            href: 'https://github.com/saclab/daikon-core-webapp',
            label: 'GH Core-WebApp',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Deployment Manual',
                to: '/docs/category/deployment-manual',
              },
              {
                label: 'Developers Guide',
                to: '/docs/category/developers-guide',
              },
              {
                label: 'Admin Guide',
                to: '/docs/category/admin-guide',
              },
              {
                label: 'User Guide',
                to: '/docs/category/admin-guide',
              },
              {
                label: 'API reference',
                to: '/docs/category/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Sacchettini Laboratory',
                href: 'https://saclab.biobio.tamu.edu/saclab/',
              },
              {
                label: 'TB Drug Accelerator',
                href: 'https://www.tbdrugaccelerator.org/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} DAIKON | Documentation with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
