
[TODO]

* [X] Bring in tailwindcss
* [] Bring in Main Page


[LATER]

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