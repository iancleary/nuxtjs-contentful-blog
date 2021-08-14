<template>
  <a
    role="button"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="toggle-theme"
    :title="title"
    :alt="title"
  >
    <!-- https://tailwindcss.com/docs/fill#usage -->
    <!-- eslint-disable-next-line -->
    <slot
      size="1.5x"
      class="fill-current text-white h-8 w-8" 
    />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>


.toggle-theme {
  background-color: transparent;
  border: 0;
  color: black;
  cursor: pointer;
}

.toggle-theme:hover {
    opacity: 0.8;
}

.toggle-theme:focus {
    outline: none;
}

</style>
