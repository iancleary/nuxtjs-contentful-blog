<template>
  <Layout>
    <!-- Overflow-x-hidden prevents horizontal scrolling when 
      elements are larger than others within the app -->
    <div class="overflow-x-hidden">
      <LazyHydrate when-idle>
        <Hero />
      </LazyHydrate>
      <LazyHydrate when-visible>
        <Projects />
      </LazyHydrate>
      <div class="bg-background-secondary">
        <LazyHydrate when-visible>
          <Posts />
        </LazyHydrate>
        <LazyHydrate when-visible>
          <BottomDots />
        </LazyHydrate>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">

// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration';

import Hero from './partials/Hero.vue';
import Posts from './partials/Posts.vue';
import Projects from './partials/Projects.vue';
import BottomDots from '@/components/BottomDots.vue';

export default {
  components: {
    LazyHydrate,
    Hero,
    Posts,
    Projects,
    BottomDots,
  },
};

</script>
