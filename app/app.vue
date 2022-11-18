<template>
  <NuxtLayout>
    <NuxtPage class="grow"/>
  </NuxtLayout>
</template>

<style>
.body-background {
  background: url("/mountains.svg") no-repeat center bottom;
  background-size: auto 50vh;
}

#backgroundDivider {
  height: 52vh;
}

@media only screen and (min-width: 768px) {
  #backgroundDivider {
    height: 10vh;
  }
}

@media only screen and (min-width: 768px) and (min-height: 500px) {
  #backgroundDivider {
    height: 20vh;
  }
}

@media only screen and (min-width: 768px) and (min-height: 600px) {
  #backgroundDivider {
    height: 30vh;
  }
}

@media only screen and (min-width: 768px) and (min-height: 700px) {
  #backgroundDivider {
    height: 40vh;
  }
}

@media only screen and (min-width: 768px) and (min-height: 750px) {
  #backgroundDivider {
    height: 45vh;
  }
}

@media only screen and (min-width: 768px) and (min-height: 800px) {
  #backgroundDivider {
    height: 50vh;
  }
}

@media only screen and (min-aspect-ratio: 7/4) {
  .body-background {
    background-size: 100vw 50vh;
  }
}

@media only print {
  body {
    font-family: "Segoe UI", sans-serif;
  }
}
</style>
