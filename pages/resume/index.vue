<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div>
    <div class="pt-8">
      <!-- <div
        class="pt-8 flex justify-center"
      >
        <a
          class="border-2 border-gray-500 m-2 p-4 rounded-full font-bold text-copy-primary"
          href="/cv"
        >
          Download CV
        </a>
      </div> -->
      <ExperienceList />
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

// import PostImages from '@/components/organisms/PostImages.vue';
// import Projects from '@/components/organisms/Projects.vue';

export default {
  components: {
    LazyHydrate,
    ExperienceList,
    // PostImages,
    // Projects,
  },
  layout: 'default',
  head: {
    title: 'Ian Cleary 📡🛰',
  },
};

</script>
