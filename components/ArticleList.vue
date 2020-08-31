<template>
  <div class="blog-card">
    <ul class="text-lg sm:text-xl">
      <li
        v-for="article in articles"
        :key="article.id"
        class="py-4"
      >
        <div class="grid grid-cols-5 gap-4">
          <div class="col-span-1 ...">
            <span class="text-lg text-gray-600 text-bold">{{ article.readable_publish_date }}</span>
          </div>
          <div class="col-span-4 ...">
            <div class="font-bold">
              {{ article.title }}
            </div>
          </div>
          <div class="col-span-1 ..." />
          <div class="col-span-4 ...">
            <span class="text-md">{{ article.description }}</span>
          </div>
          <div class="col-span-1 ..." />
          <div class="col-span-4 ...">
            <a
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to my blog post on Dev.to's website"
            >Read more...</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array[Object],
      default: [
        {
          title: "Automating your desktop with Ansible",
          description:
            "Hello there, First off, I hope you are doing well 😊. When it comes to my laptop set up, I care a...",
          readable_publish_date: "May 3",
          tag_list: ["ansible", "desktop", "ubuntu", "gnome"],
          url:
            "https://dev.to/iancleary/automating-your-desktop-with-ansible-20jk",
          id: 322580,
        },
      ],
    },
  },
};
</script>

<style>
</style>
