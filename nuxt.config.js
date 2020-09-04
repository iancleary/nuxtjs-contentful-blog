import dotenv from "dotenv";
dotenv.config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
});

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
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
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/css/main.css"],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/contentful", "~/plugins/posts"],
  /*
   ** Environment variables
   */
  buildModules: [
    "@nuxtjs/tailwindcss", '@nuxtjs/fontawesome',
  ],
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
  },
  modules: [
    "@nuxtjs/markdownit",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  markdownit: {
    injected: true,
  },
  fontawesome: {
    component: 'fa',
    icons: {
      brands: ['faGithub', 'faTwitter', 'faDev'],
    },
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "blogPost",
        }),
      ]).then(([blogEntries]) => {
        return [...blogEntries.items.map((entry) => entry.fields.slug)];
      });
    },
  },
};
