<template>
  <div id="resumeForPrint" class="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row border print:flex-row relative">
    <slot name="top"></slot>
    <div class="lg:w-1/4 bg-slate-800 text-white p-6">
      <div class="flex justify-center mt-5">
        <ResumeImage />
      </div>
      <h3 class="ml-1 mt-5 mb-2 font-bold border-b pb-1">Contact</h3>
      <div>
        <div v-for="(contact, index) in contactInfo" :key="index" class="flex mb-2">
          <div class="flex items-center justify-center w-7 pt-0.5">
            <font-awesome-icon :icon="contact.icon" />
          </div>
          <div class="flex items-center justify-center">
            <a :href="contact.url" target="_blank">{{ contact.shortUrl }}</a>
          </div>
        </div>
      </div>
      <h3 class="ml-1 mt-5 mb-2 font-bold border-b pb-1">Core</h3>
      <div class="ml-1 flex flex-wrap">
        <div v-for="(core, index) in coreSkills" :key="index" class="mr-2">
          {{ core }}
        </div>
      </div>
      <h3 class="ml-1 mt-5 mb-2 font-bold border-b pb-1">Languages</h3>
      <div class="flex flex-col">
        <div v-for="(language, index) in languages" :key="index" class="flex ml-1">
          <div class="w-16 font-semibold">
            {{ language.title }}
          </div>
          <div class="font-light">
            {{ language.level }}
          </div>
        </div>
      </div>
      <h3 class="ml-1 mt-7 mb-2 font-bold border-b pb-1">Skills</h3>
      <div>
        <div v-for="(skill, index) in skills" :key="index" class="flex">
          <div class="flex justify-center items-center w-8">
            <font-awesome-icon :icon="skill.icon" />
          </div>
          <div class="flex">
            {{ skill.title }}
          </div>
        </div>
      </div>
      <h3 class="ml-1 mt-7 mb-2 font-bold border-b pb-1">Hobbies</h3>
      <div class="grid grid-cols-2 gap-1.5">
        <div v-for="(hobby, index) in hobbies" :key="index" class="flex">
          <div class="flex justify-center items-center w-8">
            <font-awesome-icon :icon="hobby.icon" />
          </div>
          <div class="flex">
            {{ hobby.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:w-3/4 p-6">
      <div class="ml-3">
        <h1 class="text-3xl font-semibold">Jiří Ferkl</h1>
        <h2 class="text-2xl font-light">Full-stack web developer</h2>
      </div>
      <div>
        <h2 class="text-2xl m-3 border-b-2 border-black pb-0.5">Experience</h2>
        <ResumeCard
            v-for="item in experience"
            :logo="item.logo ?? '/companies/general.svg'"
            :position="item.position"
            :company="item.company"
            :years="item.years"
            :place="item.place"
            :description="item.description"
            :badges="item.badges"
            :url="item.url"
        />
      </div>
      <div>
        <h2 class="text-2xl m-3 border-b-2 border-black pb-0.5">Education</h2>
        <ResumeCard
            v-for="item in education"
            :logo="item.logo"
            :position="item.title"
            :company="item.subtitle"
            :years="item.years"
            :place="item.place"
            :description="item.description"
            :badges="item.badges"
            :url="item.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  async asyncData() {
    return {
      experience: await $fetch('/api/experience'),
      education: await $fetch('/api/education')
    }
  },
  data() {
    return {
      contactInfo: [
        {
          icon: "fa-solid fa-paperclip",
          url: "mailto:jiri.ferkl@protonmail.com",
          shortUrl: "jiri.ferkl@protonmail.com",
        },
        {
          icon: "fa-brands fa-linkedin-in",
          url: "https://www.linkedin.com/in/jiriferkl/",
          shortUrl: "jiriferkl",
        },
        {
          icon: "fa-brands fa-github",
          url: "https://github.com/jiriferkl",
          shortUrl: "jiriferkl",
        },
      ],
      coreSkills: [
        'PHP',
        'Nette',
        'MySQL',
        'Docker',
        'JS',
        'Vuejs',
        'React',
      ],
      languages: [
        {
          title: 'Czech',
          level: 'Native'
        },
        {
          title: 'English',
          level: 'B2/C1'
        }
      ],
      skills: [
        {
          icon: 'fa-solid fa-car',
          title: 'Driving licence'
        }
      ],
      hobbies: [
        {
          icon: 'fa-solid fa-person-swimming',
          title: 'Swimming'
        },
        {
          icon: 'fa-solid fa-baseball',
          title: 'Tennis'
        },
        {
          icon: 'fa-solid fa-person-hiking',
          title: 'Hiking'
        },
        {
          icon: 'fa-solid fa-plane-departure',
          title: 'Traveling'
        },
        {
          icon: 'fa-brands fa-playstation',
          title: 'Playstation'
        },
        {
          icon: 'fa-solid fa-tv',
          title: 'Movies'
        },
        {
          icon: 'fa-brands fa-spotify',
          title: 'Music'
        },
        {
          icon: 'fa-solid fa-people-group',
          title: 'Friends'
        }
      ]
    }
  }
})
</script>
