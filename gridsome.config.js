// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "🌎🚀🛰️",
  siteDescription: 'My personal website powered by Gridsome',
  titleTemplate: '%s - Ian Cleary',
  siteUrl: 'https://iancleary.me',
  icon: 'src/assets/favicon.png',
  plugins: [
    { use: 'gridsome-plugin-typescript' },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        shouldPurge: false,
      },
    },
  ],
};
