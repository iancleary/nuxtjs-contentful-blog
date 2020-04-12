<template>
  <div
    sepia
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen theme-dark"
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
  // props: ['footer', 'primaryBg'],
  // computed: {
  //   mainClass() {
  //     let classes = [];
  //     if(this.primaryBg) classes.push('main--bg-teritary');
  //     return classes;
  //   },
  // },
};
</script>
