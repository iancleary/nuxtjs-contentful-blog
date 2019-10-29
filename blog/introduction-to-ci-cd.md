---
title: An introduction to CI/CD with Travis CI and Python
date: 2019-10-28
summary: Umm - excuse me, if you have a minute, would you please build, test, and (if it all goes well) deploy my code for me - thanks!  Oh, and if you don't mind, would you please email me the status of it right when you finish. No questions asked, the first time I ask you - thanks! You can now proclaim to the world that you've read my snarky opener about how I've come to appreciate CI/CD tooling, and you can learn why you should give it a try!
tags: ['travis-ci', 'python'] #, 'docker', 'aws', 'ansible']
---

![background](./images/background.jpg)

I first learned about Travis-CI through venturing out into GitHub to checkout several open source projects. I've seen how they have continuous integration workflows set up test their code on overy commit, branch, and pull request.
> That seemed so convenient so I went off to try it myself.  I've documented what I've learned below to help get you started!  It's a community for everyone.

### Why Travis-CI?

- **Python Community on GitHub** - support for all python3 verions.
- **Choose your testing framework** - Use it with any popular testing framework.
- **Free for open source projects** - Zero cost for new open source users.

### Why not Circle-CI, Gitlab-CI, or GitHub actions?

- **Circle CI** - seems to have a little saner syntax and finer configuration.
- **Gitlab** - open source where the others are closed source
- **GitHub Actions** - newer and native to GitHub (if you host your code there)

Really though, I used Travis-CI first and am using it since I am familiar with it. I haven't done a detailed comparison of the tools and it fits the needs of simpler python CI/CD projects. You are free to use what you prefer, feel is right, or would like to start with. There isn't a wrong option on your path to learning more about these tools and process. Where you start doesn't have to be where you are in the future.

> Start small and build up what you learn. Knowledge compounds and you'll marvel at where your at soon.

### Prerequisites

You should have basic knowledge about Github, Python, pytest, and how to use the [Terminal](https://www.linode.com/docs/tools-reference/tools/using-the-terminal/).  Knowledge of Pipenv (Pipfiles) and pytest is a plus, but not required.  CI/CD tools are a great way to learn both.  We will set up a Travis-CI account as well.

![background](./images/background.jpg)

**Lets start with the YAML configuration file!**

```yaml
# .travis.yml

dist: xenial

language: python

cache: pip

python:
    - "3.6"
    - "3.7"
    - "3.8"
    - "nightly"

matrix:
    allow_failures:
        - python: "nightly"

install:
    - pip install pipenv --upgrade-strategy=only-if-needed
    - pipenv install --dev

script:
    - bash scripts/test.sh

after_script:
    - bash <(curl -s https://codecov.io/bash)
```

## What is going on here

Explain in more detail


### 1. Install a project template

Using python's cookiecutter package for a template:

```bash

pip install --user cookiecutter
# make sure your path finds --user installs

## add `export PATH="$HOME/.local/bin:$PATH"` 
## to your ~/.bashrc, ~/.zshrc file on linux
```

### 2. Create a Python project

```bash
cookiecutter https://github.com/iancleary/pypackage
# For the sake of brevity, repos on GitHub can just use the 'gh' prefix`
cookiecutter gh:iancleary/pypackage
````

### 3. Next steps

I will finish the rest of this I promise 😬

### 4. Happy coding 🎉🙌

----

#### What else can you automate (things to add to this article in some level of detail)

- Pypi publishing
- Docker image builds
- Amazon EC2 instance deployments
