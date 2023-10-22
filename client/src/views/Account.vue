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
</script>

<template>
  <div style="margin: 50px 0;" class="auth">
    <div class="container">
      <div class="text">
        <h2 style="margin-bottom: 30px;" class="size_2">Страница пользователя:</h2>
        <span style="margin-bottom: 20px;" class="size_5">Пользователь {{ auth.user.firstName }} {{ auth.user.lastName
        }}</span>
        <span>Мероприятия: </span>
          <div class="event_display">
            <div class="container">
              <div class="blocks">
                <EventBlock v-if="myEvents.length !== 0" :events="myEvents" />
                <p v-else style="color: red; margin-top: 20px;">Нет созданных мероприятий</p>
              </div>
            </div>
          </div>
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