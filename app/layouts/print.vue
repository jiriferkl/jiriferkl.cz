<template>
  <slot/>
</template>

<script>
export default defineNuxtComponent ({
  head() {
    return {
      bodyAttrs: {
        class: ''
      }
    }
  }
});
</script>
