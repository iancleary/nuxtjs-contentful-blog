<template>
  <div class="container-inner mx-auto text-xl pb-16 sm:py-0 relative">
    <span
      id="projects"
    />
    <!-- Consider moving each of these sections into a more detailed blog post, and keep only the project name on homepage (link to blog post) -->
    <ul class="text-lg sm:text-xl relative">
      <li>
        <project-card
          repoName="ansible-desktop"
          :showGitHubCI="false"
          :gitHubWorkflows="onlyTestWorkflow"
          title="Ubuntu Desktop Configuration"
        />
      </li>
      <li>
        <project-card
          repoName="pypackage"
          :showGitHubCI="false"
          title="Python Package Quickstart"
          :descriptionHtml="pypackageDescriptionHtml"
        />
      </li>
      <li>
        <project-card
          repoName="fastrf"
          :showGitHubCI="false"
          title="RF Systems Design Server"
          :descriptionHtml="fastrfDescriptionHtml"
        />
      </li>
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
