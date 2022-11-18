<template>
  <div class="min-h-screen flex flex-col">
    <NavBar/>
    <slot/>
    <div id="backgroundDivider"></div>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'body-background'
    }
  }
};
</script>
