// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Ian Cleary\'s Portfolio',
  siteDescription: 'My personal website powered by Gridsome powered by Tailwind CSS v1.0',
  siteUrl: 'https://iancleary.me',
  // templates: {
  //   Post: '/blog/:title',
  //   Tag: '/tag/:id'
  // },
  plugins: [
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'blog/**/*.md',
    //     typeName: 'Post',
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         route: 'tag/:id',
    //         create: true
    //       }
    //     },
    //     remark: {
    //       plugins: [
    //         [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
    //       ]
    //     }
    //   }
    // },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Ian Cleary\'s Personal Portfolio and Blog',
          feed_url: 'https://iancleary.me/rss.xml',
          site_url: 'https://iancleary.me/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://iancleary.me' + node.path,
          author: 'Ian Cleary',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
