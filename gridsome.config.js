// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ian Cleary\'s Portfolio',
  siteDescription: 'My personal website powered by Gridsome powered by Tailwind CSS v1.0',
  siteUrl: 'https://iancleary.me',
  icon: 'src/assets/favicon.png',
  plugins: [
    { use: 'gridsome-plugin-typescript' },
    { use: 'gridsome-plugin-tailwindcss'},
  ],
}