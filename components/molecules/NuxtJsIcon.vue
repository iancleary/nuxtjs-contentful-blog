<template>
  <!-- https://tailwindcss.com/docs/fill#usage -->
  <!-- eslint-disable-next-line -->
    <nuxt-js-icon class="fill-current text-white h-8 w-8"></nuxt-js-icon>
</template>

<script>
import { NuxtJsIcon } from 'vue-simple-icons';

export default {
  components: {
    NuxtJsIcon,
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
