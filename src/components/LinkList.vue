<template>
  <!-- LinkList -->
  <div id="link-list" class="justify-center sm:block md:flex py-4">
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