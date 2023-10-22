<script setup lang="ts">
import MultiSelect from 'primevue/multiselect';
import { ref, onMounted, computed } from 'vue';
import InputItem from '@/components/ui/InputItem.vue';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { HOME_ROUTE } from '@/utils/const';
import { arr } from '../utils/const';
import $api from '@/http';
import { format } from 'date-fns';
import { useUser } from '../stores/userState';

const imgPeople = ref('/img/registration.png')
const mainPicFile = ref();
const uploadImage = () => {
  const input = document.createElement("input");
  input.id = "file";
  input.type = "file";
  input.accept = "image/jpeg,image/png";
  input.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement;
    mainPicFile.value = target.files?.[0];

  })
  input.click();
}
const router = useRouter()
const create = async () => {
  const formData = new FormData();
  formData.append('mainPic', mainPicFile.value);
  formData.append('name', model1.value);
  formData.append('description', model2.value);
  formData.append('startDate', format(new Date(model3.value), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"));
  formData.append('endDate', format(new Date(model6.value), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"));
  formData.append('location', model4.value);
  formData.append('tags', selectedTags.value.map((obj: any) => obj.name).join(','));
  formData.append('price', model5.value);
  formData.append('isRegular', check1.value.toString());
  formData.append('organizerId', JSON.parse(localStorage.getItem('user') as string).id);
  try {
    const response = await $api.post('/events/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (e) {
    console.log(e)
    return
  }
  Swal.fire({
    title: 'Ваше мероприятие создано',
    icon: 'success',
    text: 'Ожидайте письма на почте',
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
const selectedTags = ref();
const tags = ref(arr)

const model1 = ref('')
const model2 = ref('')
const model3 = ref('')
const model6 = ref('')
const model4 = ref('')
const model5 = ref('')

const check1 = ref<boolean>(false)
const selectedOptions = ref([])

const inputs = ref([
  {
    id: 1,
    name: 'Название мероприятия: ',
    place: 'Введите название мероприятия'
  },
  {
    id: 2,
    name: 'Описание мероприятия',
    place: 'Введите описание мероприятия'
  },
  {
    id: 3,
    name: 'Дата начала и дата окончания(если есть):',
    place: 'Введите дату'
  },
  {
    id: 4,
    name: 'Место проведения:',
    place: 'Введите место проведения'
  },
  {
    id: 5,
    name: 'Цена на мероприятие:',
    place: 'Введите цену'
  },
])
const auth = useUser()
const isUser = computed(() => !!auth.isAuth)
</script>

<template>
  <div class="create">
    <div class="container">
      <div v-if="!isUser">
        <p style="color: red;">Войдите на сайт чтобы создать собственное мероприятие!</p>
      </div>
      <div v-else class="create_block">
        <h2 class="size_2">Создайте свое собственное мероприятие!</h2>
        <div class="form">
          <div class="avatar">
            <img :src="imgPeople" alt="">
            <a @click.prevent="uploadImage" style="text-decoration: none; color: var(--black-color);" href="">Загрузить
              изображение</a>
          </div>
          <div class="inputs">
            <!-- <InputItem :input-el="inputs" /> -->
            <div class="input_el_full">
              <p class="subheading">Название мероприятия: </p>
              <input v-model="model1" class="input_el" placeholder="Введите название мероприятия">
              <div class="error_message">
              </div>
            </div>
            <div class="input_el_full">
              <p class="subheading">Описание мероприятия:</p>
              <input v-model="model2" class="input_el" placeholder="Введите описание мероприятия">
              <div class="error_message">
              </div>
            </div>
            <div class="input_el_full">
              <p class="subheading">Дата начала:</p>
              <input v-model="model3" class="input_el" placeholder="Введите дату">
              <div class="error_message">
              </div>
            </div>
            <div class="input_el_full">
              <p class="subheading">Дата окончания:</p>
              <input v-model="model6" class="input_el" placeholder="Введите дату">
              <div class="error_message">
              </div>
            </div>
            <div class="input_el_full">
              <p class="subheading">Место проведения:</p>
              <input v-model="model4" class="input_el" placeholder="Введите место проведения">
              <div class="error_message">
              </div>
            </div>
            <div class="input_el_full">
              <p class="subheading">Цена на мероприятие:</p>
              <input v-model="model5" class="input_el" placeholder="Введите цену">
              <div class="error_message">
              </div>
            </div>
            <div class="check">
              <span>Сделать событие регулярным?</span>
              <div style="display: flex; align-items: center; gap: 12px;" class="checks">
                <div class="form-check">
                  <input v-model="check1" :value="true" class="form-check-input" type="radio" name="flexRadioDefault"
                    id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">
                    Да
                  </label>
                </div>
                <div class="form-check">
                  <input v-model="check1" :value="false" class="form-check-input" type="radio" name="flexRadioDefault"
                    id="flexRadioDefault2" checked>
                  <label class="form-check-label" for="flexRadioDefault2">
                    Нет
                  </label>
                </div>
              </div>
            </div>
            <div class="card_select">
              <MultiSelect v-model="selectedTags" :options="tags" optionLabel="name" placeholder="Выбирите тэги"
                :maxSelectedLabels="3" class="select" />
            </div>
            <btn-auth @click="create" data-bs-dismiss="modal"
              style="width: 100%; justify-content: center;">Создать</btn-auth>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.create {
  margin: 50px 0;

  &_block {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .form {
      display: flex;
      align-items: flex-start;
      gap: 30px;
      justify-content: space-between;
      width: 100%;

      .avatar {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 200px;
        width: 100%;

        & img {
          width: 200px;
          height: 200px;
        }
      }

      .inputs {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
      }
    }
  }
}

.check {
  display: flex;
  flex-direction: column;
  gap: 10px;

  & span {
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: var(--black-color);
  }
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

.card_select {
  border-radius: 10px;
}

.select {
  background: var(--white-color);
  border: 1px solid var(--main-color);
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  // padding: 30px;
}
</style>