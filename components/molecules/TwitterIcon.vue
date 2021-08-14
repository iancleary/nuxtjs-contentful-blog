<template>
  <div>
    <external-link
      link="https://twitter.com/icancclearynow"
      alt="Link to my Twitter Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <twitter-icon class="fill-current text-white h-8 w-8"></twitter-icon>
    </external-link>
  </div>
</template>

<script>
import { TwitterIcon } from 'vue-simple-icons';
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    TwitterIcon,
    ExternalLink,
  },
};
</script>
