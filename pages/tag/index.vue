<template>
  <div>
    <LazyHydrate when-idle>
      <!-- <div
        v-for="post in posts"
        :key="post.fields.slug"
      >
        {{ getKeys(posts) }}
      </div> -->
      <div>
        {{ tags }}
      </div>
    </LazyHydrate>
  </div>
</template>

<script>

import LazyHydrate from 'vue-lazy-hydration';



export default {
  components: {
    LazyHydrate,
  },
  layout: 'default',
  computed: {
    // posts() {
    //     return this.$store.state.posts;
    // },
    tags() {
        var tags = [];
        var posts = this.$store.state.posts;
        for (let i = 0; i < posts.length; i++) {
            for (let j = 0; j < posts.fields.tags.length; j++) {
                tag = posts[i].fields.tags[j];
                if (tags.include(tag)) {
                    tags.push(tag);
                };
        };
        return tags;

    },
    fields() {
        var posts = this.$store.state.posts;

        var getKeys = function(obj) {
          var keys = [];
          for(var key in obj){
             keys.push(key);
          }
          return keys;
        };

        var _fields = [];
        for (var post in posts) {
            _fields.push(getKeys(post.fields));
        }
        return _fields;
    },
  },
methods: {
    // getKeys() = function(obj) {
    // var keys = [];
    // for(var key in obj){
    //     keys.push(key);
    // }
    // return keys;
    // };
    getKeys (obj) {
        var keys = [];
        for(var key in obj) {
            keys.push(key);
        }
        return keys;
    },
},
};

</script>
