import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEvent } from '@/types/event.interface'

export const useEvents = defineStore('events', () => {
  
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

  const event = ref([
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
  return { events, event }
})
