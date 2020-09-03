<template>
  <main>
    <div class="container">
      <section
        v-for="post in posts"
        :key="post.fields.slug"
      >
        <PostCard
          :title="post.fields.title"
          :slug="post.fields.slug"
          :description="post.fields.description"
          :author="post.fields.author.fields.name"
          :heroImageUrl="post.fields.heroImage.fields.file.url"
        />
      </section>
    </div>
  </main>
</template>

<script>
import PostCard from '@/components/PostCard/PostCard.vue';

export default {
  components: {
    PostCard,
  },
 computed: {
   posts() {
     return this.$store.state.posts;
   },
 },
};
</script>
