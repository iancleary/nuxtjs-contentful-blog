<template>
  <div
    class="font-sans text-copy-primary
           content-wrapper flex flex-col min-h-screen bg-background-primary"
  >
    <Header />
    <transition
      name="fade"
      appear
    >
      <main class="bg-background-primary">
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script lang="ts">

import Footer from './partials/Footer.vue';
import Header from './partials/Header.vue';

export default {

  components: {
    Footer,
    Header,
  },
};
</script>
