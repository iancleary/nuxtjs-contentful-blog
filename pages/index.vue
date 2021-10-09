<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div>
    <!-- <div class="border-b-2 border-green-700"> -->
    <Hero />
    <!-- </div> -->
    <div class="pb-8">
      <ExperienceList />
    </div>
    <div class="mb-4 mt-8">
      <div class="container-inner mx-auto">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div class="w-full sm:w-1/2 px-8">
            <img
              src="~/assets/unDraw/connectedWorld.svg"
              alt="Connected world"
              immediate="true"
            >
          </div>
          <div class="w-full sm:w-1/2 px-8 pt-8 sm:py-0">
            <img
              src="~/assets/unDraw/lightTheFire.svg"
              alt="woman next to illuminated lighthouse"
              immediate="true"
            >
          </div>
        </div>
      </div>
    </div>
    <LazyHydrate when-idle>
      <BlogSection />
    </LazyHydrate>
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
import Hero from '@/components/Hero.vue';
import BlogSection from '@/components/BlogSection.vue';
import ExperienceList from '@/components/molecules/ExperienceList.vue';

// import PostImages from '@/components/organisms/PostImages.vue';
// import Projects from '@/components/organisms/Projects.vue';

export default {
  components: {
    LazyHydrate,
    BlogSection,
    Hero,
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
