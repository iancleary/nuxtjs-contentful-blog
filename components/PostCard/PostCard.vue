<template>
  <div>
    <div
      class="image w-full object-cover"
      :style="
        `background: url(https:${heroImageUrl})`
      "
    />
    <h2 class="title">
      <nuxt-link :to="slug">
        {{ title }}
      </nuxt-link>
    </h2>
    <p class="author">
      By {{ author }}
    </p>
    <p class="description">
      {{ description }}<br>
      <nuxt-link
        :to="slug"
        class="more"
      >
        Read more ⟶
      </nuxt-link>
    </p>
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
  },
};
</script>
