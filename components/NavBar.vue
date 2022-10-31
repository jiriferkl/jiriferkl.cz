<template>
  <div class="p-4">
    <div class="flex flex-row justify-between items-center mb-1">
      <NuxtLink to="/"><img src="/logo.svg" alt="logo" class="h-6"></NuxtLink>
      <Nav class="hidden sm:block"/>
      <a @click.prevent="toggle = !toggle" class="block sm:hidden cursor-pointer"><font-awesome-icon icon="fa-solid fa-bars"/></a>
    </div>
    <Transition>
      <Nav v-show="toggle" class="sm:hidden flex flex-col overflow-hidden" />
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: max-height 0.5s ease;
}

.v-enter-to,
.v-leave-from{
  max-height: 96px;
}

.v-enter-from,
.v-leave-to {
  max-height: 0;
}
</style>
