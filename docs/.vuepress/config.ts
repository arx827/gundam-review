import { defaultTheme, defineUserConfig } from 'vuepress';
// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import { path } from '@vuepress/utils'
import { head, navbar, sidebar } from './configs';

export default defineUserConfig({
  base: '/gundam/',
  lang: 'zh-TW',
  title: '鋼彈年代史',
  description: '鋼彈時間軸',
  head,
  theme: defaultTheme({
    logo: '/images/hero.png',
    docsDir: 'docs',
    navbar,
    sidebar,
  }),
  // plugins: [
  //   registerComponentsPlugin({
  //     componentsDir: path.resolve(__dirname, './components'),
  //   }),
  // ]
})