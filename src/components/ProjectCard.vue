<template>
  <div class="project-card">
    <a
      v-if="showTravisCI"
      class="ci-badge-inset"
      :href="'https://travis-ci.com/'+ userName +'/'+ repoName"
      target="_blank"
    >
      <img
        :src="'https://travis-ci.com/'+ userName + '/' + repoName + '.svg?branch=main'"
        :alt="repoName +' repo CI Status'"
      >
    </a>
    <ul
      v-if="showGitHubCI"
      class="ci-badge-inset space-y-4 md:space-x-4 sm:flex md:space-y-0"
    >
      <li
        v-for="gitHubWorkflow in gitHubWorkflows"
        :key="gitHubWorkflow"
      >
        <a
          :href="'https://github.com/'+ userName +'/'+ repoName +'/actions?query=workflow%3A' + gitHubWorkflow"
          target="_blank"
        >
          <img
            :src="'https://github.com/'+ userName +'/'+ repoName +'/workflows/'+ gitHubWorkflow +'/badge.svg'"
            :alt="repoName +' repo '+ gitHubWorkflow +' Status'"
          >
        </a>
      </li>
    </ul>
    <!-- eslint-disable -->
    <div class="break-normal w-2/3 pb-2">
      {{ title }}
    </div>
    <span class="text-lg text-gray-600" v-html="descriptionHtml" />
    <!-- eslint-enable -->
  </div>
</template>

<script>

export default {
    props: {
        showTravisCI: {
            type: Boolean,
            default: false,
        },
        showGitHubCI: {
            type: Boolean,
            default: false,
        },
        gitHubWorkflows: {
            type: Array[String],
            default: () => ["Test", "Publish"],
        },
        userName: {
            type: String,
            default: "iancleary",
        },
        repoName: {
            type: String,
            default: "pypackage",
        },
        title: {
            type: String,
            default: "Project Title",
        },
        descriptionHtml: {
            type: String,
            default: `<div class="text-lg text-gray-600">
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
                        </div>`,
        },
    },
};


</script>

<style>
.ci-badge-inset {
  /* @apply absolute; */
  @apply justify-center;
  @apply pr-6;
  @apply pt-0;
}
</style>
