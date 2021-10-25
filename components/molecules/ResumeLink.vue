<template>
  <div>
    <external-link
      link="https://assets.ctfassets.net/b4dlpmwrdw4v/4f2HV8YDADVfEXrXYhcX5H/8087ede89c94932235650975f6159da7/IanClearyResume2021.pdf"
      alt="Ian Cleary's Resume as a PDF"
      css="border-2 border-gray-500 m-2 p-4 rounded-full font-bold text-copy-primary"
    >
      Download CV
    </external-link>
  </div>
</template>

<script>
import ExternalLink from '../atoms/ExternalLink.vue';

export default {
  components: {
    ExternalLink,
  },
};
</script>
