<template>
  <div>
    <external-link
      :link="person.fields.github"
      alt="Link to my GitHub Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <git-hub-icon size="2.0x" class="fill-current text-white h-8 w-8" />
    </external-link>
  </div>
</template>

<script>
import { GitHubIcon } from 'vue-simple-icons';
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    GitHubIcon,
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
