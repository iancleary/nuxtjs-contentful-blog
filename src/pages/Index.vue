<template>
  <Layout>
    <Hero />
    <Projects />
    <BottomDots />
  </Layout>
</template>

<script lang="ts">

import Hero from './partials/Hero.vue';
import Projects from './partials/Projects.vue';
import BottomDots from './partials/BottomDots.vue';

export default {
  components: {
    Hero,
    Projects,
    BottomDots,
  },
};

</script>
