/* eslint-disable vue/no-v-html */
<template>
  <div>
    <section class="h-screen pt-4 sm:pt-6 md:pt-8 overflow-hidden md:pt-10 lg:pt-20">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <div class="text-center text-copy-primary text-4xl md:text-7xl font-extrabold leading-none tracking-tight">
            Hello, I'm {{ person.fields.name }}.
          </div>
          <div class="text-center text-copy-primary text-l sm:text-2xl font-italic leading-none tracking-tight">
            ({{ person.fields.pronouns }})
          </div>
          <blockquote class="mt-10">
            <!-- eslint-disable -->
            <div
              class="max-w-3xl mx-auto text-center text-l sm:text-2xl leading-9 font-medium"
              v-html="$md.render(person.fields.shortBio)"
            />
            <!-- eslint-enable -->
            <footer class="mt-8">
              <div class="md:flex md:items-center md:justify-center">
                <div class="md:flex-shrink-0">
                  <img
                    class="mx-auto h-10 w-10 rounded-full"
                    :src="person.fields.image.fields.file.url"
                    alt="personal photo or avatar"
                    immediate="true"
                  >
                </div>
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <!-- <div class="text-base font-medium">
                    {{ person.fields.name }}
                  </div> -->
                  <div class="text-base font-medium text-gray-500">
                    {{ person.fields.title }}, {{ person.fields.company }}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="max-w-l mx-auto pt-10 items-center">
        <ul class="flex justify-center space-x-16 items-center">
          <li>
            <GitHubIcon />
          </li>
          <li>
            <linked-in-icon />
          </li>
          <li>
            <spotify-icon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <RssIcon />
          </li>
        </ul>
      </div>
      <!-- <div class="flex justify-center pt-8">
          <ChevronsDownIcon />
        </div> -->
    </section>
    <!-- end hero -->
  </div>
</template>

<script>

// :src="person.fields.image.fields.file.url"
// src="@/assets/BlogCardHeadshot.png"

import GitHubIcon from '@/components/molecules/GitHubIcon.vue';
import LinkedInIcon from './molecules/LinkedInIcon.vue';
import SpotifyIcon from '@/components/molecules/SpotifyIcon.vue';
import TwitterIcon from '@/components/molecules/TwitterIcon.vue';
import RssIcon from '@/components/molecules/RssIcon.vue';


export default {
  components: {
    // ChevronsDownIcon,
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
    SpotifyIcon,
    RssIcon,
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
