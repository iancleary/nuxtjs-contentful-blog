<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div>
    <LazyHydrate when-idle>
      <BlogSection />
    </LazyHydrate>
    <!-- </LazyHydrate> -->
    <!-- <LazyHydrate when-visible>
      <Projects />
    </LazyHydrate> -->
    <!-- <LazyHydrate when-visible>
      <PostImages />
    </LazyHydrate> -->
  </div>
</template>

<script>

import LazyHydrate from 'vue-lazy-hydration';
import Hero from '@/components/Hero.vue';
import BlogSection from '@/components/BlogSection.vue';


export default {
  components: {
    LazyHydrate,
    BlogSection,
  },
  layout: 'default',
  head: {
    title: 'Ian Cleary\'s Blog 📚',
  },
};

</script>
