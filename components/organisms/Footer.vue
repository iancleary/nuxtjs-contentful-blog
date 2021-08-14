<template>
  <div>
    <footer class="bg-green-700 text-white flex-col lg:flex-row lg:pb-8">
      <ul class="lg:right-0 flex space-x-8 sm:pr-8 items-center justify-center py-8">
        <li>
          <GitHubIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
      <div class="container mx-auto flex items-center justify-center ">
        <div class="mb-8 lg:mb-0 left-0">
          <div>
            Created with
            <a
              href="https://nuxtjs.org"
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
              href="https://vercel.com"
              target="_blank"
              rel="noopener"
              class="text-white"
            >Vercel</a>.
          </div>
          <div>Copyright 2019-{{ currentYear }}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import DevToIcon from '@/components/molecules/DevToIcon.vue';
import TwitterIcon from '@/components/molecules/TwitterIcon.vue';
import GitHubIcon from '@/components/molecules/GitHubIcon.vue';

var currentYear = new Date().getFullYear();
export default {
  components: {
      DevToIcon,
      GitHubIcon,
      TwitterIcon,
  },
  data() {
    return {
      currentYear: currentYear,
    };
  },
};
</script>,
