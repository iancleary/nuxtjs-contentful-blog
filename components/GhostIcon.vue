<template>
  <a
    role="button"
    href="https://blog.iancleary.me"
    target="_blank"
    rel="noopener noreferrer"
    class="toggle-theme"
    title="Link to my Blog"
  >
    <!-- https://tailwindcss.com/docs/fill#usage -->
    <!-- eslint-disable-next-line -->
    <ghost-icon size ="1.5x" class="fill-current text-white h-8 w-8"></ghost-icon>
  </a>
</template>

<script>
import { GhostIcon } from 'vue-simple-icons';

export default {
  components: {
    GhostIcon,
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
