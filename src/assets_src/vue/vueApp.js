import * as Vue from 'vue';
import App from './App.vue';
window.app = Vue.createApp(App);
window.vm = window.app.mount('#app')