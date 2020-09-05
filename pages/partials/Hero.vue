<template>
  <div>
    <div
      class="container-inner mx-auto flex flex-col h-screen space-y-8 justify-center px-16"
    >
      <div class="sm:mt-0 lg:mt-8 mx-auto">
        <img
          src="~/assets/unDraw/developer.svg"
          alt="developer with laptop and git commit log visual"
          immediate="true"
        >
      </div>
      <div class="text-center text-copy-primary  text-5xl  font-extrabold leading-none tracking-tight">
        Ian Cleary
      </div>
      <div class="text-2xl space-y-4">
        <!-- <div class="text-center">
          👋
        </div> -->
        <div class="bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-pink-900 text-2xl">
          I am a RF/Microwave Engineer who specializes in satellite systems, cross functional communication, and software engineering best practices.
        </div>
      </div>
      <div class="mx-auto">
        <ChevronsDownIcon />
      </div>
    </div>
    <!-- end hero -->
    <div class="mb-4">
      <div class="container-inner mx-auto">
        <div class="flex flex-col sm:flex-row justify-between items-center py-6 lg:mt-4 sm:mt-2">
          <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
            <img
              src="~/assets/unDraw/connectedWorld.svg"
              alt="Connected world"
              immediate="true"
            >
          </div>
          <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
            <img
              src="~/assets/unDraw/lightTheFire.svg"
              alt="woman next to illuminated lighthouse"
              immediate="true"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import NuxtJsIcon from '@/components/NuxtJsIcon.vue';
import { ChevronsDownIcon } from 'vue-feather-icons';

export default {
  components: {
    // NuxtJsIcon,
    ChevronsDownIcon,
  },
};

</script>
