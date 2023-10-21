<script setup lang="ts">
import { ref } from 'vue';
import InputItem from '@/components/ui/InputItem.vue';
const imgPeople = ref('/img/registration.png')
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { HOME_ROUTE } from '@/utils/const';

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
const router = useRouter()
const create = () => {
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
</script>

<template>
  <div class="create">
    <div class="container">
      <div class="create_block">
        <h2 class="size_2">Создайте свое собственное мероприятие!</h2>
        <div class="form">
          <div class="avatar">
            <img :src="imgPeople" alt="">
            <a @click.prevent="uploadImage" style="text-decoration: none; color: var(--black-color);" href="">Загрузить
              изображение</a>
          </div>
          <div class="inputs">
            <InputItem :input-el="inputs" />
            <div class="check">
              <span>Сделать событие регулярным?</span>
              <div style="display: flex; align-items: center; gap: 12px;" class="checks">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">
                    Да
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                  <label class="form-check-label" for="flexRadioDefault2">
                    Нет
                  </label>
                </div>
              </div>
            </div>
            
            <btn-auth @click="create" data-bs-dismiss="modal" style="width: 100%; justify-content: center;">Создать</btn-auth>
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
</style>