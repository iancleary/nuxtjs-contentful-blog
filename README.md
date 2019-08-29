# iancleary.me
Personal website code with no trackers, no cookies, and only information recorded that is about me.

I built this website with Tailwind CSS, D3.js, and deploy to an AWS S3 Bucket using an ansible [role](ansible/roles/deploy-website-s3/README.md) and an ansible [playbook](ansible/main.yml) executed [localhost](ansible/deploy.sh).

Dependencies
------------
* [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
* [Tailwind CSS](https://tailwindcss.com/docs/installation)

## Attributions
### See [Authors.md](AUTHORS.md) for total list
- [Tech Stack D3.js Design](https://github.com/trongthanh/techstack/) inspiration from Nau Studio
- [Ansible playbook](https://github.com/dmitri-lerko/ansible-jekyll) (I've learned how much simpler of a solution this is than using the s3 boto python interface)