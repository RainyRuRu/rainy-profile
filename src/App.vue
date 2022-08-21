<script setup>
import Community from './components/Community.vue'
import Education from './components/Education.vue'
import Experinece from './components/Experinece.vue'
import MyFooter from './components/Footer.vue'
import MyHeader from './components/Header.vue'
import MyNav from './components/Nav.vue'
import Rainy from './components/Rainy.vue'
import Skill from './components/Skill.vue'
import { store, THEME_MODE } from './store.js'
</script>

<script>
export default {
  data() {
    return {
      THEME_MODE
    }
  }
}
</script>

<template>
  <div class="background" v-bind:class="store.themeMode">
    <Rainy v-if="store.themeMode === THEME_MODE.RAINY" class="fixed top-0 left-0 h-screen w-screen pointer-events-none" />
    <MyNav />
    <MyHeader />
    <Skill />
    <Experinece />
    <Community />
    <Education />
    <MyFooter />
  </div>
</template>

<style scoped>
.background {
  background-size: cover;
}

.light {
  background-image: url(./assets/light-mode.jpg);
}

.rainy,
.dark {
  background-image: url(./assets/dark-mode.jpg);
}
</style>
