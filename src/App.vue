<template>
  <div id="app">
    <nav-bar :sections="sections" :name="name" :source_code_url="source_code_url"></nav-bar>
    <info-list :info_blocks="opening_info_blocks"></info-list>
    <!-- <span class="anchor" id="tech"></span> -->
    <!-- <tech-card :data=loadData></tech-card> -->
    <!-- <tech-card></tech-card> -->
    <span class="anchor" id="about"></span>
    <info-list :info_blocks="info_blocks"></info-list>
    <info-list :info_blocks="background_info_blocks"></info-list>
    <link-list :link_cards="source_cards"></link-list>
    
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
    </div> -->
    <span class="anchor" id="contact"></span>
    
    <link-list :link_cards="link_cards"></link-list>
    <footer-card :current_year="current_year" :name="name"></footer-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import InfoList from "@/components/InfoList.vue";
import LinkList from "@/components/LinkList.vue"
import FooterCard from "@/components/FooterCard.vue";
// import TechCard from "@/components/TechCard.vue"

var current_year = new Date().getFullYear()

export default {
  name: "app",
  components: {
    NavBar,
    InfoList,
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
          id:2,
          href: "#about",
          icon: "fas fa-user-astronaut",
          name: "About"
        },
        {
          id:3,
          href: "#contact",
          icon: "fas fa-envelope",
          name: "Contact"
        }
      ],
      opening_info_blocks: [
        {
          id: 1,
          opener: "Hello. Bonjour. Hola. Ciao. Hallo. Namaste. Olá. Salaam. Ni Hau. Nay Hoh.",
          // preposition: "with the help of my coworkers",
        }
      ],
      info_blocks: [
        {
          id: 1,
          opener: "By day",
          preposition: "with the help of my coworkers",
          point:
            "I am RF/Microwave Engineer working on \
                        electronics bound for outer space."
        },
        {
          id: 2,
          opener: "By night",
          preposition: "with the help of the community",
          point:
            "I am learning about web frameworks, \
                        open source development, and \
                        software engineering best practices."
        }
      ],
      background_info_blocks: [
        {
          id: 3,
          opener: "My formal education",
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
      source_cards: [
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
      ],
      link_cards: [
        {
          id: 3,
          url: "https://www.linkedin.com/in/ian-c-6566b22a/",
          icon: "fab fa-linkedin",
          message: "Say hello and let's talk about helping each other!",
          color: "bg-green-200"
        },
      ],
      
    };
  }
};
</script>
