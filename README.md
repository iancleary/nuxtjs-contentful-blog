# Personal website code built with no trackers, no cookies

[![Netlify Status](https://api.netlify.com/api/v1/badges/a026dcc6-920b-4f08-b6ff-535e61f4190a/deploy-status)](https://app.netlify.com/sites/heuristic-mccarthy-2e808b/deploys)

I built this website with Tailwind CSS, vue.js, Gridsome and Netlify.  Originally I started with plain HTML5, migrated to vue.js and tailwindcss with vue-router and vue-cli.  After some looking around, I've discovered Vuepress and eventually [Gridsome](https://gridsome.org/).  I recommend [Gridsome Starters](https://gridsome.org/starters/). I went with [Gridsome Portfolio Starter](https://gridsome.org/starters/gridsome-portfolio-starter/) by Andre Madarang due to the dark/light mode and [Tailwind CSS](https://tailwindcss.com/).

Since then, I have made it my own.

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
gridsome develop
```

## Attributions

### Useful Vue Packages

#### Mobile Touch Events

- Added mobile touch events using [vue2-touch-events](https://github.com/jerrybendy/vue-touch-events), and recommend it for Gridsome sites.

##### Issues with Touch Events and Gridsome Build using vue2-hammer

I originally tried [vue2-hammer](https://github.com/bsdfzzzy/vue2-hammer), but had issues `yarn build`. `yarn develop` works fine as it uses an interactive window and `hammerjs` is fine.

- As of 2020-01-25, I've had `yarn build` issues with  [vue2-hammer](https://github.com/bsdfzzzy/vue2-hammer) and think it doesn't work for server side rendered content. As far as I know, Gridsome's static content generation during webpack's build process doesn't have a window and essentially could be server side rendered static content.
- See <https://github.com/bsdfzzzy/vue2-hammer/issues/39> for `ReferenceError: window is not defined` error
- See <https://github.com/hammerjs/hammer.js/issues/930> for attempts at patches

#### Scroll Events

- Scroll events to hide/show navbar using [vue-scroll](https://github.com/wangpin34/vue-scroll)

#### Navbar Links Scrolling to Sections

- Navbar links scrolling to sections using [vue-scrollto](https://github.com/rigor789/vue-scrollto)

----



### See [Authors.md](AUTHORS.md)
