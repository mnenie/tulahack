import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import uicomponents from '@/components/ui'
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';

import App from './App.vue'
import router from './router'
const app = createApp(App)


uicomponents.forEach(component => {
  app.component(component.name, component)
});
app.component('Datepicker', VueDatepickerUi)

app.use(createPinia())
app.use(router)

app.mount('#app')
