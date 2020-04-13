<template>
  <div
    class="bg-background-primary font-sans text-copy-primary
           content-wrapper leading-normal flex flex-col min-h-screen"
  >
    <Header />
    <transition
      name="fade"
      appear
    >
      <main>
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
