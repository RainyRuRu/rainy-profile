<script>
import { store, THEME_MODE } from '../store'

export default {
  data() {
    return {
      store,
      THEME_MODE
    }
  },
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
}
</script>

<template>
  <div class="w-full h-[80px] gap-[25px] px-[40px] flex flex-row justify-end items-center">
    <button type="button" @click="scrollToElement('skill')" class="hidden text-white font-medium text-[13px] sm:flex">SKILLS & TOOLS</button>
    <button type="button" @click="scrollToElement('experinece')" class="text-white font-medium text-[13px] hidden sm:flex">EXPERINECE</button>
    <button type="button" @click="scrollToElement('community')" class="text-white font-medium text-[13px] hidden sm:flex">COMMUNITY</button>
    <button type="button" @click="scrollToElement('education')" class="text-white font-medium text-[13px] hidden sm:flex">EDUCATION</button>
    <button type="button" @click="store.nextTheme()" class="theme-mode">
      <img v-if="store.themeMode === THEME_MODE.LIGHT" class="w-[35px] h-[35px]" src="../assets/sun.png" />
      <img v-if="store.themeMode === THEME_MODE.RAINY" class="w-[35px] h-[35px]" src="../assets/rain.png" />
      <img v-if="store.themeMode === THEME_MODE.DARK" class="w-[35px] h-[35px]" src="../assets/moon.png" />
    </button>
  </div>
</template>