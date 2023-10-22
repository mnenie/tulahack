<script setup lang="ts">
import { useUser } from '@/stores/userState';
import $api from '@/http/index';
import {onMounted, ref} from 'vue'
import EventBlock from '@/components/EventBlock.vue';
const auth = useUser()
if (localStorage.getItem('token')) {
  auth.isAuth = true
  auth.user = JSON.parse(localStorage.getItem('user') as string)
}

const myEvents = [
    {
      id: 1,
      name: 'Смешарики. Искусство быть круглым',
      description: 'Масштабная выставка к юбилею проекта',
      startDate: new Date('22.10.23'),
      endDate: new Date('22.10.23'),
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
      startDate: new Date('22.10.23'),
      location: 'Хлебозавод',
      tags: [
        "Выставка", "Детям", "12+"
      ],
      mainPic: '',
      price: 13,
      isRegular: false
    }
  ];

// async function getMyEvents(){
//   try{
//     const response = await $api.get(`/events/?organizerId=${auth.user.id}`);
//     myEvents.value = response.data;
//   }catch(e){

//   }
// }
// onMounted(() => {
//   getMyEvents();
// })
// console.log(myEvents.value)
</script>

<template>
  <div style="margin: 50px 0;" class="auth">
    <div class="container">
      <div class="text">
        <h2 style="margin-bottom: 30px;" class="size_2">Страница пользователя:</h2>
        <span style="margin-bottom: 20px;" class="size_5">Пользователь {{ auth.user.firstName }} {{ auth.user.lastName
        }}</span>
        <span>Мероприятия: </span>
        <!-- <EventBlock :events="myEvents"></EventBlock> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text{
  display: flex;
  flex-direction: column;
}
</style>