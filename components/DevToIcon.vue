<template>
  <a
    role="button"
    href="https://dev.to/iancleary"
    target="_blank"
    rel="noopener noreferrer"
    title="Link to iancleary's DEV Profile"
  >
    <!-- https://tailwindcss.com/docs/fill#usage -->
    <!-- eslint-disable-next-line -->
    <dev-to-icon size="1.5x" class="fill-current text-white h-8 w-8"></dev-to-icon>
  </a>
</template>

<script>
import { DevToIcon } from 'vue-simple-icons';

export default {
  components: {
    DevToIcon,
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
