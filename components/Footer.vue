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
            <external-link
              link="https://nuxtjs.org"
              alt="Link to nuxtjs.org"
              css="text-white"
            >NuxtJS</external-link>
            ,
            <external-link
              link="https://vuejs.org/"
              alt="Link to vuejs.org"
              content="Vue.js"
              css="text-white"
            />
            &amp;
            <external-link
              link="https://tailwindcss.com/"
              content="Tailwind CSS"
              alt="Link to tailwindcss.com"
              css="text-white"
            />
          </div>
          <div>
            Domain by
            <external-link
              link="https://hover.com"
              alt="Link to hover.com"
              content="Hover"
              css="text-white"
            />
            and deployed
            with
            <external-link
              link="https://vercel.com"
              alt="Link to vercel.com"
              content="Vercel"
              css="text-white"
            />.
          </div>
          <div>Copyright 2019-{{ currentYear }}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import ExternalLink from '@/components/atoms/ExternalLink.vue';
import TwitterIcon from '@/components/molecules/TwitterIcon.vue';
import GitHubIcon from '@/components/molecules/GitHubIcon.vue';

var currentYear = new Date().getFullYear();
export default {
  components: {
      ExternalLink,
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
