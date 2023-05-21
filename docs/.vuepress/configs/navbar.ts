import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from './meta'

export const navbar: NavbarConfig = [
  {
    text: '出場機體總覽',
    children: [
      {
        text: '宇宙世紀',
        link: '/mechanical/uc/uc0068'
      },
    ]
  },
  {
    text: '宇宙世紀',
    link: '/uc/',
    children: [
      {
        text: 'UC0068 - 機動戰士鋼彈-起源',
        link: '/uc/uc0068',
      },
      {
        text: 'UC0079 - 機動戰士鋼彈',
        link: '/uc/uc0079-tv',
      },
      {
        text: 'UC0079 - 機動戰士鋼彈 - MS IGLOO 系列三部曲',
        link: '/uc/uc0079-ms-igloo',
      },
      {
        text: 'UC0079 - 第08MS小隊',
        link: '/uc/uc0079-08ms',
      }
    ]
  },
  // {
  //   text: '未來世紀',
  //   link: '/fc/',
  //   children: [
  //     {
  //       text: '機動武鬥傳G鋼彈',
  //       link: '/fc/fc0060',
  //     }
  //   ]
  // },
  // {
  //   text: '後殖民紀元',
  //   link: '/ac/',
  // },
  // {
  //   text: '戰後紀元',
  //   link: '/aw/',
  // },
  // {
  //   text: '正曆',
  //   link: '/cc/',
  // },
  // {
  //   text: '宇宙紀元',
  //   link: '/ce/',
  // },
  // {
  //   text: '西曆紀元',
  //   link: '/ad/',
  // },
  // {
  //   text: '新進紀元',
  //   link: '/ag/',
  // },
  // {
  //   text: '復興世紀',
  //   link: '/rc/',
  // },
  // {
  //   text: '災難戰後',
  //   link: '/pd/',
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
      // {
      //   text: '高達創戰者',
      //   link: '',
      // },
      {
        text: '水星的魔女',
        link: '/non-mainstream/witch',
      },
    ]
  },
]