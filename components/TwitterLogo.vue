<template>
  <a
    role="button"
    href="https://twitter.com/icancclearynow"
    target="_blank"
    rel="noopener noreferrer"
    class="toggle-theme"
    title="Link to my Twitter Profile"
  >
    <fa
      :icon="['fab', 'twitter']"
    />
  </a>
</template>

<script>
</script>

<style>
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
}

.toggle-theme:hover {
    opacity: 0.8;
}

.toggle-theme:focus {
    outline: none;
}

</style>
