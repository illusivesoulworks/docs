// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Illusive Soulworks',
  url: 'https://docs.illusivesoulworks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'illusivesoulworks', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'deployment',
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
		  routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/illusivesoulworks/docs/edit/main/',
		  lastVersion: 'current',
		  versions: {
			current: {
			  label: '1.21.x',
			  path: '/',
			},
		  },
        },
        blog: false,
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
        title: 'Illusive Soulworks',
        logo: {
          alt: 'Illusive Soulworks Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            href: 'https://github.com/illusivesoulworks',
            label: 'GitHub',
            position: 'right',
          },
		  {
            label: 'Discord',
            href: 'https://discord.gg/JWgrdwt',
			position: 'right',
          },
		  {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}]
          },
        ],
      },
	  colorMode: {
		  defaultMode: 'dark'
	  },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Illusive Soulworks, Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['java', 'gradle', 'json', 'toml'],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
