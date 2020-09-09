<template>
  <div
    class="font-sans text-copy-primary
           content-wrapper flex flex-col min-h-screen overflow-hidden"
  >
    <!-- LazyHydration interfers with "sticky" header -->
    <div>
      <Header />
    </div>
    <transition
      name="fade"
      appear
    >
      <main class="bg-background-secondary">
        <Nuxt />
        <LazyHydrate when-idle>
          <BlogSection />
        </LazyHydrate>
      </main>
    </transition>
    <LazyHydrate when-visible>
      <div class="bg-background-secondary overflow-x-hidden">
        <ul class="lg:right-0 flex items-center justify-center">
          <li>
            <BottomDots />
          </li>
          <li>
            <BottomDots />
          </li>
        </ul>
      </div>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Footer />
    </LazyHydrate>
  </div>
</template>

<script>


import LazyHydrate from 'vue-lazy-hydration';
import BlogSection from '@/components/BlogSection.vue';
import BottomDots from '@/components/BottomDots.vue';
import Footer from './partials/Footer.vue';
import Header from './partials/Header.vue';

export default {

  components: {
    Footer,
    Header,
    LazyHydrate,
    BottomDots,
    BlogSection,
  },
};
</script>
