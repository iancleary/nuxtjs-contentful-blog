<template>
  <div>
    <external-link
      :link="person.fields.twitter"
      alt="Link to my Twitter Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <twitter-icon class="fill-current text-white h-8 w-8"></twitter-icon>
    </external-link>
  </div>
</template>

<script>
import { TwitterIcon } from 'vue-simple-icons';
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    TwitterIcon,
    ExternalLink,
  },
  computed: {
    person() {
      var person = this.$store.state.persons[0];
      // console.log(person);
      return person;
      },
    },
};
</script>
