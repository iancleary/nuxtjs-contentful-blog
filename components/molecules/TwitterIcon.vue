<template>
  <div>
    <icon
      href="https://twitter.com/icancclearynow"
      title="Link to my Twitter Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <twitter-icon class="fill-current text-white h-8 w-8"></twitter-icon>
    </icon>
  </div>
</template>

<script>
import { TwitterIcon } from 'vue-simple-icons';
import Icon from '@/components/atoms/Icon.vue';

export default {
  components: {
    TwitterIcon,
    Icon,
  },
};
</script>
