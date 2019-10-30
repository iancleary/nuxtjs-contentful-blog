---
title: An introduction to CI/CD with Travis CI and Python
date: 2019-10-28
summary: Umm - excuse me, if you have a minute, would you please build, test, and (if it all goes well) deploy my code for me - thanks!  Oh, and if you don't mind, would you please email me the status of it right when you finish. No questions asked, the first time I ask you - thanks! You can now proclaim to the world that you've read my snarky opener about how I've come to appreciate CI/CD tooling, and you can learn why you should give it a try!
tags: ['travis-ci', 'python'] #, 'docker', 'aws', 'ansible']
---

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

Really though, I used Travis-CI first and am using it since I am familiar with it. I haven't done a detailed comparison of the tools and it fits the needs of simpler python CI/CD projects. You are free to use what you prefer, feel is right, or would like to start with. This article is not a comparison, but rather an introduction into the process.

There isn't a wrong option on your path to learning more about these tools and process. Where you start doesn't have to be where you are in the future.

> Start small and build up what you learn. Knowledge compounds and you'll marvel at where your at soon.

### Prerequisites

You should have basic knowledge about Github, Python, pytest, and how to use the [Terminal](https://www.linode.com/docs/tools-reference/tools/using-the-terminal/).  Knowledge of Pipenv (Pipfiles) and pytest is a plus, but not required.  CI/CD tools are a great way to learn both.  We will set up a Travis-CI account as well.

![background](./images/background.jpg)

-----

> In case you need a tune up on [YAML](https://en.wikipedia.org/wiki/YAML), here is a recommended link: 
> - [YAML Syntax, from Red Hat Ansible](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
>
> *Note: Ansible uses the YAML format, and is is another useful tool. A more detailed guide is an encouraged topic for another time.*

-----

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

-----

## Let's break each part down

```yaml
dist: xenial
```

**dist** is the Ubuntu Release codename, see: http://releases.ubuntu.com/. This is the base operating system used for the rest of workflow.

```yaml
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
```

**language** is the programming language used.

**cache** allows for package versions to be stored between runs, to speed up sequential builds.

**python** is a key for a sequence of python versions to perform builds against. Generally most CI tools use the latest bug release version for each minor version.  The build logs will tell you the specific versions.

**matrix** allows for modifications in the above build sequence.  In this case, the allow failures key is specifies a reference to the **python** sequence above, and has the value of `"nightly"`, meaning that that version is allowed to fail.  Think of it as early detection and future python development.  *Note: there are also development versions of each python version, such as `"3.8-dev"`.  These are used when python version are in release candidate or beta stages.

```yaml
install:
    - pip install pipenv --upgrade-strategy=only-if-needed
    - pipenv install --dev
```

**install** is the first section that is performed inside each of the build targets (virtual environments for each of the python versions above).  Each item in the sequence is executed **in order!**

In this example, we are using `pipenv` and a `Pipfile`.

Most Pipfiles have production dependencies and development dependencies. You will often find the packages required to run test cases or build documentation under the `dev-packages` section.  Below is an example:

```bash
[[source]]
name = "pypi"
url = "https://pypi.org/simple"
verify_ssl = true

[dev-packages]
mypy = "*"
black = "*"
jupyter = "*"
better-exceptions = "*"
pytest = "*"
pytest-cov = "*"
isort = "*"
flit = "*"
autoflake = "*"
mkdocs = "*"
mkdocs-material = "*"

[packages]
pydantic = "==0.32.2"
```

The command `pip install --dev` installs all packages under `[packages]` and `[dev-packages]`.  `pip install` would only install the  packages under `[packages]`.

----

> *Note: It is also common to use `pip` with a `requirements.txt` file, such as:*

```bash
pip install -r requirements.txt
```

### Optional aside about different virtual environment options

`Pipenv` has the advantage of providing a mechanism to install your packages into a virtual environment without another package.  There are many alternative - one simple alternaive is `venv`. 

A newer alternative is `poetry` (https://poetry.eustace.io/).  `poetry` aims to facilitate what both requirements.txt and Pipfiles do not bundle, and that is released dependencies when deploying to PyPi.  You will typically see `flit` and a `pyproject.toml` file, or a `setup.py` file with redundant depedency information.  That redundancy is what `poetry` is aiming to improve upon.

-----

## 1. Install a project template

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

-----

#### Where to go from here?

- Set up an account and start offloading and automating your testing

> You will not want to go back to your life before it!  
It is a real quality improvement!

#### What else can you automate (things to add to this article in some level of detail)

- Pypi publishing
- Docker image builds
- Amazon EC2 instance deployments

*This could just be links to more information or my demo repositories*
