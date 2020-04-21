<template>
  <div class="overflow-x-hidden border-t-2 border-green-700 ">
    <div class="container-inner mx-auto text-xl sm:py-0 relative">
      <span
        id="blog"
      />
      <div class="mt-8 md:mt-0">
        <div class="flex flex-col sm:flex-row justify-between items-center py-6">
          <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
            <g-image
              src="~/assets/images/unDraw/shared_workspace_hwky.svg"
              alt="shared diverse workspace"
              immediate="true"
            />
          </div>
          <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
            <g-image
              src="~/assets/images/unDraw/code_review.svg"
              alt="Code review of user interface wireframe"
              immediate="true"
            />
          </div>
        </div>
      </div>
      
      <!-- Consider moving each of these sections into a more detailed blog post, and keep only the project name on homepage (link to blog post) -->
      <ul class="text-lg sm:text-xl">
        <li class="blog-card">
          <div class="text-lg text-gray-600">
            Checkout my
            <a
              href="https://dev.to/iancleary/an-introduction-to-ci-cd-with-travis-ci-and-python-3025"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to my first blog post on Dev.to's website"
            >
              introduction to Continuous Integration / Continuous Deployment (CI/CD) with Travis CI and Python
            </a>blog post!
          </div>
        </li>
      </ul>
    </div>
    <!-- end projects -->
  </div>
</template>

<script lang="ts">

export default {

};

</script>
