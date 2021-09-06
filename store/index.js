import client from "~/plugins/contentful";

export const state = () => ({
  posts: null,
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updatePersons: (state, persons) => {
    state.persons = persons;
  },
  updateProjects: (state, projects) => {
    state.projects = projects;
  },
};


export const actions = {
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
  async getProjects({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "project",
      });
      if (response.items.length > 0) commit("updateProjects", response.items);
    } catch (err) {
      console.error(err);
    }
  },
};
