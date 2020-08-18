<template>
  <a
    role="button"
    href="https://dev.to/iancleary"
    target="_blank"
    rel="noopener noreferrer"
    class="toggle-theme"
    title="Link to iancleary's DEV Profile"
  >
    <font-awesome-icon
      :icon="['fab', 'dev']"
      size="lg"
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
