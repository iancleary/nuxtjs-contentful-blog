<template>
  <Layout>
    <div
      class="container-inner mx-auto flex flex-col sm:flex-row items-center justify-between py-16 px-16"
    >
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="font-bold leading-tight mt-12">
          Ian Cleary
        </div>
      </div>
      <div class="mt-8 md:mt-0">
        <g-image
          src="~/assets/images/unDraw/developer.svg"
          alt="developer with laptop and git commit log visual"
          immediate="true"
        />
      </div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        With the help of my coworkers,
        I am RF/Microwave Engineer working on electronics bound for outer space.
        With the help of the worldwide community,
        I am learning about web frameworks, open source development, and software engineering best practices.
      </p>

      <div class="flex flex-col sm:flex-row justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image
            src="~/assets/images/unDraw/code_review.svg"
            alt="Code review of user interface wireframe"
            immediate="true"
          />
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image
            src="~/assets/images/unDraw/lightTheFire.svg"
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
// import { HelloService } from "../services";

@Component
export default class HomePage extends Vue {
  public title = "Typescript Starter for Gridsome";

  // public mounted(): void {
  //   HelloService.sayHello("Gridsome");
  // }
}
</script>
