import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from './meta'

export const navbar: NavbarConfig = [
  {
    text: '宇宙世紀',
    link: '/uc/uc0068',
  },
  {
    text: '未來世紀',
    link: '/fc/',
  },
  {
    text: '後殖民紀元',
    link: '/ac/',
  },
  {
    text: '戰後紀元',
    link: '/aw/',
  },
  {
    text: '正曆',
    link: '/cc/',
  },
  {
    text: '宇宙紀元',
    link: '/ce/',
  },
  {
    text: '西曆紀元',
    link: '/ad/',
  },
  {
    text: '新進紀元',
    link: '/ag/',
  },
  {
    text: '復興世紀',
    link: '/rc/',
  },
  {
    text: 'Post Disaster',
    link: '/pd/',
  },
  {
    text: '非主流番外篇',
    link: '/fzl/',
    children: [
      {
        text: 'SD高達三國傳',
        link: '',
      },
      {
        text: '機動戰士鋼彈桑',
        link: '',
      },
      {
        text: '高達創戰者',
        link: '',
      },
    ]
  },
]