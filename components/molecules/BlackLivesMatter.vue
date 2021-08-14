<template>
  <div class="flex items-center justify-center flex-wrap bg-black py-2">
    <span class="text-white">#BlackLivesMatter</span>
    <span class="pl-2 text-green">
      <external-link
        link="https://support.eji.org/give/153413/#!/donation/checkout"
        alt="Link to Support the Equal Justice Initiative on eji.org"
      >
        Support the Equal Justice Initiative
      </external-link>
    </span>
  </div>
</template>

<script>
import ExternalLink from '@/components/atoms/ExternalLink.vue';

export default {
  components: {
    ExternalLink,
  },
};
</script>
