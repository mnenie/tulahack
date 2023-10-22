<script setup lang="ts">
import { ref } from 'vue';
import InputItem from './InputItem.vue';
import Modal from './Modal.vue';
// import Userservice from '../../service/userservice';s
import { useUser } from '@/stores/userState';


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
    place: 'Введите имя',
  },
  {
    id: 2,
    name: 'Фамилия',
    place: 'Введите фамилию',
  },
  {
    id: 3,
    name: 'E-mail:',
    place: 'Введите e-mail',
  },
  {
    id: 4,
    name: 'Пароль:',
    place: 'Введите пароль',
  },
])
const regNew = useUser()
const model1 = ref('')
const model2 = ref('')
const model3 = ref('')
const model4 = ref('')
const model5 = ref('')
const Registration = async () => {
  const reg = {
    email: model1.value,
    firstName: model2.value,
    lastName: model3.value,
    password: model4.value,
    organization: model5.value
  }
  await regNew.registration(reg)
  model1.value = ''
  model2.value = ''
  model3.value = ''
  model4.value = ''
  model5.value = ''
}
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
      <!-- <InputItem :input-el="inputs" /> -->
      <div class="input_el_full">
        <p class="subheading">E-mail:</p>
        <input v-model="model1" class="input_el" placeholder="Введите e-mail">
        <div class="error_message">
        </div>
      </div>
      <div class="input_el_full">
        <p class="subheading">Имя: </p>
        <input v-model="model2" class="input_el" placeholder="Введите имя">
        <div class="error_message">
        </div>
      </div>
      <div class="input_el_full">
        <p class="subheading">Фамилия: </p>
        <input v-model="model3" class="input_el" placeholder="Введите фамилию">
        <div class="error_message">
        </div>
      </div>
      <div class="input_el_full">
        <p class="subheading">Пароль: </p>
        <input type="password" v-model="model4" class="input_el" placeholder="Введите пароль">
        <div class="error_message">
        </div>
      </div>
      <div class="input_el_full">
        <p class="subheading">Организация: </p>
        <input v-model="model5" class="input_el" placeholder="Введите организацию">
        <div class="error_message">
        </div>
      </div>
      <btn-auth @click="Registration" data-bs-dismiss="modal"
        style="width: 100%; justify-content: center;">Зарегистрироваться</btn-auth>
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