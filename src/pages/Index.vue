<template>
  <Layout>
    <Hero />
    <Projects />
  </Layout>
</template>

<script lang="ts">
// import { Component, Vue } from "vue-property-decorator";
// import { HelloService } from "../services";

import Hero from './partials/Hero.vue';
import Projects from './partials/Projects.vue';

export default {
  components: {
    Hero,
    Projects,

  },
};

// @Component
// export default class HomePage extends Vue {
//   public title = "Typescript Starter for Gridsome";

//   // public mounted(): void {
//   //   HelloService.sayHello("Gridsome");
//   // }
// }
</script>
