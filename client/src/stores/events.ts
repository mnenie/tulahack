import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEvent } from '@/types/event.interface'
import $api from '@/http'
import type { IInfo } from '@/types/info.interface'
import { format } from 'date-fns'

export const useEvents = defineStore('events', () => {
  const events = ref<IEvent[]>([])
  const eventInfo = ref({} as IInfo)
  const filters = ref([
    {
      id: 0,
      name: 'Все мероприятия',
      isActive: true
    },
    {
      id: 1,
      name: 'Выставка',
      isActive: false
    },
    {
      id: 2,
      name: 'Спорт',
      isActive: false
    },
    {
      id: 3,
      name: 'Лекции',
      isActive: false
    },
    {
      id: 4,
      name: 'Кружки по интересам',
      isActive: false
    },
    {
      id: 5,
      name: '0+',
      isActive: false
    },
    {
      id: 6,
      name: '12+',
      isActive: false
    },
    {
      id: 7,
      name: 'Концерты',
      isActive: false
    }
  ])
  const selectedDate = ref([
    new Date(), new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000)
  ]);
  
  function formatDate(startDate: string | Date, endDate: string | Date) {
    const formattedStartDate = format(new Date(startDate), 'dd.MM.yyyy');
    const formattedEndDate = format(new Date(endDate), 'dd.MM.yyyy');
    return [formattedStartDate, formattedEndDate];
  }
  const fetchEvents = async () => {
    const response = await $api.get('/events')
    events.value = response.data
  }

  const selectedFilter = ref<string | null>(null)

  const fetchOneEvent = async (id: number) => {
    const response = await $api.get(`/events/${id}`)
    eventInfo.value = response.data
    console.log(response, eventInfo.value)
    return response.data
  }

  const setActiveFilter = (filterId: number) => {
    const filter = filters.value.find((f) => f.id === filterId)

    if (filter) {
      filters.value.forEach((f) => (f.isActive = f.id === filterId))
    }

    const activeFilters = filters.value.filter((filter) => filter.isActive)
    selectedFilter.value =
      activeFilters.length > 0 ? activeFilters.map((filter) => filter.name).join(', ') : null
  }

  const filteredEvents = computed(() => {
    const activeFilters = filters.value.filter(filter => filter.isActive);
  
    let filtered = [];
  
    if (!activeFilters.length || activeFilters.some(filter => filter.name === 'Все мероприятия')) {
      // Если нет активных фильтров или есть активный фильтр "Все мероприятия", возвращаем все события
      filtered = events.value.slice();
    } else {
      // Фильтрация по активным фильтрам
      filtered = events.value.filter(event => {
        return activeFilters.some(filter => event.tags.includes(filter.name));
      });
    }
  
    // // Фильтрация по дате
    // filtered = filtered.filter((event) => {
    //   const [formattedStartDate, formattedEndDate] = formatDate(selectedDate.value[0], selectedDate.value[1]);
    //   const eventDate = format(new Date(event.date), 'dd.MM.yyyy');
    //   return eventDate >= formattedStartDate && eventDate <= formattedEndDate;
    // });
    

  
    return filtered;
  });

  const filterThis = (filterId: number) => {
    setActiveFilter(filterId)
  }

  return {
    events,
    selectedFilter,
    filteredEvents,
    setActiveFilter,
    filterThis,
    selectedDate,
    filters,
    fetchEvents,
    fetchOneEvent,
    eventInfo
  }
})
