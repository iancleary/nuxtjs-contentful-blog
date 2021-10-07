<template>
  <div>
    <section class="h-screen justify-center w-full pt-4 sm:pt-6 md:pt-8 overflow-hidden md:pt-10 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center text-copy-primary text-4xl md:text-7xl font-extrabold leading-none tracking-tight">
          Hello, I'm {{ person.fields.name }}.
        </div>
        <div class="text-center text-copy-primary text-l sm:text-2xl font-italic leading-none tracking-tight">
          ({{ person.fields.pronouns }})
        </div>
        <div class="mt-10">
          <!-- eslint-disable -->
            <div
              class="max-w-3xl mx-auto prose text-center text-l sm:text-2xl leading-9 font-medium"
              v-html="$md.render(person.fields.shortBio)"
            />
            <!-- eslint-enable -->
          <div
            id="picture-and-title"
            class="mt-8"
          >
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
          </div>
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div
            id="icon-row"
            class="mx-auto pt-10 items-center"
          >
            <ul class="flex justify-center space-x-4 md:space-x-8 lg:space-x-16 ">
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
          <div
            id="icon-row"
            class="mx-auto pt-4 md:pt-6 lg:pt-10 items-center"
          >
            <ul class="flex justify-center">
              <li>
                <ChevronsDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
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
import { ChevronsDownIcon } from 'vue-feather-icons';

export default {
  components: {
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
    SpotifyIcon,
    RssIcon,
    ChevronsDownIcon,
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
