# Personal Site

<p align="center">
    <em> Powered by NuxtJS, Vue.js & Tailwind CSS</em><br>
    <em> Deployed with Vercel</em>
</p>

<p align="center">

<a href="https://dependabot.com/" target="_blank">
    <img src="https://flat.badgen.net/dependabot/iancleary/website?icon=dependabot" alt="Dependabot Enabled">
</a>

</p>

I have converted my site to use Contentful and NuxtJS. I'm currently doing a design of experiments with NextJS and Storyblok.

## Tutorials

The following tutorials were especially useful:

* [Integrate Contentful with Nuxt.js](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/) by Contentful
* [Create a Blog with Contentful and Nuxt](https://www.netlify.com/blog/2020/04/20/create-a-blog-with-contentful-and-nuxt/?utm_source=github&utm_medium=contentful-sd&utm_campaign=devex) by Sarah Drasner (@sdras)
* [How I Migrated to JAMStack: Next.JS, Vercel, and Contentful.](https://cole.codes/posts/how-i-migrated-to-jamstack-nextjs-vercel-contentful), by Cole Turner.
* [How to Use Markdown-It with Highlight.js in a Nuxt Project](https://www.samuelcoe.com/blog/18-02-25-nuxt-hightlight/)

## Calendar Versioning

This project adheres to [Calendar Versioning](https://calver.org/), YYYY.MINOR.MICRO.

## Static Code Analysis - Command Line

1. edit the `.eslintrc.json` file and add your favorites rules from [`eslint`](https://eslint.org/docs/rules/), and [`vue`](https://vuejs.github.io/eslint-plugin-vue/rules/).
2. run `yarn lint:check` to see static analysis result
3. run `yarn lint:fix` to fix errors found by `eslint`

### Static Code Analysis - Visual Studio Code

As mentioned before, in order to lint your Javascript code in `*.vue` *Single File Components* with *vscode* you'll need to install [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [`Vetur`](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extensions for the editor.

Use the links above to install the extensions, or follow the steps below:

1. Open your vscode, type `CTRL + SHIFT + X`
2. Search for **ESLint**
3. Select and install the extension
4. Do same thing for **Vetur** extension

### Useful links

* [NuxtJS docs](https://nuxtjs.org/guides/get-started/installation)
* [ESLint docs](https://eslint.org/)
* [ESLint rules](https://eslint.org/docs/rules/)
* [Vue rules](https://vuejs.github.io/eslint-plugin-vue/rules/)
* [ESLint extension for vscode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Vetur extension for vscode](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## Attribution

See [Authors.md](AUTHORS.md)
