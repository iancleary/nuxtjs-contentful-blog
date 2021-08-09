<template>
  <div class="blog-card">
    <!-- eslint-disable -->
    <div class="break-normal pb-2">
      <link
        :href="url"
        title="Link to my blog post on Dev.to's website"
        :text="title">
      <span class="text-sm text-gray-600"> {{ readablePublishDate }} </span>
    </div>
    <span class="text-lg text-gray-600" v-html="description" />
    <!-- eslint-enable -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Blog Article's Title",
    },
    description: {
      type: String,
      default: "Blog Article Description",
    },
    tagList: {
      type: Array[String],
      default: () => ["Ubuntu", "Ansible"],
    },
    url: {
      type: String,
      default: "https://dev.to/iancleary/",
    },
    readablePublishDate: {
      type: String,
      default: "Dec 8 '19",
    },
  },
};
</script>

<style>
</style>
