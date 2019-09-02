<template>
  <header>
    <nav class="mx-6 bg-indigo-300 p-4 my-8 rounded-lg shadow-xl pt-4 lg:items-center lg:h-auto">
      <div class="flex items-center flex-shrink-0 font-serif text-gray-700 ck mr-6">
        <span class="font-semibold text-xl tracking-tight">Ian Cleary</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#tech"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-white mr-4"
          >
            <i class="fas fa-tools"></i> Tech
          </a>
          <a
            href="#contact"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-white mr-4"
          >
            <i class="fas fa-envelope"></i> Contact
          </a>
          <a
            href="#about"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-white"
          >
            <i class="fas fa-user-astronaut"></i> About
          </a>
        </div>
        <div>
          <a
            href="https://github.com/iancleary/iancleary.me"
            target="_blank"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          >Source Code</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
  }
};
</script>