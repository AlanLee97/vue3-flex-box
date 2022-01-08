import { createApp } from 'vue'
import App from './App.vue'
import '@alanlee97/vue3-flex-box/dist/style.css';
import vFlex from './directives/v-flex';

const app = createApp(App);
app.directive('flex', vFlex);
app.mount('#app');
