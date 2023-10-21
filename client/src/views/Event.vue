<script setup lang="ts">
import EventItem from '@/components/EventItem.vue';
import type { IEvent } from '@/types/event.interface';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useEvents } from '@/stores/events';


const events = useEvents()
</script>

<template>
  <div class="event_page">
    <div class="container">
      <h2 style="margin-bottom: 20px;" class="size_1">Выбранное мероприятие: </h2>
      <EventItem :events="events.events" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event_page{
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>