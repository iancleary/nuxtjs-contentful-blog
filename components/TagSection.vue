<template>
  <main>
    <div class="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 lg:pb-28">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3" />
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl text-copy-primary leading-9 tracking-tight font-extrabold text-white-900 sm:text-4xl sm:leading-10">
            Blog Posts tagged with {{ capitalizedTag }}
          </h2>
        </div>
        <div class="flex items-strech mt-12 grid gap-5 max-w-xlg mx-auto lg:grid-cols-2 lg:max-w-none">
          <BlogSectionCard
            v-for="post in sortedFilteredPosts"
            :key="post.fields.slug"
            :title="post.fields.title"
            :slug="post.fields.slug"
            :description="post.fields.description"
            :author="post.fields.author.fields.name"
            :heroImageUrl="post.fields.heroImage.fields.file.url"
            :publishDate="post.fields.publishDate"
            :body="post.fields.body"
            :tags="post.fields.tags"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BlogSectionCard from '@/components/molecules/BlogSectionCard.vue';

function dateMostRecentSortFunction(postA, postB) {
  var dateA = new Date(postA.fields.publishDate).getTime();
  var dateB = new Date(postB.fields.publishDate).getTime();
  return dateA < dateB ? 1 : -1;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default {
  components: {
    BlogSectionCard,
  },
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  computed: {
   sortedFilteredPosts() {
    var posts = this.$store.state.posts;

    console.log(this.tag);
    var filteredPosts = Array();
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].fields.tags.includes(this.tag)) {
        filteredPosts.push(posts[i]);
      }
    }

     return filteredPosts.slice().sort(dateMostRecentSortFunction);
   },
   capitalizedTag() {
     return capitalizeFirstLetter(this.tag);
   },
 },
};
</script>
