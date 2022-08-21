<script>
export default {
  props: ['title', 'content', 'image'],
}
</script>

<template>
  <div class="pad">
    <div class="image" :class="image"></div>
    <div class="title">{{ title }}</div>
    <div class="content" v-html="content" />
  </div>
</template>

<style scoped>

.content {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  text-align: center;
  color: #353353;
}

.title {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #353353;
}

.image {
  background-image: url(../assets/icons.svg);
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: 468px;
}

.backend {
  background-position: -96px 0px;
}

.frontend {
  background-position: -194px -103px;
}

.tool {
  background-position: -389px -203px;
}

.cloud {
  background-position: -390px -305px;
}


.pad {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 10px;

  width: 265px;
  height: 280px;

  background: #FFFFFF;
  border-radius: 10px;
}

</style>
