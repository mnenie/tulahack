<script setup lang="ts">
import Date from './Date.vue';
</script>

<template>
  <div class="container">
    <div class="filter">
      <Date />
      <div class="filter_block">
        <span class="size_7">Все мероприятия</span>
        <span class="size_7">Кружки по интересам</span>
        <span class="size_7">Лекции</span>
        <span class="size_7">Концерты</span>
        <span class="size_7">Регулярные события</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter{
  display: flex;
  flex-direction: column;
  gap: 20px;
  &_block{
    display: flex;
    align-items: center;
    gap: 30px;
    & span{
      font-weight: 400;
    }
  }
}
</style>