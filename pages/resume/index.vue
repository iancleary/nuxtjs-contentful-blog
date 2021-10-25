<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div>
    <div class="pt-8">
      <div
        class="pb-8 flex justify-center"
      >
        <resume-link />
      </div>
      <experience-list />
      <div
        class="pt-12 flex justify-center"
      >
        <resume-link />
      </div>
    </div>
    <!-- </LazyHydrate> -->
    <!-- <LazyHydrate when-visible>
      <Projects />
    </LazyHydrate> -->
    <!-- <LazyHydrate when-visible>
      <PostImages />
    </LazyHydrate> -->
  </div>
</template>

<script>


import LazyHydrate from 'vue-lazy-hydration';
import ExperienceList from '@/components/molecules/ExperienceList.vue';
import ExternalLink from '~/components/atoms/ExternalLink.vue';
import ResumeLink from '~/components/molecules/ResumeLink.vue';

// import PostImages from '@/components/organisms/PostImages.vue';
// import Projects from '@/components/organisms/Projects.vue';

export default {
  components: {
    LazyHydrate,
    ExperienceList,
    ExternalLink,
    ResumeLink,
    // PostImages,
    // Projects,
  },
  layout: 'default',
  head: {
    title: 'Ian Cleary 📡🛰',
  },
};

</script>
