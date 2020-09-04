<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img
        class="h-48 w-full object-cover"
        :src="heroImageUrl"
        alt=""
      >
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-indigo-600">
          <!-- <nuxt-link
            :to="slug"
            class="hover:underline"
          >
            Blog
          </nuxt-link> -->
        </p>
        <nuxt-link
          :to="slug"
        >
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{ description }}
          </p>
        </nuxt-link>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <img
              class="h-10 w-10 rounded-full"
              src="@/assets/BlogCardHeadshot.png"
              alt=""
            >
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <a
              href="#"
              class="hover:underline"
            >
              {{ author }}
            </a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">
              {{ formattedPublishDate }}
            </time>
            <!-- <span class="mx-1">
              &middot;
            </span>
            <span>
              6 min read
            </span> -->
          </div>
          <!-- <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">
              {{ publishDate }}
            </time> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
  computed: {
    formattedPublishDate() {
      var d = new Date(this.publishDate);
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return days[d.getUTCDay()] +", " + months[d.getUTCMonth()] + " " + d.getUTCDate() +", " +d.getUTCFullYear() ;
    },
  },
};
</script>
