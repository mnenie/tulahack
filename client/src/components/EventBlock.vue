<script setup lang="ts">
import type { IEvent } from "@/types/event.interface"
import { format } from 'date-fns';

defineProps<{
  events: IEvent[]
}>()
function formatDate(dateString: string | Date) {
  return format(new Date(dateString), 'dd.MM.yyyy');
}


</script>

<template>
  <div v-for="item in events" :key="item.id" class="event_block">
      <img style="width: 320px; height: 250px; border-radius: 5px;" :src="`http://localhost:8080/${item.mainPic}`" alt="">
    <div class="text">
      <h2 class="size_3">{{ item.name }}</h2>
      <div class="tags">
        <span class="size_7" v-for="(i, index) of item.tags" :key="index">
          {{ i }}
        </span>
      </div>
      <span class="size_5 desc">{{ item.description }}</span>
      <span class="size_6 price">Цена: {{ new Intl.NumberFormat("ru-Ru", {
        style: "currency",
        currency: "rub",
      }).format(item.price) }}
      </span>
      <span class="size_6 date" v-if="item.endDate">Дата мероприятия: {{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }}</span>
      <span class="size_6 date" v-else>Дата мероприятия: {{ item.startDate }}</span>
      <router-link style="text-decoration: none;" :to="{ name: 'event', params: { id: item.id } }">
        <btn-event style="align-self: flex-start;">Подробнее</btn-event>
      </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.event_block {
  display: flex;
  align-items: center;
  gap: 50px;
  border-radius: 5px;
  border: 1px solid var(--main-color);
  padding: 30px;
}

.img {
  width: 300px;
  height: 270px;
  // background: var(--bg-color);
  border-radius: 5px;
}

.text {
  display: flex;
  flex-direction: column;

  & h2 {
    margin-bottom: 5px;
  }

  .desc {
    margin-bottom: 15px;
  }

  .price {
    margin-bottom: 5px;
  }

  .date {
    margin-bottom: 25px;
  }

  .tags {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 15px;

    & span {
      color: var(--main-color);
    }
  }
}
</style>