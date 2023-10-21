<script setup lang="ts">
import { ref } from 'vue';
import Date from './Date.vue';
import { useEvents } from '@/stores/events';
const filters = ref([
  {
    id: 1,
    name: '1'
  },
  {
    id: 2,
    name: '2'
  },
  {
    id: 3,
    name: '3'
  },
])
const filterUse = useEvents()

</script>

<template>
  <div class="container">
    <div class="filter">
      <Date />
      <div class="filter_block">
        <span @click="filterUse.filterItems(index)" v-for="(filter, index) in filters" :key="filter.id" class="size_7">{{ filter.name }}</span>
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