import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
//import appController from '@/js/app/controller.js'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/css/style.css'


const app = createApp(App);

//app.use(store);
app.use(router);
//app.use(appController);
// app.use(BootstrapVue);
// app.use(IconsPlugin);

app.mount('#app');