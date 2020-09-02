<template>
  <nav class="sticky top-0 pb-8 z-10">
    <BlackLivesMatter />
    <header
      class="bg-background-primary py-4 opacity-90"
    >
      <div class="container inset-x-0 pt-2 pb-8">
        <ul class="absolute left-0 flex items-center">
          <li class="ml-8">
            <NuxtLink
              to="/"
              class="text-xl font-bold text-left"
            >
              Ian Cleary
            </NuxtLink>
          </li>
        </ul>
        <ul class="absolute right-0 flex space-x-8 pr-8 items-center pt-1">
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
  </nav>
</template>

<script>

import DevLogo from '@/components/DEVLogo.vue';
import TwitterLogo from '@/components/TwitterLogo.vue';
import GitHubLogo from '@/components/GitHubLogo.vue';
import BlackLivesMatter from '@/components/BlackLivesMatter.vue';

export default {
  components: {
      DevLogo,
      GitHubLogo,
      TwitterLogo,
      BlackLivesMatter,
  },
};
</script>
