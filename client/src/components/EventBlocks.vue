<script setup lang="ts">
import { ref } from 'vue';
import EventBlock from './EventBlock.vue';
import type { IEvent } from '../types/event.interface';

const events = ref<IEvent[]>([
  {
    id: 1,
    name: 'Смешарики. Искусство быть круглым',
    description: 'Масштабная выставка к юбилею проекта',
    start_date: '22.10.23',
    end_date: '10.03.23',
    location: 'Хлебозавод',
    tags: [
      "Выставка", "Детям", "0+"
    ],
    mainPic: '',
    price: 13122,
    isRegular: false
  },
  {
    id: 2,
    name: 'Ничего не бойся, я с тобой',
    description: 'Романтическая история с хитами группы «Секрет»',
    start_date: '22.10.23',
    location: 'Хлебозавод',
    tags: [
      "Выставка", "Детям", "12+"
    ],
    mainPic: '',
    price: 13,
    isRegular: false
  }
])
</script>

<template>
  <div class="event_display">
    <div class="container">
      <div class="blocks">
        <EventBlock :events="events" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.event_display{
  margin: 40px 0;
  .blocks{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>