import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/uc/': [
    {
      text: 'UC0068',
      collapsible: true,
      children: [
        '/uc/uc0068/uc0068-origin',
      ],
    },
    {
      text: 'UC0079',
      collapsible: true,
      children: [
        '/uc/uc0079/uc0079-tv',
        '/uc/uc0079/uc0079-ms-igloo',
        '/uc/uc0079/uc0079-thunderbolt',
        '/uc/uc0079/uc0079-08ms',
      ],
    },
    {
      text: 'UC0080',
      collapsible: true,
      children: [
        '/uc/uc0080/uc0080-pocket',
      ],
    },
    {
      text: 'UC0083',
      collapsible: true,
      children: [
        '/uc/uc0083/uc0083-stardustMemory',
      ],
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
      text: '非主流番外篇',
      collapsible: true,
      children: [
        '/non-mainstream/buildFighters',
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
        '/mechanical/uc/uc0068/uc0068-origin',
      ],
    },
    {
      text: 'UC0079 - 機體介紹',
      collapsible: true,
      children: [
        '/mechanical/uc/uc0079/uc0079-tv',
        '/mechanical/uc/uc0079/uc0079-ms-igloo',
        '/mechanical/uc/uc0079/uc0079-thunderbolt',
        '/mechanical/uc/uc0079/uc0079-08ms',
      ],
    },
    {
      text: 'UC0080 - 機體介紹',
      collapsible: true,
      children: [
        '/mechanical/uc/uc0080/uc0080-pocket',
      ],
    },
    {
      text: 'UC0083 - 機體介紹',
      collapsible: true,
      children: [
        '/mechanical/uc/uc0083/uc0083-tv',
      ],
    },
  ],
  '/assemblyModel/sd': [
    {
      text: 'SD - GUNDAM',
      collapsible: true,
      children: [
        '/assemblyModel/sd'
      ]
    },
  ],
  '/assemblyModel/RG': [
    {
      text: 'RG - GUNDAM - 1/144',
      collapsible: true,
      children: [
        '/assemblyModel/RG/rg-0',
        '/assemblyModel/RG/rg-1',
        '/assemblyModel/RG/rg-2',
        '/assemblyModel/RG/rg-3',
        '/assemblyModel/RG/rg-4',
      ]
    },
  ]
}