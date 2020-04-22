<template>
  <div
    class="font-sans text-copy-primary
           content-wrapper flex flex-col min-h-screen bg-background-primary"
  >
    <!-- LazyHydration interfers with "sticky" header -->
    <Header />
    <transition
      name="fade"
      appear
    >
      <main class="bg-background-primary">
        <slot />
      </main>
    </transition>
    <LazyHydrate when-visible>
      <Footer />
    </LazyHydrate>
  </div>
</template>

<script lang="ts">

// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration';

import Footer from './partials/Footer.vue';
import Header from './partials/Header.vue';

export default {

  components: {
    Footer,
    Header,
  },
};
</script>
