<template>
  <div>
    <LazyHydrate when-idle>
      <BlogSection />
    </LazyHydrate>
  </div>
</template>

<script>

import LazyHydrate from 'vue-lazy-hydration';
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
