<template>
  <div>
    <external-link
      :link="person.fields.spotify"
      alt="Link to my Spotify Profile"
    >
      <!-- https://tailwindcss.com/docs/fill#usage -->
      <!-- eslint-disable-next-line -->
      <spotify-icon size="1.5x" class="fill-current text-white h-8 w-8" />
    </external-link>
  </div>
</template>

<script>
import { SpotifyIcon } from 'vue-simple-icons';
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    SpotifyIcon,
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
