<template>
  <g-link :to="href" class="justify-center text-copy-primary hover:text-gray-600"
  >{{ text }}</g-link>
</template>
<script>
export default {
  props: ["href", "text"]
};
</script>
