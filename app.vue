<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <NuxtPage class="grow" />
    <div id="backgroundDivider"></div>
  </div>
</template>

<style>
body {
  background: url("mountains.svg") no-repeat center bottom;
  background-size: auto 50vh;
}

#backgroundDivider {
  height: 52vh;
}

@media only screen and (min-width: 1728px) {
  body {
    background-size: 100vw 50vh;
  }
}
</style>
