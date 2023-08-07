import { createApp } from 'vue';
import './assets/site.scss';
import App from './App.vue';
import router from './router/Router';

const app = createApp(App);
app.use(router);
app.mount('#app');
