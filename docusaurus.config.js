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
  deploymentBranch: 'gh-pages',
  future: {
    v4: true,
    faster: true,
  },
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
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      },
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,

        language: 'en',
      },
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

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
      announcementBar: process.env.DEPLOY_ENV === 'dev' ? {
        id: 'dev-build-warning',
        content: 'This is a pre-release version of our wiki, can contain errors',
        backgroundColor: '#fa7d10',
        textColor: '#000',
        isCloseable: false,
      } : undefined,
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
