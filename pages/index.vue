<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div class="bg-background-primary border-b-2 border-green-700">
    <!-- <LazyHydrate when-idle> -->
    <Hero />
    <!-- </LazyHydrate> -->
    <LazyHydrate when-visible>
      <Projects />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <PostImages />
    </LazyHydrate>
  </div>
</template>

<script>


import LazyHydrate from 'vue-lazy-hydration';

import Hero from '@/components/partials/Hero.vue';
import PostImages from '@/components/partials/PostImages.vue';
import Projects from '@/components/partials/Projects.vue';

export default {
  components: {
    LazyHydrate,
    Hero,
    PostImages,
    Projects,
  },
  layout: 'default',
  head: {
    title: 'Ian Cleary 📡🛰',
  },
};

</script>
