<template>
  <div class="relative pt-16">
    <div class="relative sm:px-6 lg:px-8">
      <div class="text-lg max-w-xlg mb-6 p-6 bg-gray-100 rounded-lg shadow-lg">
        <p class="text-center leading-6 text-gray-500 font-semibold tracking-wide uppercase">
          Introducing
        </p>
        <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10">
          {{ post.fields.title }}
        </h1>
        <div
          class="image w-full rounded-lg"
          :style="
            `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
          "
        />
        <!-- eslint-disable -->
        <article class="prose prose-lg max-w-full text-gray-800 pb-4" v-html="$md.render(post.fields.body)"/>
        <!-- eslint-enable -->
        <div class="border-t-2 border-gray-700">
          <script
            src="https://utteranc.es/client.js"
            repo="icancclearynow/nuxtjs-contentful-blog"
            issue-term="pathname"
            label="utterances"
            theme="github-light"
            crossorigin="anonymous"
            async
          />
        </div>
        <p class="py-4 flex justify-between">
          <nuxt-link
            exact
            to="/blog"
          >
            📚 Back to Blog
          </nuxt-link>

          <nuxt-link
            exact
            to="#"
          >
            Back to Top 🔝
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  dir: {
    blog: 'blog',
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  head() {
    return {
      title: this.post.fields.author.fields.name + " - " + this.post.fields.title,
    };
  },
  computed: {
    post() {
      let post = this.$store.state.posts.filter(
        (el) => el.fields.slug === this.slug,
      );
      return post[0];
    },
  },
};
</script>

<style>
.back {
  margin-top: 20px;
}
.image {
  width: 100%;
  height: 300px;
  margin: 30px 0;
  background-size: 100% auto !important;
}

.ul {
  @apply list-disc
}

</style>
