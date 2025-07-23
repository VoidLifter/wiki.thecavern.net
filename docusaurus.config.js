import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cavern Wiki',
  tagline: 'Documentation',
  favicon: 'img/logo.png',
  url: 'https://wiki.thecavern.net',
  baseUrl: '/',
  organizationName: 'The Cavern',
  projectName: 'Cavern Wiki',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',


  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cavern Wiki',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/TheCavern/wiki.thecavern.net',
            position: 'right',
            label: 'Contribute',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'keywords', content: 'the cavern, minecraft, minecraft server, slimefun, pyrofishing, pyromining, mofood, smp, survival, survival multiplayer'},
        { name: 'canonical', content: 'https://wiki.thecavern.net' },
      ],
    }),
};

export default config;
