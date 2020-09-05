<template>
  <a
    role="button"
    href="https://twitter.com/icancclearynow"
    target="_blank"
    rel="noopener noreferrer"
    class="toggle-theme"
    title="Link to my Twitter Profile"
  >
    <!-- https://tailwindcss.com/docs/fill#usage -->
    <!-- eslint-disable-next-line -->
    <twitter-icon class="fill-current text-white h-8 w-8"></twitter-icon>
  </a>
</template>

<script>
import { TwitterIcon } from 'vue-simple-icons';

export default {
  components: {
    TwitterIcon,
  },
};
</script>

<style>
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
}

.toggle-theme:hover {
    opacity: 0.8;
}

.toggle-theme:focus {
    outline: none;
}

</style>
