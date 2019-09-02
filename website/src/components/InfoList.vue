<template>
  <!-- InfoBlock -->
  <div id="info-list">
     <info-card v-for="info in info_blocks" v-bind:info="info" :key="info.id"></info-card>
  </div>
</template>


<script>
import Vue from "vue";
import InfoCard from "./InfoCard.vue";

export default {
  name: "info-list",
  props: {
    info_blocks: Array,
  },
  components: {InfoCard}
};




</script>