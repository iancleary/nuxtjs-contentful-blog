<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div class="bg-background-primary">
    <!-- <LazyHydrate when-idle> -->
    <Hero />
    <!-- </LazyHydrate> -->
    <div class="bg-background-secondary border-t-2 border-green-700">
      <LazyHydrate when-visible>
        <Projects />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>


import LazyHydrate from 'vue-lazy-hydration';

import Hero from '@/components/partials/Hero.vue';

import Projects from '@/components/partials/Projects.vue';

export default {
  components: {
    LazyHydrate,
    Hero,
    Projects,
  },
  layout: 'default',
  head: {
    title: 'Ian Cleary 📡🛰',
  },
};

</script>
