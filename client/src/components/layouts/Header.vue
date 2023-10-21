<script setup lang="ts">
import ModalRegistration from '../ui/ModalRegistration.vue';
import ModalEntry from '../ui/ModalEntry.vue';
import { CREATE_EVENT, HOME_ROUTE } from '@/utils/const';
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
  <header>
    <div class="container">
      <div class="header_content">
        <div style="display: flex; align-items: center;" class="logo_1">
          <div @click="router.push(HOME_ROUTE)" class="logo">
            <img src="/icons/1.png" alt="">
            <h1 style="margin-right: 50px;" class="size_1">L<span>i</span>veEvents</h1>
          </div>
          <router-link style="text-decoration: none; color: var(--black-color);" class="size_7" :to="CREATE_EVENT">Создать
            мероприятие</router-link>
        </div>
        <div class="btns">
          <btn-auth data-bs-toggle="modal" data-bs-target="#modalRegistration">
            Зарегистрироваться
          </btn-auth>
          <btn-auth data-bs-toggle="modal" data-bs-target="#modalEntry">
            Вход
            <img src="/icons/Login.svg" alt="">
          </btn-auth>
        </div>
      </div>
    </div>
    <ModalRegistration />
    <ModalEntry />
  </header>
</template>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid var(--bg-color);

  .header_content {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 12px;

      & span {
        color: var(--main-color);
      }
    }

    .btns {
      display: flex;
      gap: 12px;
      align-items: center;
    }
  }
}</style>