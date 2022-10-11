<template>
  <div class="mb-5">
    <div class="flex">
      <div class="p-5 w-32 sm:w-48 h-24 flex justify-center">
        <img :src="logo" class="object-scale-down">
      </div>
      <div>
        <p class="text-base font-semibold">{{ position }}</p>
        <p class="text-base font-light"><a :href="url" target="_blank">{{ company }}</a></p>
        <p class="text-sm font-light text-slate-500">{{ years }}</p>
        <p class="text-sm font-light text-slate-500">{{ place }}</p>
      </div>
    </div>
    <div class="flex flex-wrap px-5 mb-2">
      <span class="font-light text-sm text-slate-500 mr-3" v-for="badge in badges">#{{ badge }}</span>
    </div>
    <div class="px-5 text-sm text-justify">
      <p class="pb-2 paragraph" v-for="paragraph in description" v-html="paragraph"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    years: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
    badges: {
      type: Array,
      required: true,
    },
    url: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
.paragraph a {
  font-weight: bold;
  text-decoration: underline dotted;
}
</style>
