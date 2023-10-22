<script setup lang="ts">
import { useUser } from '@/stores/userState';
<<<<<<< HEAD
import $api from '@/http/index';
import {onMounted, ref} from 'vue'
import EventBlock from '@/components/EventBlock.vue';
=======
import EventBlocks from '@/components/EventBlocks.vue';
>>>>>>> c5c2e86047176b2c8633278113ea6ac2c2603427
const auth = useUser()
if (localStorage.getItem('token')) {
  auth.isAuth = true
  auth.user = JSON.parse(localStorage.getItem('user') as string)
}

<<<<<<< HEAD
const myEvents = ref<IEvent[]>([]);
async function getMyEvents(){
  try{
    const response = await $api.get(`/events/?organizerId=${auth.user.id}`);
    myEvents.value = response.data;
  }catch(e){

  }
}
onMounted(() => {
  getMyEvents();
})
console.log(myEvents.value)
=======
>>>>>>> c5c2e86047176b2c8633278113ea6ac2c2603427
</script>

<template>
  <div style="margin: 50px 0;" class="auth">
    <div class="container">
      <div class="text">
        <h2 style="margin-bottom: 30px;" class="size_2">Страница пользователя:</h2>
        <span style="margin-bottom: 20px;" class="size_5">Пользователь {{ auth.user.firstName }} {{ auth.user.lastName
        }}</span>
<<<<<<< HEAD
        <span>Мероприятия: </span>
          <div class="event_display">
            <div class="container">
              <div class="blocks">
                <EventBlock v-if="myEvents.length !== 0" :events="myEvents" />
                <p v-else style="color: red; margin-top: 20px;">Нет созданных мероприятий</p>
              </div>
            </div>
          </div>
=======
        <span>Его мероприятия: </span>
        <EventBlock />
>>>>>>> c5c2e86047176b2c8633278113ea6ac2c2603427
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text{
  display: flex;
  flex-direction: column;
}
.event_display{
  margin: 40px 0;
  .blocks{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>