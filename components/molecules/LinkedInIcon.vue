<template>
  <div>
    <external-link
      :link="person.fields.linkedIn"
      alt="Link to my LinkedIn Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <linked-in-icon class="fill-current text-white h-8 w-8"></linked-in-icon>
    </external-link>
  </div>
</template>

<script>
import { LinkedInIcon } from 'vue-simple-icons';
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    LinkedInIcon,
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
