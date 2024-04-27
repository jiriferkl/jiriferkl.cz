<template>
  <div class="min-h-screen flex flex-col">
    <NavBar/>
    <slot/>
    <div id="backgroundDivider"></div>
  </div>
</template>

<script>
export default defineNuxtComponent ({
  head() {
    return {
      bodyAttrs: {
        class: 'body-background'
      }
    }
  }
});
</script>
