<template>
  <div class="project-card">
    <!-- eslint-disable -->
    <div class="break-normal w-2/3 pb-2">
      {{ title }}
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
    },
};


</script>

<style>
</style>
