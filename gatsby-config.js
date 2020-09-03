require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `CSUOS@dev_blog`,
    siteTitleAlt: `CSUOS@dev_blog`,
    siteHeadline: `CSUOS: Compuster Science, University of Seoul`,
    siteUrl: `https://csuos.github.io`,
    siteDescription: `Tech blog managed by Team.CSUOS`,
    siteLanguage: `ko`,
    siteImage: `/banner.jpg`,
    author: `@CSUOS`,
  },
  plugins: [
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: '42_the_answer_to_everything', // delete or `undefined` to disable password protection
        pagePaths: ['/secret'],
        partialMatching: true
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `목차`,
            slug: `/blog`,
          },
          {
            title: `공고`,
            slug: `/career`,
          },
          {
            title: `소개`,
            slug: `/about`,
          },
          {
            title: `그라운드룰`,
            slug: `/groundrules`,
          }
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/CSUOS`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CSUOS 개발자 블로그`,
        short_name: `CSUOS@dev_blog`,
        description: `CSUOS 개발자 블로그는 서울시립대 컴퓨터과학부 소모임 CSUOS에서 운영중인 개발 블로그 입니다.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
