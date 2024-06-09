import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from './meta'

export const navbar: NavbarConfig = [
  {
    text: '宇宙世紀',
    children: [
      {
        text: 'UC0068',
        children: [
          {
            text: '機動戰士鋼彈-起源',
            link: '/uc/uc0068/uc0068-origin'
          }
        ]
      },
      {
        text: 'UC0079',
        children: [
          {
            text: '機動戰士鋼彈',
            link: '/uc/uc0079/uc0079-tv'
          },
          {
            text: '機動戰士鋼彈 - MS IGLOO 系列三部曲',
            link: '/uc/uc0079/uc0079-ms-igloo'
          },
          {
            text: '機動戰士鋼彈 - 雷霆宙域',
            link: '/uc/uc0079/uc0079-thunderbolt',
          },
          {
            text: '第08MS小隊',
            link: '/uc/uc0079/uc0079-08ms',
          },
        ]
      },
      {
        text: 'UC0080',
        children: [
          {
            text: '口袋裡的戰爭',
            link: '/uc/uc0080/uc0080-pocket'
          },
        ]
      },
      {
        text: 'UC0083',
        children: [
          {
            text: '星塵的回憶',
            link: '/uc/uc0083/uc0083-stardustMemory'
          },
        ]
      },
    ]
  },
  // {
  //   text: '未來世紀',
  //   children: [
  //     {
  //       text: 'FC0060',
  //       children: [
  //         {
  //           text: '機動武鬥傳G鋼彈',
  //           link: '/fc/fc0060/fc0060-fighter-g'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: '後殖民紀元',
  //   children: [
  //     {
  //       text: 'AC0195',
  //       children: [
  //         {
  //           text: '新機動戰記鋼彈W',
  //           link: '/ac/ac0195/ac0195-report-w'
  //         },
  //         {
  //           text: '新機動戰記鋼彈W - 無盡的華爾茲',
  //           link: '/ac/ac0195/ac0196-waltz'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: '戰後紀元',
  //   children: [
  //     {
  //       text: 'AW0015',
  //       children: [
  //         {
  //           text: '機動新世紀鋼彈X',
  //           link: '/aw/aw0015/aw0015-x'
  //         },
  //       ]
  //     },
  //     {
  //       text: 'AW0024',
  //       children: [
  //         {
  //           text: '機動新世紀鋼彈 X UNDER THE MOONLIGHT',
  //           link: '/aw/aw0024/aw0024-moonlight'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: '正曆',
  //   children: [
  //     {
  //       text: 'CC2345',
  //       children: [
  //         {
  //           text: '逆A鋼彈',
  //           link: '/cc/cc2345/cc2345-∀'
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   text: '宇宙紀元',
  //   children: [
  //     {
  //       text: 'CE0071',
  //       children: [
  //         {
  //           text: '機動戰士鋼彈SEED',
  //           link: '/ce/ce0071/ce0071-seed'
  //         },
  //       ]
  //     },
  //     {
  //       text: 'CE0073',
  //       children: [
  //         {
  //           text: '機動戰士鋼彈SEED DESTINY',
  //           link: '/ce/ce0073/ce0073-seed-destiny'
  //         },
  //         {
  //           text: '機動戰士鋼彈SEED C.E.73 STARGAZER',
  //           link: '/ce/ce0073/ce0073-seed-stargazer'
  //         },
  //       ]
  //     },
  //     {
  //       text: 'CE0075',
  //       children: [
  //         {
  //           text: '機動戰士鋼彈SEED FREEDOM',
  //           link: '/ce/ce0075/ce0075-seed-freedom'
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   text: '西曆紀元',
  //   children: [
  //     {
  //       text: 'AD2307',
  //       children: [
  //         {
  //           text: '機動戰士鋼彈00',
  //           link: '/ad/ad2307/ad2307-00'
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   text: '新進紀元',
  //   children: [
  //     {
  //       text: 'AG101',
  //       children: [
  //         {
  //           text: '機動戰士鋼彈AGE',
  //           link: '/ag/ag101/ad101-age'
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   text: '復興世紀',
  //   children: [
  //     {
  //       text: 'RC1014',
  //       children: [
  //         {
  //           text: '鋼彈G之復國運動',
  //           link: '/rc/rc1014/rc1014-g'
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   text: '災難戰後',
  //   children: [
  //     {
  //       text: 'PD323',
  //       children: [
  //         {
  //           text: '機動戰士鋼彈 鐵血孤兒',
  //           link: '/pd/pd323/pd323-iron-blooded'
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   text: '星元',
  //   children: [
  //     {
  //       text: 'AS122',
  //       children: [
  //         {
  //           text: '水星的魔女',
  //           link: '/as/as122/as122-witch'
  //         },
  //       ]
  //     },
  //   ]
  // },
  {
    text: '非主流番外篇',
    link: '/non-mainstream/',
    children: [
      // {
      //   text: 'SD鋼彈',
      //   link: '',
      // },
      // {
      //   text: '機動戰士 - 鋼彈桑',
      //   link: '',
      // },
      {
        text: '鋼彈創戰者',
        link: '/non-mainstream/buildFighters',
      },
      {
        text: '水星的魔女',
        link: '/non-mainstream/witch',
      },
    ]
  },
  {
    text: '出場機體總覽',
    children: [
      {
        text: '宇宙世紀',
        children: [
          {
            text: 'UC0068',
            link: '/mechanical/uc/uc0068/uc0068-origin'
          },
          {
            text: 'UC0079',
            link: '/mechanical/uc/uc0079/uc0079-tv'
          },
          {
            text: 'UC0080',
            link: '/mechanical/uc/uc0080/uc0080-pocket'
          },
          {
            text: 'UC0083',
            link: '/mechanical/uc/uc0083/uc0083-stardustMemory'
          },
        ]
      },
    ]
  },
  {
    text: '模型',
    children: [
      {
        text: 'RG - GUNDAM - 1/144',
        children: [
          {
            text: 'RG-01 ~ RG-09',
            link: '/assemblyModel/RG/rg-0'
          },
          {
            text: 'RG-10 ~ RG-19',
            link: '/assemblyModel/RG/rg-1'
          },
          {
            text: 'RG-20 ~ RG-29',
            link: '/assemblyModel/RG/rg-2'
          },
          {
            text: 'RG-30 ~ RG-39',
            link: '/assemblyModel/RG/rg-3'
          },
          {
            text: 'RG-40 ~ RG-49',
            link: '/assemblyModel/RG/rg-4'
          },
        ]
      },
      // {
      //   text: 'SD - GUNDAM',
      //   link: '/assemblyModel/sd'
      // }
    ]
  }
]