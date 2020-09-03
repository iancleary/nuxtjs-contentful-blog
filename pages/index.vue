<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div class="overflow-x-hidden">
    <!-- <LazyHydrate when-idle> -->
    <Hero />
    <!-- </LazyHydrate> -->
    <LazyHydrate when-visible>
      <Projects />
    </LazyHydrate>
    <div class="bg-background-secondary">
      <LazyHydrate when-visible>
        <PostImages />
      </LazyHydrate>
      <!-- <LazyHydrate when-idle>
        <Posts />
      </LazyHydrate> -->
      <posts />
      <LazyHydrate when-visible>
        <BottomDots />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>

// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration';

import Hero from './partials/Hero.vue';
// import Posts from './partials/Posts.vue';
import PostImages from './partials/PostImages.vue';
import Projects from './partials/Projects.vue';
import BottomDots from '@/components/BottomDots.vue';
import posts from '@/components/posts.vue';

export default {
  // layout: 'default',
  components: {
    LazyHydrate,
    Hero,
    // Posts,
    PostImages,
    Projects,
    BottomDots,
    posts,
  },
  head: {
    title: 'Home page',
  },
};

</script>
