export default async ({ store }) => {
    await store.dispatch("getProjects");
  };
