<template>
  <div>
      <info-list :info_blocks="opening_info_blocks"></info-list>
      <info-list :info_blocks="info_blocks"></info-list>
      <info-list :info_blocks="background_info_blocks"></info-list>
  </div>
</template>


<script>
import InfoList from "./InfoList.vue";

export default {
  name: "about-section",
  props: {
    opening_info_blocks: Array,
    info_blocks: Array,
    background_info_blocks: Array
  },
  components: {InfoList}
};
</script>