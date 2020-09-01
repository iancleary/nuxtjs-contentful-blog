<template>
  <footer class="bg-green-700 text-white">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-6">
      <div class="mb-8 lg:mb-0">
        <div>
          Created with
          <a
            href="gridsome"
            target="_blank"
            rel="noopener"
            class="text-white"
          >NuxtJS</a>,
          <a
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener"
            class="text-white"
          >
            Vue.js
          </a>
          &amp;
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener"
            class="text-white"
          >Tailwind CSS</a>
        </div>
        <div>
          Domain by
          <a
            href="https://hover.com"
            target="_blank"
            rel="noopener"
            class="text-white"
          >Hover</a>
          and deployed
          with
          <a
            href="https://netlify.com"
            target="_blank"
            rel="noopener"
            class="text-white"
          >Netlify</a>.
        </div>
        <div>Copyright 2019-{{ currentYear }}. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script>

var currentYear = new Date().getFullYear();
export default {
  data() {
    return {
      currentYear: currentYear,
    };
  },
};
</script>,
