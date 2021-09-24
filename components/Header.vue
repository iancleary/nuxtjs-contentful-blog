<template>
  <nav class="z-10">
    <BlackLivesMatter />
    <!-- This example requires Tailwind CSS v2.0+ -->
    <header class="bg-indigo-600">
      <nav
        class="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center">
            <a
              href="/"
              class="font-medium text-white"
              key="Home"
            >
              Home
            </a>
          </div>
          <div class="ml-10 space-x-4">
            <a
              href="/blog"
              class="font-medium text-white"
            >Blog</a>
          </div>
        </div>
      </nav>
    </header>
  </nav>
</template>

<script>
import BlackLivesMatter from '@/components/molecules/BlackLivesMatter.vue';

export default {
  components: {
      BlackLivesMatter,
  },
};
</script>
