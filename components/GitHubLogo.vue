<template>
  <a
    role="button"
    href="https://github.com/iancleary"
    target="_blank"
    rel="noopener noreferrer"
    class="toggle-theme"
    title="Link to my GitHub Profile"
  >
    <!-- https://tailwindcss.com/docs/fill#usage -->
    <!-- eslint-disable-next-line -->
    <git-hub-icon size="1.5x" class="fill-current text-white h-8 w-8"></git-hub-icon>
  </a>
</template>

<script>
import { GitHubIcon } from 'vue-simple-icons';

export default {
  components: {
    GitHubIcon,
  },
};
</script>

<style>


.toggle-theme {
  background-color: transparent;
  border: 0;
  color: black;
  cursor: pointer;
}

.toggle-theme:hover {
    opacity: 0.8;
}

.toggle-theme:focus {
    outline: none;
}

</style>
