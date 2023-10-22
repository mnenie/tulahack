<script setup lang="ts">
import type { IEvent } from '@/types/event.interface';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';
import { HOME_ROUTE } from '../utils/const';
import { onMounted, ref } from 'vue';
import { useEvents } from '../stores/events';
import type { IInfo } from '../types/info.interface';

import { format } from 'date-fns';
import $api from '@/http';
const info = ref<IInfo | null>(null)

function formatDate(dateString: string | Date) {
  return format(new Date(dateString), 'dd.MM.yyyy');
}
defineProps<{
  events: IEvent[]
}>()
const router = useRouter()
const showAlert = async () => {
  try{
    const response = await $api.post(`/events/register/${info.value?.event.id}`,{participantId: JSON.parse(localStorage.getItem('user') as string).id});

  }catch(e) {
    console.log(e)
    return 
  }
  
  Swal.fire({
    title: 'Ваша заявка принята',
    icon: 'success',
    // text: 'Ожидайте письма на почте',
    showCancelButton: false,
    confirmButtonText: 'Перейти на главную',
    customClass: {
      confirmButton: 'my-confirm-button-class',
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
      router.push(HOME_ROUTE);
    }
  });
}

const route = useRoute()

const newInfo = useEvents()
const newFuncInfo = async () => {
  info.value = await newInfo.fetchOneEvent(parseInt(route.params.id as string))
  console.log(info.value) 
}
onMounted(() => {
  newFuncInfo()
})
</script>
<template>
  <div class="event_item">
    <div class="first">
      <img class="img" :src="`http://localhost:8080/${info?.event.mainPic}`" alt="">
      <div class="main_text">
        <h2 class="size_3">{{ info?.event.name }}</h2>
        <div class="tags">
          <span class="size_7" v-for="(i, index) of info?.event.tags" :key="index">
            {{ i }}
          </span>
        </div>
        <span class="size_6 price">Цена: {{ new Intl.NumberFormat("ru-Ru", {
          style: "currency",
          currency: "rub",
        }).format(info?.event.price) }}
        </span>
        <span class="size_6 date" v-if="info?.event.endDate">Дата мероприятия: {{ formatDate(info?.event.startDate) }} - {{ formatDate(
          info.event.endDate)
        }}</span>
        <span class="size_6 date" v-else>Дата мероприятия: {{ info?.event.startDate }}</span>
      </div>
    </div>
    <div class="second">
      <span class="size_5 desc">{{ info?.event.description }}</span>
      <span style="margin-bottom: 20px;" class="size_5">Автор:  {{ info?.organizer }} </span>
      <btn-event @click="showAlert" style="align-self: flex-start;">Я пойду</btn-event>
    </div>
    <div class="round"></div>
    <img class="img_right" src="/img/2.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
.event_item {
  position: relative;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  padding: 20px 20px;
  border: 1px solid var(--main-color);
  border-radius: 5px;
  width: 100%;
  overflow: hidden;
  min-height: 600px;

  .first {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 50px;

    .img {
      width: 400px;
      height: 350px;
      background: var(--bg-color);
    }

    .main_text {
      display: flex;
      flex-direction: column;

      & h2 {
        margin-bottom: 10px;
      }

      .price {
        margin-bottom: 10px;
      }

      .tags {
        display: flex;
        gap: 15px;
        align-items: center;
        margin-bottom: 40px;

        & span {
          color: var(--main-color);
        }
      }
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .round {
    position: absolute;
    width: 500px;
    height: 500px;
    background: var(--main-color);
    border-radius: 50%;
    bottom: -250px;
    right: -250px;
  }

  .img_right {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

</style>