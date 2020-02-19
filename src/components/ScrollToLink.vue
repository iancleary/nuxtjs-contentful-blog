<template>
    <a
      v-if="$route.path === '/'"
      :href="href"
      :v-scroll-to="anchor"
      class="justify-center text-copy-primary hover:text-gray-600"
    >{{text}}</a>
    <g-link v-else :to="href" class="justify-center text-copy-primary hover:text-gray-600">{{ text }}</g-link>
</template>
<script>
export default {
  props: ['href', 'anchor', 'text'],
}
</script>
