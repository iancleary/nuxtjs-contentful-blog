<template>
  <div class="container-inner mx-auto text-xl pb-16 sm:py-0 relative">
    <span
      id="projects"
    />
    <!-- Consider moving each of these sections into a more detailed blog post, and keep only the project name on homepage (link to blog post) -->
    <ul class="text-lg sm:text-xl">
      <li class="project-card">
        <div>Ubuntu Laptop and Desktop Setup</div>
        <div class="text-lg text-gray-600">
          I practice the Infrastructure as Code philosophy on my desktop configuration, using
          <a
            href="https://en.wikipedia.org/wiki/Makefile"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to the Wikipedia article on Makefiles"
          >Makefiles</a> 
          and
          <a
            href="https://www.ansible.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to ansible.com"
          >Ansible</a>.
          My work is released here 
          <a
            href="https://github.com/iancleary/ansible-desktop"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to my ansible desktop GitHub repository"
          >iancleary/ansible-desktop</a>.
        </div>
        <!-- <img src="https://img.shields.io/travis/com/iancleary/ansible-desktop/master.svg"></image> -->
      </li>
      <li class="project-card">
        <div>Python Package Quickstart</div>
        <div class="text-lg text-gray-600">
          Speed up your python package generation using my python package template
          <a
            href="https://github.com/iancleary/pypackage"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to my python cookiecutter GitHub repository"
          >cookiecutter gh:iancleary/pypackage</a>.
        </div>
      </li>
      <li class="project-card">
        <div>FastRF</div>
        <div class="text-lg text-gray-600">
          <a
            href="https://fastrf.iancleary.me/"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to FastRF's documentation"
          >FastRF.iancleary.me</a> is a project combining interests in Radio Frequency (RF) Microwave Engineering,
          Python Development, Web Servers, and Databases.
        </div>
      </li>

      <li class="project-card">
        <div>Personal Jupyter Notebook Image</div>
        <div class="text-lg text-gray-600">
          I am comfortable the Jupyter interactive computing environment. My
          <a
            href="https://github.com/iancleary/personal-notebook"
            rel="noopener noreferrer"
            target="_blank"
            title="Link to Personal Jupyter Notebook GitHub Repo"
          >personal-notebook</a>
          is open source and on DockerHub, via
          <a
            href="https://hub.docker.com/r/iancleary/personal-notebook"
            rel="noopener noreferrer"
            target="_blank"
            title="Link to Personal Jupyter Notebook Docker Hub Page"
          >docker pull iancleary/personal-notebook</a>
          .
        </div>
      </li>
    </ul>
    <!-- end projects -->
  </div>
</template>

<script lang="ts">

export default {

};

</script>
