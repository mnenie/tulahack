<script setup lang="ts">
import { ref } from 'vue';
import Date from './Date.vue';
import { useEvents } from '@/stores/events';
export interface IFilter {
  id: number
  name: string
  isActive: boolean
}

const { filters, filterThis } = useEvents();

</script>

<template>
  <div class="container">
    <div class="filter">
      <Date />
      <div class="filter_block">
        <span @click="filterThis(index)" v-for="(filter, index) in filters" :key="filter.id" style="cursor: pointer;" class="size_7" :class="{ 'active': filter.isActive }">{{ filter.name }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &_block {
    display: flex;
    align-items: center;
    gap: 30px;

    & span {
      font-weight: 400;
    }
  }
}

.active {
  color: var(--main-color);
}</style>