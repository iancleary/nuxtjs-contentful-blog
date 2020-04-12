<template>
  <Layout>
    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row items-center justify-between py-16 px-16"
    >
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="sticky font-bold leading-tight mt-12">Ian Cleary</div>
      </div>
      <div class="mt-8 md:mt-0">
        <g-image
          src="../../static/unDraw/developer.svg"
          class="mx-auto sm:mx-0"
          alt="developer with laptop and git commit log visual"
          immediate="true"
        />
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
          <g-image
            src="../../static/unDraw/undraw_web_developer_p3e5.svg"
            alt="web developer mocking up user interface wireframe"
            immediate="true"
          />
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image
            src="../../static/unDraw/undraw_light_the_fire_gt58.svg"
            alt="woman next to illuminated lighthouse"
            immediate="true"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { HelloService } from "../services";

@Component
export default class HomePage extends Vue {
  public title = "Typescript Starter for Gridsome";

  // public mounted(): void {
  //   HelloService.sayHello("Gridsome");
  // }
}
</script>
