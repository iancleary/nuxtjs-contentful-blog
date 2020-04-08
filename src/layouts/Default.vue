<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link
          class="nav__link"
          to="/"
        >
          Home
        </g-link>
        <g-link
          class="nav__link"
          to="/about"
        >
          About
        </g-link>
      </nav>
    </header>
    <transition
      name="fade"
      appear
    >
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

<script lang="ts">
  export default {};
</script>


<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>
