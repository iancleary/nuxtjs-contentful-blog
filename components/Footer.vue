<template>
  <div>
    <footer class="bg-green-700 text-white flex-col lg:flex-row lg:pb-8 justify-center">
      <ul class="lg:right-0 flex space-x-8 sm:pr-8 items-center justify-center py-8">
        <li>
          <GitHubIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <SpotifyIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <RssIcon />
        </li>
      </ul>
      <external-link
        :link="person.fields.buyMeACoffee"
        alt="Link to Ian's Buy Me a Coffee "
      >
        <img
          src="~/assets/bmc-full-logo.svg"
          class="max-h-16 fill-white justify-center container mx-auto px-4 pb-4 justify-center"
          alt="Logo for Buy Me a Coffee"
          immediate="true"
          height="40%"
        >
      </external-link>
      <div class="container mx-auto flex items-center justify-center ">
        <div class="mb-8 lg:mb-0 left-0">
          <div>
            Created with
            <external-link
              link="https://nuxtjs.org"
              alt="Link to nuxtjs.org"
              css="text-white"
            >
              NuxtJS
            </external-link>
            ,
            <external-link
              link="https://vuejs.org/"
              alt="Link to vuejs.org"
              css="text-white"
            >
              Vue.js
            </external-link>
            &amp;
            <external-link
              link="https://tailwindcss.com/"
              alt="Link to tailwindcss.com"
              css="text-white"
            >
              Tailwind CSS
            </external-link>
          </div>
          <div>
            Domain by
            <external-link
              link="https://hover.com"
              alt="Link to hover.com"
              css="text-white"
            >
              Hover
            </external-link>
            and deployed
            with
            <external-link
              link="https://vercel.com"
              alt="Link to vercel.com"
              css="text-white"
            >
              Vercel
            </external-link>
            .
          </div>
          <div>Copyright 2019-{{ currentYear }}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import ExternalLink from '@/components/atoms/ExternalLink.vue';
import GitHubIcon from '@/components/molecules/GitHubIcon.vue';
import LinkedInIcon from '@/components/molecules/LinkedInIcon.vue';
import SpotifyIcon from '@/components/molecules/SpotifyIcon.vue';
import TwitterIcon from '@/components/molecules/TwitterIcon.vue';
import RssIcon from '@/components/molecules/RssIcon.vue';

var currentYear = new Date().getFullYear();
export default {
  components: {
      ExternalLink,
      GitHubIcon,
      LinkedInIcon,
      SpotifyIcon,
      TwitterIcon,
      RssIcon,
  },
  data() {
    return {
      currentYear: currentYear,
    };
  },
  computed: {
    person() {
      var person = this.$store.state.persons[0];
      // console.log(person);
      return person;
      },
    },
};
</script>,
