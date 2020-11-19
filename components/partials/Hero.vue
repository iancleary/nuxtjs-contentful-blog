<template>
  <div>
    <section class="py-4 sm:py-6 md:py-8 overflow-hidden md:py-20 lg:py-24">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <div class="text-center text-copy-primary text-7xl font-extrabold leading-none tracking-tight">
            Hello, I'm {{ person.fields.name }}.
          </div>
          <blockquote class="mt-10">
            <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium">
              {{ person.fields.shortBio }}
            </div>
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
      <div class="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 items-center">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <ul class="flex mt-4 space-x-4">
              <li>
                <GitHubIcon /> 
              </li>
              <li class="text-xl">
                GitHub
              </li>
              <li>
                <external-link-icon
                  size="1.5x"
                  class="custom-class"
                />
              </li>
            </ul>
          </div>
          <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <ul class="flex mt-4 space-x-4">
              <li>
                <TwitterIcon /> 
              </li>
              <li class="text-xl">
                Twitter
              </li>
              <li>
                <external-link-icon
                  size="1.5x"
                  class="custom-class"
                />
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="flex justify-center pt-8">
          <ChevronsDownIcon />
        </div> -->
      </div>
      <!-- end hero -->
      <div class="mb-4">
        <div class="container-inner mx-auto">
          <div class="flex flex-col sm:flex-row justify-between items-center lg:mt-4 sm:mt-2">
            <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
              <img
                src="~/assets/unDraw/connectedWorld.svg"
                alt="Connected world"
                immediate="true"
              >
            </div>
            <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
              <img
                src="~/assets/unDraw/lightTheFire.svg"
                alt="woman next to illuminated lighthouse"
                immediate="true"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

// :src="person.fields.image.fields.file.url"
// src="@/assets/BlogCardHeadshot.png"

// import NuxtJsIcon from '@/components/NuxtJsIcon.vue';
import { ChevronsDownIcon, ExternalLinkIcon } from 'vue-feather-icons';
import GitHubIcon from '@/components/GitHubIcon.vue';
import TwitterIcon from '@/components/TwitterIcon.vue';
import DevToIcon from '@/components/DevToIcon.vue';


export default {
  components: {
    // NuxtJsIcon,
    ChevronsDownIcon,
    ExternalLinkIcon,
    GitHubIcon,
    TwitterIcon,
    DevToIcon,
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
