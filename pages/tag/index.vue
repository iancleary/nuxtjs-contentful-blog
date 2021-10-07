<template>
  <div>
    <div class="mx-2 pt-10">
      <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Blog Post Tags
      </h2>
      <ul
        role="list"
        class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <a
          v-for="tag in tags"
          :key="tag.name"
          :href="tag.link"
          class="col-span-1 flex shadow-sm rounded-md"
        >
          <div class="flex items-center justify-center bg-green-600 w-16 text-white text-sm font-medium rounded-l-md">
            🏷️
          </div>
          <div class="flex-1 flex items-center justify-between bg-white hover:bg-green-600 hover:text-white rounded-r-md truncate">
            <div class="flex-1 px-4 py-2 text-sm truncate">
              <div
                class="text-gray-900 font-medium"
              >{{ tag.name }} </div>
              <!-- <p class="text-gray-500">
                {{ tag.members }} Posts
              </p> -->
            </div>
          </div>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default {
  layout: 'default',
  computed: {
    tags() {
        var tag_details = Array();
        var tags = this.$store.state.tags;
        for (let i = 0; i < tags.length; i++) {
          tag_details.push({
            "name": capitalizeFirstLetter(tags[i]),
            // "initials": tags[i].substring(0,2),
            "link": "/tag/" + tags[i],
            // "members": "TBD",
            // "c": 'bg-pink-600',
            });
        }
        // console.log(tag_details);
        return tag_details;
    },
  },
};

</script>
