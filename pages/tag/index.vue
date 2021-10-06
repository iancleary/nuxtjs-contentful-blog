<template>
  <div>
    <LazyHydrate when-idle>
      <!-- <div
        v-for="post in posts"
        :key="post.fields.slug"
      >
        {{ getKeys(posts) }}
      </div> -->
      <div>
        {{ tags }}
      </div>
    </LazyHydrate>
  </div>
</template>

<script>

import LazyHydrate from 'vue-lazy-hydration';



export default {
  components: {
    LazyHydrate,
  },
  layout: 'default',
  computed: {
    tags() {
        return this.$store.state.tags;
    },
  },
};

</script>
