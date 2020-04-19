<template>
  <div class="overflow-x-hidden">
    <div class="projects container-inner mx-auto text-xl border-t border-gray-500 py-16 relative">
      <h2
        class="font-bold mb-6"
        id="projects"
      >
        Here are some of my projects:
      </h2>
      <!-- Consider moving each of these sections into a more detailed blog post, and keep only the project name on homepage (link to blog post) -->
      <div
        class="absolute right-0"
        style="top: 50px; transform: translate(100%) rotate(180deg)"
      >
        <svg
          width="170px"
          height="170px"
        >
          <use xlink:href="#dots-triangle" />
        </svg>
      </div>

      <ul class="text-lg sm:text-xl">
        <li class="checkmark mb-6">
          <div>Continuous Integration / Continuous Deployment</div>
          <div class="text-lg text-gray-600">
            My Python and Docker projects have CI/CD pipelines using Travis-CI.
            <br>Checkout my
            <g-link
              to="/blog/an-introduction-to-ci-cd-with-travis-ci-and-python/"
            >
              introduction to CI/CD with Travis CI and Python
            </g-link>blog post!
          </div>
        </li>
        <li class="checkmark mb-6">
          <div>Ubuntu Laptop and Desktop Setup</div>
          <div class="text-lg text-gray-600">
            <!-- Link -->
            <!-- Check out my notes at
              <a
                href="https://dev-notes.iancleary.me/local-computer/"
                target="_blank"
            >dev-notes.iancleary.me/local-computer</a>.-->
            <!-- Closing -->
            <!-- <br /> -->
            <!-- I currently use  -->
            <!-- Makefiles -->
            <a
              href="https://en.wikipedia.org/wiki/Makefile"
              target="_blank"
            >Makefiles</a> organize my installation scripts,
            <!-- Argos -->
            <a
              href="https://github.com/p-e-w/argos"
              target="_blank"
            >argos</a> creates my
            <a
              href="https://github.com/iancleary/gnome-extension"
              target="_blank"
            >custom GNOME Extensions</a>, and
            <!-- Yet Another Dotfile Manager -->
            Yet Another Dotfile Manager (
            <a
              href="https://yadm.io"
              target="_blank"
            >yadm.io</a>
            ) version controls my home directory.
            <!-- Infrastructure as code applies to my local setups.  -->

            <!-- <i>Note: Argos is similar to
              <a
                href="https://github.com/matryer/bitbar"
                target="_blank"
              >BitBar</a>
              for those familiar with that application for MacOS. "Argos supports many BitBar plugins without modifications, giving you access to a large library of well-tested scripts in addition to being able to write your own."
            </i>-->
          </div>
        </li>
        <li class="checkmark mb-6">
          <div>Open Source Dev Notes</div>
          <div class="text-lg text-gray-600">
            Check out my more detailed notes at
            <a
              href="https://wiki.iancleary.me/local-computer/"
              target="_blank"
            >wiki.iancleary.me/local-computer</a>.
            Make a pull request and/or use my setup as inspiration!
          </div>
        </li>
        <li class="checkmark mb-6">
          <div>Python Package Quickstart</div>
          <div class="text-lg text-gray-600">
            Checkout my python package template, using
            <a
              href="https://github.com/iancleary/pypackage"
              target="_blank"
            >cookiecutter gh:iancleary/pypackage</a>.
            <!-- I've been using Python regularly since 2015, around the time when I became interested in web frameworks.
              My first encounter was with
              <a
                href="https://flask.palletsprojects.com/"
                target="_blank"
              >Flask</a>, and I was hooked.
              After being exposed to web services,
              I investigated
              <a
                href="https://github.com/taoufik07/responder"
                target="_blank"
              >Responder</a> and really enjoyed the combination of concepts from Flask, Falcon, and Requests.
              After challenging myself to contribute to the community, I got
              <a
                href="https://github.com/taoufik07/responder/pull/306"
                target="_blank"
              >my first pull request merged</a> for implementing the
              <a
                href="https://github.com/OAI/OpenAPI-Specification/"
                target="_blank"
              >OpenAPI Specification's</a> Info object to improve Responder's optional
              information servers can provide to users. I've continued work on
              a Python package,
              <a
                href="https://github.com/iancleary/responder-base-classes"
                target="_blank"
              >responder_base_classes</a>, that expands upon their class based view concept and
              is avaliable on on
              <a
                href="https://pypi.org/project/responder-base-classes/"
                target="_blank"
            >pypi</a>. I've implemented test cases using Travis CI.-->
          </div>
        </li>
        <li class="checkmark mb-6">
          <div>Personal Jupyter Notebook Image</div>
          <div class="text-lg text-gray-600">
            I am familiar the Jupyter interactive computing environment. My
            <a
              href="https://github.com/iancleary/personal-notebook"
              target="_blank"
            >personal-notebook</a>
            is open source and on DockerHub, via
            <a
              href="https://hub.docker.com/r/iancleary/personal-notebook"
              target="_blank"
            >docker pull iancleary/personal-notebook</a>
            .
            <!-- I've been using Python regularly since 2015, around the time when I became interested in web frameworks.
              My first encounter was with
              <a
                href="https://flask.palletsprojects.com/"
                target="_blank"
              >Flask</a>, and I was hooked.
              After being exposed to web services,
              I investigated
              <a
                href="https://github.com/taoufik07/responder"
                target="_blank"
              >Responder</a> and really enjoyed the combination of concepts from Flask, Falcon, and Requests.
              After challenging myself to contribute to the community, I got
              <a
                href="https://github.com/taoufik07/responder/pull/306"
                target="_blank"
              >my first pull request merged</a> for implementing the
              <a
                href="https://github.com/OAI/OpenAPI-Specification/"
                target="_blank"
              >OpenAPI Specification's</a> Info object to improve Responder's optional
              information servers can provide to users. I've continued work on
              a Python package,
              <a
                href="https://github.com/iancleary/responder-base-classes"
                target="_blank"
              >responder_base_classes</a>, that expands upon their class based view concept and
              is avaliable on on
              <a
                href="https://pypi.org/project/responder-base-classes/"
                target="_blank"
            >pypi</a>. I've implemented test cases using Travis CI.-->
          </div>
        </li>
        <!-- <li class="checkmark mb-6">
            <div>Automation and AWS</div>
            <div class="text-lg text-gray-600">
              Prior to switching to Netlify for the deployments, this site was hosted
              using an Amazon Web Service's S3 bucket. Given my
              experience with python, I first graviated towards the boto3 package.
              Since taking
              <a
                href="https://www.udemy.com/course/automate-your-infrastructure-using-ansible-and-iac/"
                target="_blank"
              >DevOps: Automate your infrastructure using Ansible and IaC</a>,
              I have learned to embrace the right tool for the problem.
              Ansible is a much simpler and more tenable solution.
              I am now comfortable with Ansible playbooks and plan to continue to
              use them in my projects, when appropriate. Here is the
              <a
                href="https://github.com/iancleary/ansible-s3-static-website"
                target="_blank"
              >Ansible playbook previously used to deploy my site</a> -- feel free to use it as a template.
            </div>
        </li>-->
      </ul>
      <div
        class="absolute left-0"
        style="bottom: 50px; transform: translateX(-100%)"
      >
        <svg
          width="170px"
          height="170px"
        >
          <use xlink:href="#dots-triangle" />
        </svg>
      </div>
    </div>
    <!-- end projects -->
  </div>
</template>
