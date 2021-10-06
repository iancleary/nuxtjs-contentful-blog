import client from "~/plugins/contentful";

export const state = () => ({
  posts: null,
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updateTags: (state, tags) => {
    state.tags = tags;
  },
  updatePersons: (state, persons) => {
    state.persons = persons;
  },
};


export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost",
      });
      if (response.items.length > 0) commit("updatePosts", response.items);
    } catch (err) {
      console.error(err);
    }
  },
  async getTags({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost",
      });
      if (response.items.length > 0) {
        var _tags = Array();
        var posts = response.items;

        // var getKeys = function(obj) {
        //   var keys = [];
        //   for(var key in obj){
        //      keys.push(key);
        //   }
        //   return keys;
        // };

        // console.log(getKeys(posts[0].fields));
        // console.log(posts[0].fields.tags);


        for (let i = 0; i < posts.length; i++) {
            // console.log(i);
            // Define variable to check if undefined
            // var posts_tags = posts[i].fields.tags;
            // console.log(posts_tags);

            if (typeof(posts[i].fields.tags) != "undefined") {
              for (let j = 0; j < posts[i].fields.tags.length; j++) {
                // console.log(j);
                  var tag = posts[i].fields.tags[j];
                  if (!(_tags.includes(tag))) {
                      _tags.push(tag);
                  }
              }
            }

        }
        commit("updateTags", _tags);
      }
    } catch (err) {
      console.error(err);
    }
  },
  async getPersons({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "person",
      });
      if (response.items.length > 0) commit("updatePersons", response.items);
    } catch (err) {
      console.error(err);
    }
  },
};
