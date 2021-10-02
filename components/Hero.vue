<template>
  <div>
    <section class="relative h-screen justify-center w-full pt-4 sm:pt-6 md:pt-8 overflow-hidden md:pt-10 lg:pt-20">
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
              class="max-w-3xl mx-auto text-center text-l sm:text-2xl leading-9 font-medium"
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
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 h-1/3 pt-6">
        <div class="mx-auto pt-10 items-center">
          <div class="flex justify-center items-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transform rotate-90"
            >
              <g id="triangles">
                <g id="darkGroup">
                  <path
                    id="dark1"
                    d="M51.9177 61.8227C53.1318 62.6113 53.1318 64.3887 51.9177 65.1773L27.5894 80.9789C26.2589 81.8432 24.5 80.8883 24.5 79.3017L24.5 47.6983C24.5 46.1117 26.2589 45.1568 27.5894 46.0211L51.9177 61.8227Z"
                    fill-opacity="0.7"
                  />
                  <path
                    id="dark2"
                    d="M40.4177 61.8227C41.6318 62.6113 41.6318 64.3887 40.4177 65.1773L16.0894 80.9789C14.7589 81.8432 13 80.8883 13 79.3017L13 47.6983C13 46.1117 14.7589 45.1568 16.0894 46.0211L40.4177 61.8227Z"
                    fill-opacity="0.7"
                  />
                </g>
                <g id="lightGroup">
                  <path
                    id="light1"
                    d="M40.4177 61.8227C41.6318 62.6113 41.6318 64.3887 40.4177 65.1773L16.0894 80.9789C14.7589 81.8432 13 80.8883 13 79.3017L13 47.6983C13 46.1117 14.7589 45.1568 16.0894 46.0211L40.4177 61.8227Z"
                    fill-opacity="0.7"
                  />
                </g>
              </g>
            </svg>
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

export default {
  components: {
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

<style>

:root {
    /* --dark-color: #635bff;
    --light-color: #80e9ff; */
    --dark-color: #7B8794;
    --light-color: #9AA5B1;
}

svg {
    cursor: pointer;
}
#darkGroup {
    fill: var(--dark-color);
}
#lightGroup {
    fill: var(--light-color);
}

#dark1,
#light1,
#dark2 {
    transition: all 1s ease;
}

#dark2 {
    transform: translateX(-100%);
}

svg:hover #light1 {
    transform: translateX(20%);
}

svg:hover #dark1 {
    transform: translateX(40%);
    opacity: 0;
}

svg:hover #dark2 {
    transform: translateX(0%);
}


</style>
