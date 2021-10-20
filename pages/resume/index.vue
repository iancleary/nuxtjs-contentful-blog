<template>
  <!-- Overflow-x-hidden prevents horizontal scrolling when
      elements are larger than others within the app -->
  <div>
    <div class="pt-8">
      <div
        class="pt-8 flex justify-center"
      >
        <external-link
          href="https://assets.ctfassets.net/b4dlpmwrdw4v/4f2HV8YDADVfEXrXYhcX5H/8087ede89c94932235650975f6159da7/IanClearyResume2021.pdf"
          alt="Ian Cleary's Resume as a PDF"
          css="border-2 border-gray-500 m-2 p-4 rounded-full font-bold text-copy-primary"
        >
          Download CV
        </external-link>
      </div>
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
import ExternalLink from '~/components/atoms/ExternalLink.vue';

// import PostImages from '@/components/organisms/PostImages.vue';
// import Projects from '@/components/organisms/Projects.vue';

export default {
  components: {
    LazyHydrate,
    ExperienceList,
    ExternalLink,
    // PostImages,
    // Projects,
  },
  layout: 'default',
  head: {
    title: 'Ian Cleary 📡🛰',
  },
};

</script>
