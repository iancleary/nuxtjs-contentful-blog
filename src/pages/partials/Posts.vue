<template>
  <div class="pt-2">
    <div class="container-inner mx-auto text-xl sm:py-0 relative">
      <span id="blog" />
      <section v-if="errored">
        <div
          class="blog-card"
        >
          We're sorry, we're not able to retrieve Ian's blog articles at the moment, please try back later.
        </div>
      </section>

      <section v-else>
        <div v-if="loading">
          Loading...
        </div>

        <div v-else>
          <ArticleList :articles="info" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>

// import ArticleCard from '@/components/ArticleCard.vue';
import ArticleList from '@/components/ArticleList.vue';

import axios from 'axios';

export default {
  components: {
    // ArticleCard,
    ArticleList,
  },
  data () {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  mounted () {
    axios
      .get('https://dev.to/api/articles?username=iancleary')
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};

</script>
