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
  plugins: ["~/plugins/contentful", "~/plugins/posts","~/plugins/persons"],

  // Build Modules before loading app
  buildModules: [
    "@nuxtjs/tailwindcss",
  ],
  // modules to load
  modules: [
    "@nuxtjs/markdownit",
  ],
  markdownit: {
    injected: true,
    use: [
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
