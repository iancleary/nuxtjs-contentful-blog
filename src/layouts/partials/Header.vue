<template>
  <header class="border-t-8 sm:border-t-8 border-green-700 py-4 sticky top-0 bg-background-primary">
    <div class="container relative py-4 inset-x-0">
      <ul class="absolute right-0 flex items-center">
        <li class="mr-8">
          <ToggleTheme />
        </li>
        <li class="mr-8">
          <GitHubLogo />
        </li>
        <li class="mr-8">
          <TwitterLogo />
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">

import ToggleTheme from '@/components/ToggleTheme.vue';
import TwitterLogo from '@/components/TwitterLogo.vue';
import GitHubLogo from '@/components/GitHubLogo.vue';

export default {
  components: {
      ToggleTheme,
      GitHubLogo,
      TwitterLogo,
  },
};
</script>

<style>
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
}
</style>