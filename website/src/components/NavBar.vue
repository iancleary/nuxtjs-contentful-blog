<template>
  <header>
    <nav class="mx-6 bg-indigo-300 p-4 my-8 rounded-lg shadow-xl pt-4 lg:items-center lg:h-auto">
      <div class="flex items-center flex-shrink-0 font-serif text-gray-700 ck mr-6">
        <span class="font-semibold text-xl tracking-tight">{{ name }}</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <nav-section v-for="section in sections" v-bind:section="section" :key="section.id"></nav-section>
        </div>
        <div>
          <a
            :href="source_code_url"
            target="_blank"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          >Source Code</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import NavSection from "./NavSection.vue";

export default {
  name: "NavBar",
  props: {
    name: String,
    source_code_url: String,
    sections: Array,
  },
  components: {NavSection}
};
</script>