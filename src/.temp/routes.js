export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/iancleary/dev/personal-website/src/templates/Tag.vue")
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/iancleary/dev/personal-website/src/pages/Blog.vue")
  },
  {
    path: "/how-to-get-better-at-coding/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/iancleary/dev/personal-website/src/templates/Post.vue")
  },
  {
    path: "/introduction-to-gridsome/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/iancleary/dev/personal-website/src/templates/Post.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/iancleary/dev/personal-website/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/iancleary/dev/personal-website/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/iancleary/dev/personal-website/src/pages/404.vue")
  }
]

