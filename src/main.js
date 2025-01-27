import './assets/main.css'
import './assets/tailwind.css'; // Import Tailwind CSS
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');