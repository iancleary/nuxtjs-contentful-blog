<template>
  <a
    role="button"
    href="{{ href }}"
    target="_blank"
    rel="noopener noreferrer"
    title="{{ title }}"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "#",
    },
    title: {
        type: String,
        default: "Placeholder Title",
    },
    text: {
        type: String,
        default: "Placeholder Title",
    },
  },
};
</script>
