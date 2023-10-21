<script setup lang="ts">
import EventItem from '@/components/EventItem.vue';
import type { IEvent } from '@/types/event.interface';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useEvents } from '@/stores/events';

const route = useRoute();
const { event: events } = useEvents();
const selectedProduct = ref<IEvent | null>(null);

onMounted(() => {
  if (route.params.id) {
    const productId = Array.isArray(route.params.id)
      ? parseInt(route.params.id[0], 10)
      : parseInt(route.params.id, 10);
    if (!isNaN(productId)) {
      const foundProduct = events.find(item => item.id === productId);
      selectedProduct.value = foundProduct || null;
    }
  }
});
</script>

<template>
  <div class="event_page">
    <div class="container">
      <h2 style="margin-bottom: 20px;" class="size_1">Выбранное мероприятие: </h2>
      <EventItem :events="selectedProduct ? [selectedProduct] : []" />
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