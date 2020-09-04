<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div>
    <!-- <LazyHydrate when-idle> -->
    <Hero />
    <!-- </LazyHydrate> -->
    <LazyHydrate when-visible>
      <Projects />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PostImages />
    </LazyHydrate>
    <div class="bg-background-secondary border-t-2 border-green-700">
      <!-- <LazyHydrate when-idle>
        <Posts />
      </LazyHydrate> -->
      <BlogSection />
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
import BlogSection from '@/components/BlogSection.vue';

export default {
  // layout: 'default',
  components: {
    LazyHydrate,
    Hero,
    // Posts,
    PostImages,
    Projects,
    BottomDots,
    BlogSection,
  },
  head: {
    title: 'Home page',
  },
};

</script>
