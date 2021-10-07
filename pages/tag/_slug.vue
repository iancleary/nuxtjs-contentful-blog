<template>
  <div>
    <LazyHydrate when-idle>
      <TagSection :tag="slug" />
    </LazyHydrate>
  </div>
</template>

<script>

import LazyHydrate from 'vue-lazy-hydration';
import TagSection from '@/components/TagSection.vue';



export default {
  components: {
    LazyHydrate,
    TagSection,
  },
  layout: 'default',
  head: {
    title: '🏷️',
  },
  computed: {
    slug () {
        return this.$route.params.slug;
    },
  },
};

</script>
