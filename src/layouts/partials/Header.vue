<template>
  <header
    class="border-t-8 border-green-700 py-4 sticky top-0 bg-background-primary opacity-90 z-10"
  >
    <div class="container pt-2 pb-8 inset-x-0">
      <ul class="absolute left-0 flex items-center">
        <li class="ml-8">
          <g-link
            to="/"
            class="text-xl font-bold text-left"
          >
            Ian Cleary
          </g-link>
        </li>
      </ul>
      <ul class="absolute right-0 flex space-x-8 pr-8 items-center pt-1">
        <li>
          <ToggleTheme />
        </li>
        <li>
          <DevLogo />
        </li>
        <li>
          <GitHubLogo />
        </li>
        <li>
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
