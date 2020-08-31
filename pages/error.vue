<template>
  <Layout>
    <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
    <LazyHydrate when-idle>
      <div class="overflow-x-hidden container-inner mx-auto py-16">
        <div class="container-inner flex space-x-4 text-4xl font-bold mx-auto py-16">
          <h2>
            Page Not Found,
          </h2>
          <NuxtLink
            to="/"
          >
            Go Home?
          </NuxtLink>
        </div>
        <img
          src="~/assets/404.svg"
          alt="404 page not foud"
        />
      </div>
    </LazyHydrate>
    <div class="bg-background-secondary border-t-2 border-green-700">
      <LazyHydrate when-visible>
        <Posts />
      </LazyHydrate>
      <LazyHydrate when-visible>
        <BottomDots />
      </LazyHydrate>
    </div>
  </Layout>
</template>

<script>

// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration';

import Posts from './partials/Posts.vue';
import BottomDots from '@/components/BottomDots.vue';

export default {
  components: {
    LazyHydrate,
    Posts,
    BottomDots,
  },
};

</script>
