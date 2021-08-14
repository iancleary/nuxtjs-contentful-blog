<template>
  <div class="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
    <nuxt-link
      :to="route"
    >
      <div class="flex-shrink-0">
        <img
          class="h-64 py-4 px-4 justify-center w-full object-cover bg-white"
          :src="heroImageUrl"
          alt=""
        >
      </div>
      <div class="flex-1 p-4 flex flex-col justify-between">
        <div class="flex-1">
          <!-- <p class="text-sm leading-5 font-medium text-indigo-600">
        </p> -->

          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{ description }}
          </p>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="person.fields.image.fields.file.url"
              alt=""
            >
          </div>
          <div class="ml-3">
            <p class="text-sm leading-5 font-medium text-gray-900">
              {{ author }}
            </p>
            <div class="flex text-sm leading-5 text-gray-500">
              <time datetime="2020-03-16">
                {{ formattedPublishDate }}
              </time>
              <span class="mx-1">
                &middot;
              </span>
              <span>
                <!-- 6 min read -->
                {{ readingTime }}
              </span>
            </div>
          <!-- <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">
              {{ publishDate }}
            </time> -->
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
const readingTime = require('reading-time');

export default {
  props: {
    slug: {
        default: "blog-post",
        type: String,
        required: true,
    },
    title: {
        default: "Blog Post",
        type: String,
        required: true,
    },
    heroImageUrl: {
      type: String,
      required: true,
    },
    author: {
        default: "Ian Cleary",
        type: String,
    },
    description: {
        default: "Description of my blog post",
        type: String,
    },
    publishDate: {
      default: "2019-12-08",
      type: String,
    },
    body: {
      default: "Blog Article Content",
      type: String,
    },
    routePrefix: {
      default: "/blog", // folder where _slug.vue is located (i.e. pages/blog/_slug.vue)
      type: String,
    },
  },
  computed: {
    formattedPublishDate() {
      var d = new Date(this.publishDate);
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return days[d.getUTCDay()] +", " + months[d.getUTCMonth()] + " " + d.getUTCDate() +", " +d.getUTCFullYear() ;
    },
    readingTime() {
      const stats = readingTime(this.body);
      return stats.text;
    },
    person() {
      var person = this.$store.state.persons[0];
      // console.log(person);
      return person;
      },
    route() {
      const elements = [this.routePrefix, this.slug];
      return elements.join("/");
      },
    },
};
</script>
