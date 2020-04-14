<template>
  <header class="border-t-8 border-green-700 py-4 sticky top-0 bg-background-primary opacity-90"
  >
    <div class="container pt-2 pb-6 inset-x-0">
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
