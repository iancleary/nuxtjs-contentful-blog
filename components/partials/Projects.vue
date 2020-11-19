<template>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl text-copy-primary leading-9 tracking-tight font-extrabold text-white-900 sm:text-4xl sm:leading-10">
        Some of my projects
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
        This is a portfolio of options I am exploring, learning, and sharing here with you.
      </p>
    </div>
    <span
      id="projects"
    />
    <!-- Consider moving each of these sections into a more detailed blog post, and keep only the project name on homepage (link to blog post) -->
    <ul class="text-lg sm:text-xl space-y-6 pt-6 relative">
      <li>
        <project-card
          repoName="ansible-desktop"
          :showGitHubCI="false"
          :gitHubWorkflows="testAndLintWorkflows"
          title="Ubuntu Desktop Configuration"
        />
      </li>
      <!-- <li>
        <project-card
          repoName="pypackage"
          :showGitHubCI="false"
          title="Python Package Quickstart"
          :descriptionHtml="pypackageDescriptionHtml"
        />
      </li> -->
      <!-- <li>
        <project-card
          repoName="fastrf"
          :showGitHubCI="false"
          title="RF Systems Design Server"
          :descriptionHtml="fastrfDescriptionHtml"
        />
      </li> -->
      <li>
        <project-card
          repoName="dockerfiles"
          :showGitHubCI="false"
          :gitHubWorkflows="onlyPublishWorkflow"
          title="Dockerfiles"
          :descriptionHtml="dockerfilesDescriptionHtml"
        />
      </li>
    </ul>
    <!-- end projects -->
  </div>
</template>

<script>

import ProjectCard from '@/components/ProjectCard.vue';

export default {
  components: {
      ProjectCard,
  },
  data: function () {
    return {
      onlyTestWorkflow: ["Test"],
      onlyPublishWorkflow: ["Publish"],
      testAndLintWorkflows: ["Test", "Lint"],
      pypackageDescriptionHtml: `
            Speed up your python package generation using my python package template
            <a
              href="https://github.com/iancleary/pypackage"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to my python cookiecutter GitHub repository"
            >cookiecutter gh:iancleary/pypackage</a>.`,
        fastrfDescriptionHtml: `
            <a
              href="https://fastrf.iancleary.me/"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to FastRF's documentation"
            >FastRF</a> combines interests in Radio Frequency (RF) Microwave Engineering,
            Python Development, Web Servers, and Databases.`,
        ansibleDesktopDescriptionHtml: `
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
            `,
        dockerfilesGitHubWorkflows: ["Publish"],
        dockerfilesDescriptionHtml: `
          I am comfortable the Jupyter interactive computing environment. My
          <a
            href="https://github.com/iancleary/dockerfiles/tree/master/notebook"
            rel="noopener noreferrer"
            target="_blank"
            title="Link to Jupyter Notebook GitHub Repo"
          >personal-notebook</a>
          is open source and on DockerHub, via
          <a
            href="https://hub.docker.com/r/iancleary/notebook"
            rel="noopener noreferrer"
            target="_blank"
            title="Link to Personal Jupyter Notebook Docker Hub Page"
          >docker pull iancleary/notebook</a>
          .`,
    };
},
};

</script>
