import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/uc/': [
    {
      text: 'UC0068 - 機動戰士-起源',
      collapsible: true,
      children: [
        '/uc/uc0068',
      ],
    },
    {
      text: 'UC0079 - 機動戰士',
      collapsible: true,
      children: [
        '/uc/uc0079-tv',
        '/uc/uc0079-ms-igloo',
        '/uc/uc0079-08ms',
      ],
    },
    {
      text: 'UC0080 - 口袋裡的戰爭',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0083 - 星塵回憶錄',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0083 - 吉翁的殘光',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0087 - Z 鋼彈',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0088 - ZZ 鋼彈',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0093 - 逆襲的夏亞',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0096 - UC 獨角獸',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0105 - 閃光的哈薩威',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0123 - F91',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
    {
      text: 'UC0153 - V 鋼彈',
      // collapsible: true,
      // children: [
      //   '/uc/uc0079-ms.md',
      // ],
    },
  ],
  '/fc/': [
    {
      text: '未來世紀',
      children: [
        '/fc/fc0060.md',
      ],
    },
  ],
  '/ac/': [
    {
      text: '後殖民紀元',
      children: [
        '/ac/ac0195.md',
        '/ac/ac0196.md',
      ],
    },
  ],
  '/aw/': [
    {
      text: '戰後紀元',
      children: [
        '/aw/aw0015.md',
      ],
    },
  ],
  '/cc/': [
    {
      text: '正曆',
      children: [
        '/cc/cc2345.md',
      ],
    },
  ],
  '/ce/': [
    {
      text: '宇宙紀元',
      children: [
        '/ce/ce0070.md',
        '/ce/ce0071.md',
        '/ce/ce0073.md',
      ],
    },
  ],
  '/ad/': [
    {
      text: '西曆紀元',
      children: [
        '/ad/ad2307.md',
        '/ad/ad2314.md',
      ],
    },
  ],
  '/ag/': [
    {
      text: '新進世代',
      children: [
        '/ag/ag0115.md',
      ],
    },
  ],
  '/rc/': [
    {
      text: '復興世紀',
      children: [
        '/rc/rc1014.md',
      ],
    },
  ],
  '/pd/': [
    {
      text: '災難戰後',
      children: [
        '/pd/pd0323.md',
      ],
    },
  ],
  '/non-mainstream/': [
    {
      text: '水星的魔女',
      collapsible: true,
      children: [
        '/non-mainstream/witch',
      ],
    },
    // {
    //   text: '非主流番外篇',
    //   children: [
    //     '/non-mainstream/sd鋼彈三國傳.md',
    //     '/non-mainstream/機動戰士鋼彈桑.md',
    //     '/non-mainstream/高達創戰者.md',
    //     '/non-mainstream/witch'
    //   ],
    // },
  ],
  '/mechanical/uc/': [
    {
      text: 'UC0068 - 機體介紹',
      collapsible: true,
      children: [
        '/mechanical/uc/uc0068',
      ],
    },
    {
      text: 'UC0079 - 機體介紹',
      collapsible: true,
      children: [
        '/mechanical/uc/uc0079-tv',
        '/mechanical/uc/uc0079-08ms',
      ],
    }
  ]
  // '/advanced/': [
  //   {
  //     text: '深入',
  //     children: [
  //       '/advanced/architecture.md',
  //       '/advanced/plugin.md',
  //       '/advanced/theme.md',
  //     ],
  //   },
  //   {
  //     text: 'Cookbook',
  //     children: [
  //       '/advanced/cookbook/README.md',
  //       '/advanced/cookbook/usage-of-client-config.md',
  //       '/advanced/cookbook/adding-extra-pages.md',
  //       '/advanced/cookbook/making-a-theme-extendable.md',
  //       '/advanced/cookbook/passing-data-to-client-code.md',
  //       '/advanced/cookbook/markdown-and-vue-sfc.md',
  //     ],
  //   },
  // ],
  // '/reference/': [
  //   {
  //     text: 'VuePress 參考',
  //     collapsible: true,
  //     children: [
  //       '/reference/cli.md',
  // //       '/reference/config.md',
  // //       '/reference/frontmatter.md',
  // //       '/reference/components.md',
  // //       '/reference/plugin-api.md',
  // //       '/reference/theme-api.md',
  // //       '/reference/client-api.md',
  // //       '/reference/node-api.md',
  //     ],
  //   },
  //   {
  //     text: '打包工具参考',
  //     collapsible: true,
  //     children: [
  //       '/reference/bundler/vite.md',
  //       '/reference/bundler/webpack.md',
  //     ],
  //   },
  //   {
  //     text: '默认主题参考',
  //     collapsible: true,
  //     children: [
  //       '/reference/default-theme/config.md',
  //       '/reference/default-theme/frontmatter.md',
  //       '/reference/default-theme/components.md',
  //       '/reference/default-theme/markdown.md',
  //       '/reference/default-theme/styles.md',
  //       '/reference/default-theme/extending.md',
  //     ],
  //   },
  //   {
  //     text: '官方插件参考',
  //     collapsible: true,
  //     children: [
  //       {
  //         text: '常用功能',
  //         children: [
  //           '/reference/plugin/back-to-top.md',
  //           '/reference/plugin/container.md',
  //           '/reference/plugin/external-link-icon.md',
  //           '/reference/plugin/google-analytics.md',
  //           '/reference/plugin/medium-zoom.md',
  //           '/reference/plugin/nprogress.md',
  //           '/reference/plugin/register-components.md',
  //         ],
  //       },
  //       {
  //         text: '内容搜索',
  //         children: [
  //           '/reference/plugin/docsearch.md',
  //           '/reference/plugin/search.md',
  //         ],
  //       },
  //       {
  //         text: 'PWA',
  //         children: [
  //           '/reference/plugin/pwa.md',
  //           '/reference/plugin/pwa-popup.md',
  //         ],
  //       },
  //       {
  //         text: '语法高亮',
  //         children: [
  //           '/reference/plugin/prismjs.md',
  //           '/reference/plugin/shiki.md',
  //         ],
  //       },
  //       {
  //         text: '主题开发',
  //         children: [
  //           '/reference/plugin/active-header-links.md',
  //           '/reference/plugin/git.md',
  //           '/reference/plugin/palette.md',
  //           '/reference/plugin/theme-data.md',
  //           '/reference/plugin/toc.md',
  //         ],
  //       },
  //     ],
  //   },
  // ],
}