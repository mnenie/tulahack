import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEvent } from '@/types/event.interface'
import $api from '@/http'

export const useEvents = defineStore('events', () => {
  const events = ref<IEvent[]>([])
  const eventInfo = ref({} as any)
  const fetchEvents = async() => {
    const response = await $api.get('/events')
    events.value = response.data
  }

  const selectedFilter = ref<string | null>(null)

  const filterItems = (index: number) => {
    if (index >= 0 && index < events.value.length) {
      selectedFilter.value = events.value[index].name
    }
  }

  const filteredEvents = computed(() => {
    if (!selectedFilter.value) {
      return events.value;
    }

    return events.value.filter(event => event.name.includes(selectedFilter.value as string));
  });


  const fetchOneEvent = async(id: number) => {
    const response = await $api.get(`/events/${id}`)
    eventInfo.value = response.data
  }

  return { events, selectedFilter, filterItems, filteredEvents, fetchEvents, fetchOneEvent, eventInfo };
})