import dotenv from "dotenv";
dotenv.config();

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
  plugins: [],

  // Build Modules before loading app
  buildModules: [
    "@nuxtjs/tailwindcss",
  ],
  // modules to load
  modules: [
  ],
  /*
   ** Global CSS and Highlight.js theme
   */
  css: [
    "~/css/main.css",

  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },
  /*
   ** Environment variables
   */
  env: {
  },
};
