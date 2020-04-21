<template>
  <Layout>
    <div class="overflow-x-hidden">
      <Hero />
      <Projects />
      <div class="bg-background-secondary">
        <Posts />
        <BottomDots />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">

import Hero from './partials/Hero.vue';
import Posts from './partials/Posts.vue';
import Projects from './partials/Projects.vue';
import BottomDots from '@/components/BottomDots.vue';

export default {
  components: {
    Hero,
    Posts,
    Projects,
    BottomDots,
  },
};

</script>
