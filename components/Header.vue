<template>
  <nav class="z-10">
    <BlackLivesMatter />
    <!-- This example requires Tailwind CSS v2.0+ -->
    <header class="bg-indigo-600">
      <nav
        class="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center">
            <a
              href="/"
              class="font-medium text-white"
              key="Home"
            >
              🏠 Home
            </a>
          </div>
          <div class="flex ml-10 space-x-2 items-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="invisible sm:visible"
            >
              <g id="triangles">
                <g id="darkGroup">
                  <path
                    id="dark1"
                    d="M51.9177 61.8227C53.1318 62.6113 53.1318 64.3887 51.9177 65.1773L27.5894 80.9789C26.2589 81.8432 24.5 80.8883 24.5 79.3017L24.5 47.6983C24.5 46.1117 26.2589 45.1568 27.5894 46.0211L51.9177 61.8227Z"
                    fill-opacity="0.7"
                  />
                  <path
                    id="dark2"
                    d="M40.4177 61.8227C41.6318 62.6113 41.6318 64.3887 40.4177 65.1773L16.0894 80.9789C14.7589 81.8432 13 80.8883 13 79.3017L13 47.6983C13 46.1117 14.7589 45.1568 16.0894 46.0211L40.4177 61.8227Z"
                    fill-opacity="0.7"
                  />
                </g>
                <g id="lightGroup">
                  <path
                    id="light1"
                    d="M40.4177 61.8227C41.6318 62.6113 41.6318 64.3887 40.4177 65.1773L16.0894 80.9789C14.7589 81.8432 13 80.8883 13 79.3017L13 47.6983C13 46.1117 14.7589 45.1568 16.0894 46.0211L40.4177 61.8227Z"
                    fill-opacity="0.7"
                  />
                </g>
              </g>
            </svg>
            <a
              href="/blog"
              class="font-medium text-white pr-2"
            >📚 Blog</a>
            <RssIcon />
          </div>
        </div>
      </nav>
    </header>
  </nav>
</template>

<script>
import BlackLivesMatter from '@/components/molecules/BlackLivesMatter.vue';
import RssIcon from '@/components/molecules/RssIcon.vue';

export default {
  components: {
      BlackLivesMatter,
      RssIcon,
  },
};
</script>

<style>

:root {
    /* --dark-color: #635bff;
    --light-color: #80e9ff; */
    --dark-color: #7B8794;
    --light-color: #9AA5B1;
}

svg {
    cursor: pointer;
}
#darkGroup {
    fill: var(--dark-color);
}
#lightGroup {
    fill: var(--light-color);
}

#dark1,
#light1,
#dark2 {
    transition: all 1s ease;
}

#dark2 {
    transform: translateX(-100%);
}

svg:hover #light1 {
    transform: translateX(20%);
}

svg:hover #dark1 {
    transform: translateX(40%);
    opacity: 0;
}

svg:hover #dark2 {
    transform: translateX(0%);
}


</style>
