<script setup lang="ts">
import { ref, onMounted } from 'vue';
import InputItem from './InputItem.vue';
import Modal from './Modal.vue';
import type { IUser } from '@/types/user.interface'
import Userservice from '../../service/userservice';
import { useUser } from '../../stores/userState';

const modalId = 'modalEntry'

const inputs = ref([
  {
    id: 1,
    name: 'E-mail:',
    place: 'Введите e-mail',
  },
  {
    id: 2,
    name: 'Пароль:',
    place: 'Введите пароль',
  },
])

const input = ref('')
const input2 = ref('')

const entry = useUser()
const Auth = async () => {
  const user: IUser = {
    email: input.value,
    password: input2.value
  }
  await entry.login(user)
  input.value = ''
  input2.value = ''
}

</script>

<template>
  <Modal :id="modalId">
    <div class="modal_registration">
      <h3 class="size_3">Вход</h3>
      <div class="links">
        <a @click.prevent href="" class="active">Вход</a>
        <a @click.prevent data-bs-toggle="modal" data-bs-target="#modalRegistration" href="">Регистрация</a>
      </div>
      <!-- <InputItem :input-el="inputs" /> -->
      <div class="input_el_full">
        <p class="subheading">Email: </p>
        <input v-model="input" class="input_el" placeholder="Введит e-mail">
        <div class="error_message">
        </div>
      </div>
      <div class="input_el_full">
        <p class="subheading">Пароль: </p>
        <input v-model="input2" class="input_el" placeholder="Введит пароль">
        <div class="error_message">
        </div>
      </div>
      <btn-auth @click="Auth" data-bs-dismiss="modal" style="width: 100%; justify-content: center;">Войти</btn-auth>
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

    & a {
      color: var(--black-color);
      text-decoration: none;
    }

  }
}

.active {
  color: var(--main-color) !important;
}
.input_el_full {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.input_el {
  border-radius: 12px;
  border: 1px solid var(--main-color);
  background: var(--white-color);
  padding: 15px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: var(--black-color);
  outline: none;
  transition: 0.15s ease-in;
}

.input_el::placeholder {
  color: var(--black-color);
  transition: 0.15s ease-in;
}

.input_el:hover::placeholder {
  color: var(--black-color);
}

.input_el:focus {
  color: var(--black-color);
  border: 1px solid var(--main-color);
}

.input_el:focus::placeholder {
  color: var(--black-color);
}

.subheading {
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: var(--black-color);
}

// .invalid:focus, .invalid {
//   border: 1px solid var(--accent-color-ff-704-d);
//   color: var(--accent-color-ff-704-d);
// }
.error_message {
  margin-top: 2px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: red;
}
</style>