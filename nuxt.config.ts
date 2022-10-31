import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    app: {
        head: {
            title: 'Jiří Ferkl - Full-stack web developer',
            meta: [
                { name: 'description', content: 'I\'m open for new challenges! PHP, JavaScript, MySQL, Docker, GraphQL, Vue.js, React, DevOps, Nette..' },
                { name: 'og:type', content: 'website' },
                { name: 'og:url', content: 'https://jiriferkl.cz/' },
                { name: 'og:title', content: 'Jiří Ferkl - Full-stack web developer' },
                { name: 'og:description', content: 'I\'m open for new challenges! PHP, JavaScript, MySQL, Docker, GraphQL, Vue.js, React, DevOps, Nette..' },
                { name: 'og:image', content: '/ogimage.jpg' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:url', content: 'https://jiriferkl.cz/' },
                { name: 'twitter:title', content: 'Jiří Ferkl - Full-stack web developer' },
                { name: 'twitter:description', content: 'I\'m open for new challenges! PHP, JavaScript, MySQL, Docker, GraphQL, Vue.js, React, DevOps, Nette..' },
                { name: 'twitter:image', content: '/ogimage.jpg' },
            ]
        }
    },
})
