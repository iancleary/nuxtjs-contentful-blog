<template>
  <Layout>
    <g-image
      class="image"
      alt="Gridsome"
      src="~/assets/favicon.png"
      width="135"
    />

    <h1 class="title">
      {{ title }}
    </h1>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row items-center justify-between py-16 px-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="sticky font-bold leading-tight mt-12">
          Ian Cleary
        </div>
      </div>
      <div class="mt-8 md:mt-0">
        <g-image src="../../static/unDraw/developer.svg" class="mx-auto sm:mx-0" alt="developer with laptop and git commit log visual" immediate="true" />
      </div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl text-red-600">
        With the help of my coworkers,
        I am RF/Microwave Engineer working on electronics bound for outer space.
        With the help of the worldwide community,
        I am learning about web frameworks, open source development, and software engineering best practices.
      </p>

      <div class="flex flex-col sm:flex-row justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/unDraw/undraw_web_developer_p3e5.svg" alt="web developer mocking up user interface wireframe"  immediate="true" />
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/unDraw/undraw_light_the_fire_gt58.svg" alt="woman next to illuminated lighthouse"  immediate="true" />
        </div>
      </div>
    </div>
    <p>
      This is a starter template for Gridsome using Typescript.
      It uses <strong>eslint</strong> and <strong>typescript</strong>
      to run static code analisys in your project.
      In order to integrate these tools with Visual Studio Code,
      you'll need to install <strong>EsLint</strong> and <strong>Vetur</strong>
      extensions for the editor.
    </p>

    <p class="home-links">
      <a
        href="https://gridsome.org/docs"
        target="_blank"
        rel="noopener"
      >
        Gridsome Docs
      </a>
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
    </p>
  </Layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { HelloService } from '../services';


  @Component
  export default class HomePage extends Vue {
    public title = 'Typescript Starter for Gridsome';

    public mounted(): void {
      HelloService.sayHello('Gridsome');
    }
  }
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }

  .image {
    display: block;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    margin: 36px auto 24px;
  }
</style>
