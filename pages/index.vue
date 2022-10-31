<template>
  <div class="flex justify-center items-center">
    <div class="flex flex-col items-center p-2 z-10">
      <h1 class="text-4xl mb-3">Jiří Ferkl</h1>
      <h2 class="text-3xl mb-3">Full-stack web developer</h2>
      <p class="text-xl text-center font-light">Build your next application with me! I have more then {{ getExperienceYears() }} years of professional experience with web development.</p>
      <NuxtLink class="bg-blue-600 hover:bg-blue-500 text-white px-5 py-1.5 rounded-lg mt-6" to="/resume">See my CV!</NuxtLink>
      <span class="my-1">or</span>
      <div>
        <a href="https://www.linkedin.com/in/jiriferkl" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="2x"/>
        </a>
        <div class="block md:hidden absolute w-screen left-0">
          <div class="grid grid-cols-5 gap-4 place-items-center pt-4">
            <div class="col-span-1">
              <img class="h-5" src="technologies/vuejs.png">
            </div>
            <div class="col-span-1">
              <img class="h-5" src="technologies/nuxt.svg">
            </div>
            <div class="col-span-1">
              <img class="h-5" src="technologies/reactjs.svg">
            </div>
            <div class="col-span-1">
              <img class="h-5" src="technologies/graphql.svg">
            </div>
            <div class="col-span-1">
              <img class="h-5" src="technologies/php.svg">
            </div>
            <div class="col-span-1"></div>
            <div class="col-span-1">
              <img class="h-5" src="technologies/docker.png">
            </div>
            <div class="col-span-1">
              <img class="h-5" src="technologies/nette.png">
            </div>
            <div class="col-span-1">
              <img class="h-5" src="technologies/mysql.png">
            </div>
            <div class="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:block absolute w-screen max-w-screen-2xl z-0">
      <div class="grid gap-x-4 gap-y-16 grid-cols-10 place-items-center">
        <!-- row -->
        <div class="col-span-3"></div>
        <div class="col-span-1">
          <img class="h-10" src="technologies/vuejs.png">
        </div>
        <div class="col-span-2"></div>
        <div class="col-span-1">
          <img class="h-10" src="technologies/docker.png">
        </div>
        <div class="col-span-3"></div>

        <!-- row -->
        <div class="col-span-1"></div>
        <div class="col-span-1">
          <img class="h-10" src="technologies/nuxt.svg">
        </div>
        <div class="col-span-6"></div>
        <div class="col-span-1">
          <img class="h-10" src="technologies/php.svg">
        </div>
        <div class="col-span-1"></div>

        <!-- row -->
        <div class="col-span-2 mt-8"></div>
        <div class="col-span-1 mt-8">
          <img class="h-10" src="technologies/reactjs.svg">
        </div>
        <div class="col-span-4 mt-8"></div>
        <div class="col-span-1 mt-8">
          <img class="h-10" src="technologies/nette.png">
        </div>
        <div class="col-span-2 mt-8"></div>

        <!-- row -->
        <div class="col-span-3"></div>
        <div class="col-span-1">
          <img class="h-10" src="technologies/graphql.svg">
        </div>
        <div class="col-span-2"></div>
        <div class="col-span-1">
          <img class="h-10" src="technologies/mysql.png">
        </div>
        <div class="col-span-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getExperienceYears() {
      return (new Date()).getFullYear() - 2015;
    }
  }
}
</script>
