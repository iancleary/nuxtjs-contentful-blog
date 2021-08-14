<template>
  <div>
    <external-link
      link="https://linkedin.com/in/ian-c-6566b22a"
      alt="Link to my LinkedIn Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <linked-in-icon class="fill-current text-white h-8 w-8"></linked-in-icon>
    </external-link>
  </div>
</template>

<script>
import { LinkedInIcon } from 'vue-simple-icons';
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    LinkedInIcon,
    ExternalLink,
  },
};
</script>
