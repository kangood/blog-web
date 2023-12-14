/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Kangod's Blog",
  author: 'Kangod Yan',
  headerTitle: "Kangod's Blog",
  description: '探索未知ing',
  language: 'zh-cn',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://kangod.top',
  siteRepo: 'https://github.com/KangodYan',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png', // PostBanner模式下的默认概览图
  email: 'kangod.yan@gmail.com',
  github: 'https://github.com/KangodYan',
  twitter: 'https://twitter.com/KangodYan',
  locale: 'zh-CN',
  socialLinks: {
    github: 'https://www.github.com/KangodYan',
    twitter: 'https://twitter.com/KangodYan',
    mail: 'mailto:kangod.yan@gmail.com',
  },
  analytics: {
    // 如果你想使用分析 provider，必须将其添加到 next.config.js 文件中的内容安全策略中
    // 支持 Plausible、Simple Analytics、Umami、Posthog 或 Google Analytics
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // 例子：123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // 例子：tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // 例子：123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // 例子：G-XXXXXXX
    // },
  },
  newsletter: {
    // 支持 mailchimp、buttondown、convertkit、klaviyo、revue、emailoctopus
    // 请添加你的 .env 文件并根据你的选择进行修改
    provider: 'mailchimp',
  },
  comments: {
    // 选择一个 provider，并使用与其关联的环境变量
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // 支持的 providers: giscus, utterances, disqus
    giscusConfig: {
      // 访问下面的链接，并按照 configuration 部分的步骤操作
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // 支持的选项: pathname, url, title
      reactions: '1', // 表情 reactions: 1 = enable / 0 = disable
      // 定期向父窗口发送讨论元数据: 1 = enable / 0 = disable
      metadata: '0',
      // 主题示例：light, dark, dark_dimmed, dark_high_contrast, transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // 使用暗黑主题
      darkTheme: 'transparent_dark',
      // 如果上面的主题选项设置为 custom，请在下面提供指向你的自定义主题css文件的链接
      // 参考：https://giscus.app/themes/custom_example.css
      themeURL: '',
      // 这对应于 giscus 配置中的 data-lang="en"
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // 用于加载需要搜索的文档路径
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // Algolia 提供的应用程序 ID
    //   appId: 'R2IYF7ETH7',
    //   // 公共API密钥：可以安全地提交它
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
