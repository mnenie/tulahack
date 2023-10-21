<script setup lang="ts">
import type { IBlock } from '@/types/block.interface';
const items: IBlock[] = [
  {
    id: 1,
    title: 'Записывайтесь на мероприятия по выбранным категориям и создавайте их!',
    img: '/img/1.png'
  },
  {
    id: 2,
    title: 'Создайте новое регулярное событие или примите участие в этих событиях !',
    img: '/img/2.png'
  },
  {
    id: 3,
    title: 'Станьте участником образовательных кружков или создайте их!',
    img: '/img/3.png'
  }
]
</script>
<template>
  <div v-for="item in items" :for="item.id" class="block">
    <span class="size_3 ">{{ item.title }}</span>
    <img :src="item.img" alt="">
    <div class="round"></div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  max-width: 350px;
  min-height: 350px;
  width: 100%;
  background: var(--main-color);
  border-radius: 10px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--main-color);

  & span {
    color: var(--black-color);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: relative;
  }
  & img{
    position: absolute;
    bottom: 22px;
    right: 22px;
    width: 64px;
    height: 64px;
  }
  .round{
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: var(--white-color);
    left: -200px;
    bottom: -200px;
  }
}

@media screen and (max-width: 890px){
  .block {
    max-width: 410px;
    min-height: 250px;
  }
}
</style>