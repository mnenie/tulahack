import { AUTHOREVENT_ROUTE, EVENT_ROUTE, HOME_ROUTE } from '@/utils/const'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_ROUTE,
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: EVENT_ROUTE,
      name: 'event',
      component: () => import('@/views/Event.vue')
    },
    {
      path: AUTHOREVENT_ROUTE,
      name: 'authorevents',
      component: () => import('@/views/AuthorEvents.vue')
    }
  ]
})

export default router
