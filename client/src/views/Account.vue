<script setup lang="ts">
import { useUser } from '@/stores/userState';

const auth = useUser()
if (localStorage.getItem('token')) {
  auth.isAuth = true
  auth.user = JSON.parse(localStorage.getItem('user'))
}
</script>

<template>
  <div style="margin: 50px 0;" class="auth">
    <div class="container">
      <div class="text">
        <h2 style="margin-bottom: 30px;" class="size_2">Страница пользователя:</h2>
        <span style="margin-bottom: 20px;" class="size_5">Пользователь {{ auth.user.firstName }} {{ auth.user.lastName
        }}</span>
        <span>Его мероприятия: </span>
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