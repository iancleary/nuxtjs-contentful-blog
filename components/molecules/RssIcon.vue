<template>
  <div>
    <external-link
      link="/feed.xml"
      alt="Link to my RSS Feed"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <rss-icon class="fill-current text-white h-6 w-6"></rss-icon>
    </external-link>
  </div>
</template>

<script>
import { RssIcon } from 'vue-simple-icons';
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    RssIcon,
    ExternalLink,
  },
};
</script>
