<template>
  <header
    class="border-t-8 border-green-700 py-4 sticky top-0 bg-background-primary opacity-90 z-10"
  >
    <div class="container pt-2 pb-8 inset-x-0">
      <ul class="absolute left-0 flex items-center">
        <li class="ml-8">
          <div class="text-xl font-bold text-left">
            Ian Cleary
          </div>
        </li>
      </ul>
      <ul class="absolute right-0 flex items-center pt-1">
        <li class="mr-8">
          <ToggleTheme />
        </li>
        <li class="mr-8">
          <DevLogo />
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

import DevLogo from '@/components/DEVLogo.vue';
import ToggleTheme from '@/components/ToggleTheme.vue';
import TwitterLogo from '@/components/TwitterLogo.vue';
import GitHubLogo from '@/components/GitHubLogo.vue';

export default {
  components: {
      ToggleTheme,
      DevLogo,
      GitHubLogo,
      TwitterLogo,
  },
};
</script>
