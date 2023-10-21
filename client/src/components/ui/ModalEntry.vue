<script setup lang="ts">
import { ref } from 'vue';
import InputItem from './InputItem.vue';
import Modal from './Modal.vue';


const modalId = 'modalEntry'

const inputs = ref([
  {
    id: 1,
    name: 'E-mail:',
    place: 'Введите e-mail'
  },
  {
    id: 2,
    name: 'Пароль:',
    place: 'Введите пароль'
  },
])
</script>

<template>
  <Modal :id="modalId">
    <div class="modal_registration">
      <h3 class="size_3">Вход</h3>
      <div class="links">
        <a @click.prevent href="" class="active">Вход</a>
        <a @click.prevent data-bs-toggle="modal" data-bs-target="#modalRegistration" href="">Регистрация</a>
      </div>
      <InputItem :input-el="inputs" />
      <btn-auth data-bs-dismiss="modal" style="width: 100%; justify-content: center;">Войти</btn-auth>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.modal_registration {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .avatar {
    display: flex;
    flex-direction: column;
    gap: 12px;

    & a {
      text-decoration: none;
      color: var(--main-color);
    }

    & img {
      width: 80px;
      height: 80px;
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 12px;
    & a{
      color: var(--black-color);
      text-decoration: none;
    }

  }
}

.active {
  color: var(--main-color) !important;
}
</style>