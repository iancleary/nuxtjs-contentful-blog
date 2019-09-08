<template>
  <!-- LinkList -->
  <div id="link-list" class="col md:row-lg-4 py-4 md:flex-shrink-0">
     <link-card v-for="link in link_cards" v-bind:link="link" :key="link.id"></link-card>
  </div>
</template>


<script>
import LinkCard from "./LinkCard.vue";

export default {
  name: "link-list",
  props: {
    link_cards: Array,
  },
  components: {LinkCard}
};




</script>