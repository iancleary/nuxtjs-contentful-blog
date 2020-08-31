<template>
  <main>
    <div class="container">
      <h1 class="title">
        Paw Waves
      </h1>
      <section
        v-for="post in posts"
        :key="post.fields.slug"
      >
        <div
          class="image"
          :style="
            `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
          "
        />
        <h2 class="title">
          <nuxt-link :to="post.fields.slug">
            {{ post.fields.title }}
          </nuxt-link>
        </h2>
        <p class="author">
          By {{ post.fields.author.fields.name }}
        </p>
        <p class="description">
          {{ post.fields.description }}<br>
          <nuxt-link
            :to="post.fields.slug"
            class="more"
          >
            Read more ⟶
          </nuxt-link>
        </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {
 computed: {
   posts() {
     return this.$store.state.posts;
   },
 },
 head: {
   title: "Paw Waves, Latest Posts",
 },
};
</script>
