<script setup lang="ts">
import { ref } from 'vue';
import InputItem from './InputItem.vue';
import Modal from './Modal.vue';


const imgPeople = ref('/img/registration.png')
const modalId = 'modalRegistration'

const uploadImage = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/jpeg,image/png";
  input.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = e => {
        const newImg = e.target?.result as string;
        imgPeople.value = newImg;
      };
      reader.readAsDataURL(file);
    }
  });
  input.click();
}
const inputs = ref([
  {
    id: 1,
    name: 'Имя: ',
    place: 'Введите имя'
  },
  {
    id: 2,
    name: 'Фамилия',
    place: 'Введите фамилию'
  },
  {
    id: 3,
    name: 'E-mail:',
    place: 'Введите e-mail'
  },
  {
    id: 4,
    name: 'Пароль:',
    place: 'Введите пароль'
  },
])
</script>

<template>
  <Modal :id="modalId">
    <div class="modal_registration">
      <h3 class="size_3">Регистрация</h3>
      <div class="links">
        <a @click.prevent data-bs-toggle="modal" data-bs-target="#modalEntry" href="">Вход</a>
        <a href="" class="active">Регистрация</a>
      </div>
      <div class="avatar">
        <img :src="imgPeople" alt="">
        <a @click.prevent="uploadImage" href="">Загрузить изображение</a>
      </div>
      <InputItem :input-el="inputs" />
      <btn-auth data-bs-dismiss="modal" style="width: 100%; justify-content: center;">Зарегистрироваться</btn-auth>
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