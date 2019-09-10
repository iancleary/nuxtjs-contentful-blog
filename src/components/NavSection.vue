<template>
  <router-link :to="section.href" class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-white mr-4">
    <i :class="section.icon"></i> {{section.name}}
  </router-link>
</template>

<script type="text/javascript">
export default {
  name: "NavSection",
  props: ["section"]
};
</script>