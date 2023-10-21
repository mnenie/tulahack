<script setup lang="ts">
import HomeBlock from './HomeBlock.vue';
</script>

<template>
  <div class="container">
    <div class="blocks">
      <HomeBlock />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  margin: 50px 0 60px 0;
  display: flex;
  align-items: center;
  gap: 30px;
}
@media screen and (max-width: 890px){
    .blocks {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 50px 0;
    }
}
</style>