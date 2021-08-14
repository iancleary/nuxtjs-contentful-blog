<template>
  <div>
    <icon
      href="https://linkedin.com/in/ian-c-6566b22a"
      title="Link to my LinkedIn Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <linked-in-icon class="fill-current text-white h-8 w-8"></linked-in-icon>
    </icon>
  </div>
</template>

<script>
import { LinkedInIcon } from 'vue-simple-icons';
import Icon from '@/components/atoms/Icon.vue';

export default {
  components: {
    LinkedInIcon,
    Icon,
  },
};
</script>
