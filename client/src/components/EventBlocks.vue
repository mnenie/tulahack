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
        <EventBlock :events="events.filteredEvents" />
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