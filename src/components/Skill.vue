<script>
import SkillPad from './SkillPad.vue'

export default {
  components: {
    SkillPad
  },
  data() {
    return {
      skills: [
        { title: 'Frontend', content: "HTML CSS JavaScript<br />Vue JQuery Axios" , image: "frontend"},
        { title: 'Backend', content: "PHP Laravel Slim<br/>SQL Redis memcached", image: "backend" },
        { title: 'Cloud Services', content: "AWS S3<br/>AWS Athena", image:"cloud" },
        { title: 'Tools', content: "GIT Docker CI/CD<br/>Figma Trello JIRA", image: "tool" }
      ]
    }
  }
}
</script>

<template>
  <div id="skill" class="container mx-auto flex flex-col gap-6 pt-24 pb-12">
      <p class="block-title text-white">Skills & Tools</p>
      <div class="flex flex-row flex-wrap	justify-center items-center gap-3.5">
        <SkillPad
          v-for="skill in skills"
          :title="skill.title"
          :content="skill.content"
          :image="skill.image"
        />
      </div>
  </div>
</template>