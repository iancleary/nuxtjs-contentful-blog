<template>
  <div id="app">
    <nav-bar :sections="sections" :name="name" :source_code_url="source_code_url"></nav-bar>
    <!-- <span class="anchor" id="tech"></span> -->
    <!-- <tech-card :data=loadData></tech-card> -->
    <!-- <tech-card></tech-card> -->
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <!-- <div class="mx-6 bg-white p-4 my-8 rounded-lg shadow-xl pt-4 lg:items-center lg:h-auto">
      <h2>
        My hobbies
        <small>
          <span class="text-muted">
            include but are not limited
            to
          </span>
        </small>
      </h2>
      <p class="lead">
        Photography,
        <a href="https://vimeo.com/6919536" target="_blank">Underwater Hockey</a>,
        and hiking.
      </p>
    </div>-->
    <!-- <link-list :link_cards="source_cards"></link-list>
    <link-list :link_cards="link_cards"></link-list> -->
    <link-list :link_cards="all_cards"></link-list>
    <footer-card :current_year="current_year" :name="name"></footer-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LinkList from "@/components/LinkList.vue";
import FooterCard from "@/components/FooterCard.vue";
// import TechCard from "@/components/TechCard.vue"

var current_year = new Date().getFullYear();

var source_cards = [
        {
          id: 1,
          url: "https://github.com/iancleary",
          icon: "fab fa-github",
          message: "Code: From Ian, with love.",
          color: "bg-red-200"
        },
        {
          id: 2,
          url: "https://hub.docker.com/u/iancleary",
          icon: "fab fa-docker",
          message: "Docker: It will work on your system!",
          color: "bg-indigo-200"
        }
      ]
var link_cards = [
        {
          id: 3,
          url: "https://www.linkedin.com/in/ian-c-6566b22a/",
          icon: "fab fa-linkedin",
          message: "Say hello and let's talk about helping each other!",
          color: "bg-green-200"
        }
      ]

var all_cards = []
all_cards = all_cards.concat(source_cards)
all_cards = all_cards.concat(link_cards)

export default {
  name: "app",
  components: {
    NavBar,
    LinkList,
    FooterCard,
    // TechCard

  },
  data() {
    return {
      name: "Ian Cleary",
      current_year: current_year,
      source_code_url: "https://github.com/iancleary/personal-website",
      sections: [
        // {
        //   id:1,
        //   href: "#tech",
        //   icon: "fas fa-tools",
        //   name: "Tech"
        // },
        {
          id: 2,
          href: "welcome",
          icon: "fas fa-user-astronaut",
          name: "About"
        },
        {
          id: 3,
          href: "contact",
          icon: "fas fa-envelope",
          name: "Contact"
        }
      ],
      source_cards: source_cards,
      link_cards: link_cards,
      all_cards: all_cards
    };
  }
};
</script>
