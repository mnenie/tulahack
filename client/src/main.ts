import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import uicomponents from '@/components/ui'
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueSweetalert2 from 'vue-sweetalert2';
const options = {
  confirmButtonColor: '#fff',
  cancelButtonColor: '#ff7674',
};


const app = createApp(App)


uicomponents.forEach(component => {
  app.component(component.name, component)
});
app.component('Datepicker', VueDatepickerUi)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2, options);
app.mount('#app')
