<script setup lang="ts">
import { useEvents } from '@/stores/events';
import EventBlock from './EventBlock.vue';
import { onMounted } from 'vue';
const events = useEvents()

const NewEvents = async () => {
  await events.fetchEvents()
}
onMounted(()=> {
  NewEvents()
})
</script>

<template>
  <div class="event_display">
    <div class="container">
      <div class="blocks">
        <EventBlock v-if="events.filteredEvents.length !== 0" :events="events.filteredEvents " />
        <p v-else style="color: red; margin-top: 20px;">Нет доступных мероприятий</p>
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