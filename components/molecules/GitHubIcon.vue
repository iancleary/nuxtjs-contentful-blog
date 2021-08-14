<template>
  <div>
    <external-link
      link="https://github.com/iancleary"
      alt="Link to my GitHub Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <git-hub-icon size="1.5x" class="fill-current text-white h-8 w-8" />
    </external-link>
  </div>
</template>

<script>
import { GitHubIcon } from 'vue-simple-icons';
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    GitHubIcon,
    ExternalLink,
  },
};
</script>
