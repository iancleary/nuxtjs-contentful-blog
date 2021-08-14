<template>
  <div class="flex items-center justify-center flex-wrap bg-black py-2">
    <span class="text-white">#BlackLivesMatter</span>
    <span class="pl-2 text-green">
      <external-link
        href="https://support.eji.org/give/153413/#!/donation/checkout"
        title="Support the Equal Justice Initiative"
        content="Support the Equal Justice Initiative"
      />
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
