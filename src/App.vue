<template>
  <div id="app">
    <nav-bar :sections="sections" :name="name" :source_code_url="source_code_url"></nav-bar>
    <span class="anchor" id="tech"></span>
    <!-- <tech-card :data=loadData></tech-card> -->
    <!-- <tech-card></tech-card> -->
    <info-list :info_blocks="info_blocks"></info-list>
    <span class="anchor" id="contact"></span>
    <link-list :link_cards="link_cards"></link-list>
    <span class="anchor" id="about"></span>
    <div class="mx-6 bg-white p-4 my-8 rounded-lg shadow-xl pt-4 lg:items-center lg:h-auto">
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
    </div>
    <footer-card></footer-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import InfoList from "@/components/InfoList.vue";
import LinkList from "@/components/LinkList.vue"
import FooterCard from "@/components/FooterCard.vue";
import TechCard from "@/components/TechCard.vue"

export default {
  name: "app",
  components: {
    NavBar,
    InfoList,
    LinkList,
    FooterCard,
    TechCard
  },
  data() {
    return {
      name: "Ian Cleary",
      source_code_url: "https://github.com/iancleary/iancleary.me",
      sections: [
        {
          id:1,
          href: "#tech",
          icon: "fas fa-tools",
          name: "Tech"
        },
        {
          id:2,
          href: "#contact",
          icon: "fas fa-envelope",
          name: "Contact"
        },
        {
          id:3,
          href: "#about",
          icon: "fas fa-user-astronaut",
          name: "About"
        }
      ],
      info_blocks: [
        {
          id: 1,
          opener: "By day",
          preposition: "with the help of cappucinos",
          point:
            "I am RF/Microwave Engineer working on \
                        electronics bound for outer space."
        },
        {
          id: 2,
          opener: "By night",
          preposition: "with the help of the community",
          point:
            "I am learning about Python Web Frameworks, \
                        open source development, and \
                        software engineering best pratices."
        },
        {
          id: 3,
          opener: "My education",
          preposition: "with the help of classmates, friends, and parents",
          point:
            "I graduated from the University of Michigan's College of Engineering cum laude \
                        (B.S.E. Electrical Engineering, class of 2013). \
                        I moved to Phoenix, AZ to start my career with Viasat as an \
                        RF/Microwave Engineer. While working full-time, I got my \
                        M.S.E. in Electrical Engineering in the spring of 2017, \
                        with a focus on wireless communication systems. \
                        However, within my course of study, \
                        I took classes in System Engineering, Design of Experiments, \
                        VLSI, and a course on pico-satellite design."
        }
      ],
      link_cards: [
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
        },
        {
          id: 3,
          url: "https://www.linkedin.com/in/ian-c-6566b22a/",
          icon: "fab fa-linkedin",
          message: "Say hello and let's talk about helping eachother!",
          color: "bg-green-200"
        },
      ],
      
    };
  }
};
</script>
