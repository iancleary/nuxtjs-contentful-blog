<template>
  <div id="app" class="bg-gray-700">
    <NavBar />
    <span class="anchor" id="tech"></span>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <info-list v-bind:info_blocks="info_blocks"></info-list>
    <span class="anchor" id="contact"></span>

    <div class="col md:row-lg-4 py-4 md:flex-shrink-0">
      <div class="row-lg-4 md:col-lg-4 m-6 lg:m-2">
        <div
          class="cursor-pointer max-w-sm mx-auto flow p-6 bg-red-200 hover:bg-gray-500 rounded-lg shadow-xl md:flex-shrink-0"
        >
          <a style="text-decoration : none" href="https://github.com/iancleary" target="_blank">
            <div class="link">
              <p>
                <i class="fab fa-github"></i>
              </p>
              <p class="italic text-base text-black-600 leading-normal">Code: From Ian, with love.</p>
            </div>
          </a>
        </div>
      </div>
      <div class="row-lg-4 md:col-lg-4 m-6 lg:m-2">
        <div
          class="cursor-pointer max-w-sm mx-auto flow p-6 bg-indigo-200 hover:bg-gray-500 rounded-lg shadow-xl"
        >
          <a
            style="text-decoration : none"
            href="https://hub.docker.com/u/iancleary"
            target="_blank"
          >
            <div class="link">
              <p>
                <i class="fab fa-docker"></i>
              </p>
              <p
                class="italic text-base text-black-600 leading-normal"
              >Docker: It will work on your system!</p>
            </div>
          </a>
        </div>
      </div>
      <div class="row-lg-4 md:col-lg-4 m-6 lg:m-2">
        <div
          class="cursor-pointer max-w-sm mx-auto flow p-6 bg-green-200 hover:bg-gray-500 rounded-lg shadow-xl"
        >
          <a
            style="text-decoration : none"
            href="https://www.linkedin.com/in/ian-c-6566b22a/"
            target="_blank"
          >
            <div class="link">
              <p>
                <i class="fab fa-linkedin"></i>
              </p>
              <div
                class="italic text-base text-black-600 leading-normal"
              >Say hello and let's talk about helping eachother!</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <span class="anchor" id="about"></span>

    <!-- 
        ==================================================
        About Me
        ================================================== 
    -->
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

    <!-- FOOTER -->
    <footer class="bg-indigo-300 p-4 mb-8 mx-6 rounded-lg shadow-xl lg:items-center">
      <div class="block lg:flex">
        <div class="text-sm lg:flex-grow">
          <div class="md:block mt-2 lg:inline-block text-gray mr-4">&copy; 2019 Ian Cleary</div>
          <div
            class="md:block mt-2 lg:inline-block text-gray mr-4"
          >Be kind &middot; Be safe &middot; Stay hydrated</div>
        </div>
        <div class="rounded-lg">
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          >Back to Top</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";
import InfoList from "@/components/InfoList.vue";

export default {
  name: "app",
  components: {
    NavBar,
    InfoList
  },
  data() {
    return {
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
          opener: "By day",
          preposition: "with the help of cappucinos",
          point:
            "I am RF/Microwave Engineer working on \
                        electronics bound for outer space."
        },
        {
          id: 4,
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
      ]
    };
  }
};
</script>
