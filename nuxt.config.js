import dotenv from "dotenv";
dotenv.config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
});

export default {
  /*
   ** Headers of the page
   */
  target: 'static',
  server: {
    port: 8080,
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/contentful", "~/plugins/posts",  "~/plugins/tags", "~/plugins/persons"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // modules to load
  modules: [
    "@nuxtjs/feed",
    "@nuxtjs/markdownit",
  ],

  // Build Modules before loading app
  buildModules: [
    "@nuxtjs/tailwindcss",
  ],

  // nuxtjs/feed uses config directly from https://github.com/jpmonette/feed
  feed: [
    {
      path: '/feed.xml',
      async create(feed) {

        const persons = await client.getEntries({
          content_type: "person",
        });

        var getImageUrlFromAsset = function(asset) {
          // https://www.contentful.com/developers/docs/concepts/images/
          var imageURL = 'https:' + asset.fields.file.url;
          return imageURL;
        };

        // Function to inspect keys of Contentful objects
        // var getKeys = function(obj) {
        //   var keys = [];
        //   for(var key in obj){
        //      keys.push(key);
        //   }
        //   return keys;
        // };

        feed.options = {
          title: "Ian Cleary's Blog",
          link: 'https://icancclearynow.com/feed.xml',
          description: persons.items[0].fields.name + "'s blog containing useful notes and procedures, with a focus on Windows, Ubuntu Server and Desktop, Docker, Javascript, and related technologies!",
          // description: "Persons: " + getKeys(persons.items[0].fields.image),
          image: getImageUrlFromAsset(persons.items[0].fields.image),
          favicon: "http://icancclearynow.com/favicon.ico",
          copyright: "All rights reserved 2021-Present, " + persons.items[0].fields.name,
          author: {
            name: persons.items[0].fields.name,
            email: persons.items[0].fields.email,
            link: persons.items[0].fields.github,
          },
        };

        const posts = await client.getEntries({
              content_type: "blogPost",
            });

        // console.log(posts.items); // Debug log to terminal

        posts.items.forEach((post) => {
          const url = "https://icancclearynow.com/blog/" + post.fields.slug;
          feed.addItem({
            title: post.fields.title,
            image: getImageUrlFromAsset(post.fields.heroImage),
            id: url,
            link: url,
            // description: post.fields.description + " " + getKeys(post.fields.heroImage.fields.file) + post.fields.heroImage.fields.file.url + " " + + post.fields.heroImage.fields.file.details,
            description: post.fields.heroImage.fields.file.url,
            // description: post.fields.description,
            published: new Date(post.fields.publishDate),
            author: [
              {
                name: post.fields.author.fields.name,
                email: post.fields.author.fields.email,
              },
            ],
          });
        });

      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    },
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs',
      'markdown-it-highlightjs',
    ],
  },
  /*
   ** Global CSS and Highlight.js theme
   */
  css: [
    "~/css/main.css",
    { src: '~/node_modules/highlight.js/styles/night-owl.css', lang: 'css' },
    // I also like darcula

  ],
  // render: {
  //   bundleRenderer: {
  //     shouldPreload: (file, type) => {
  //       return ["script", "style", "font"].includes(type);
  //     },
  //   },
  // },
  /*
   ** Environment variables
   */
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "blogPost",
        }),
      ]).then(([blogEntries]) => {
        var _routes = [...blogEntries.items.map((entry) => entry.fields.slug)];

        // Prefix routes with "/blog/"
        var _prefixedRoutes = [];
        for (let i = 0; i < _routes.length; i++){
          var _prefixedRoute = ["/blog", _routes[i]].join("/");
          _prefixedRoutes.push(_prefixedRoute);
        }
        return _prefixedRoutes;
        // return _routes;
      });
    },
  },
};
