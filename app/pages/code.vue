<template>
  <div class="container mx-auto flex flex-col items-center px-10">
    <h1 class="text-4xl mb-4">Code</h1>
    <p class="text-xl mt-4 text-center">In the past I have worked mainly on commercial projects whose code I cannot show.</p>
    <p class="text-xl mt-4 text-center">However, I have several projects on my Github account that are public and serve as a demonstration of my work.</p>
    <h2 class="text-2xl my-6">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="border rounded shadow-md p-4" v-for="project in projects">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <a class="text-xl underline" :href="project.link" target="_blank">{{ project.title }} <font-awesome-icon icon="fa-solid fa-link" size="2xs" /></a>
          <div class="flex items-center pt-3 lg:pt-0">
            <img :src="img" v-for="img in project.images" class="h-8 mr-4">
          </div>
        </div>
        <p :class="{'mb-1': true, 'mt-3': index === 0}" v-for="(p, index) in project.paragraphs"><span v-html="p"></span></p>
      </div>
    </div>
    <h2 class="text-2xl my-6">Simple forks or merge requests</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="border rounded shadow-md p-4" v-for="project in simpleProjects">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <a class="text-xl underline" :href="project.link" target="_blank">{{ project.title }} <font-awesome-icon icon="fa-solid fa-link" size="2xs" /></a>
          <div class="flex items-center pt-3 lg:pt-0">
            <img :src="img" v-for="img in project.images" class="h-8 mr-4">
          </div>
        </div>
        <p :class="{'mb-1': true, 'mt-3': index === 0}" v-for="(p, index) in project.paragraphs"><span v-html="p"></span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          link: 'https://github.com/jiriferkl/nette-graphql-nuxt-example',
          title: 'Nette - Graphql - Nuxt example',
          images: [
              '/technologies/nette.png',
              '/technologies/graphql.svg',
              '/technologies/nuxt.svg',
          ],
          paragraphs: [
              'This is an example project that combines technologies like Nette, Graphql and Nuxt.',
              'On the backend I use technologies like <strong>Elasticsearch, RabbitMq, Maxwell, Nginx and PHP FPM</strong>. I also created a <strong>PHP code generator</strong> to make development as easy as possible.',
              'On the frontend I use technologies like <strong>Vue3, Tailwindcss and I18n module</strong> for translations.',
              'The web application runs in docker.',
          ],
        },
        {
          link: 'https://github.com/jiriferkl/jiriferkl.cz',
          title: 'jiriferkl.cz',
          images: [
              '/technologies/nuxt.svg',
              '/technologies/vuejs.png',
          ],
          paragraphs: [
              'This personal website is also on Github.',
              'It uses latest <strong>Nuxt 3</strong> but old API is still used.',
              'Latest API is used in the "Nette - Graphql - Nuxt example" project.',
              'The website also includes a <strong>serverless function to generate a pdf file</strong> from the "Resume" page.',
          ],
        }
      ],
      simpleProjects: [
        {
          link: 'https://github.com/Sanasport/Security',
          title: 'Sanasport/Security',
          images: [
              '/technologies/php.svg',
              '/technologies/nette.png',
          ],
          paragraphs: [
              'This is a fork of Arachne security library that fixes dependencies in composer, <strong>fixes tests</strong> and is now prepared for <strong>latest Nette and PHP</strong>.',
              'I made it to be sure it will work in our system in Sanasport. Future updates will be match easier because the tests are now working correctly.'
          ],
        },
        {
          link: 'https://github.com/Sanasport/SecurityVerification',
          title: 'Sanasport/SecurityVerification',
          images: [
              '/technologies/php.svg',
              '/technologies/nette.png',
          ],
          paragraphs: [
              'This is a fork of Arachne security library that fixes dependencies in composer, <strong>fixes tests</strong> and is now prepared for <strong>latest Nette and PHP</strong>.',
              'I made it to be sure it will work in our system in Sanasport. Future updates will be match easier because the tests are now working correctly.'
          ],
        },
        {
          link: 'https://github.com/Sanasport/Verifier',
          title: 'Sanasport/Verifier',
          images: [
              '/technologies/php.svg',
              '/technologies/nette.png',
          ],
          paragraphs: [
              'This is a fork of Arachne security library that fixes dependencies in composer, <strong>fixes tests</strong> and is now prepared for <strong>latest Nette and PHP</strong>.',
              'I made it to be sure it will work in our system in Sanasport. Future updates will be match easier because the tests are now working correctly.'
          ],
        },
      ],
    };
  }
}
</script>
