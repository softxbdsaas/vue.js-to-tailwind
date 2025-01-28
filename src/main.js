// Import global styles
import './assets/main.css';
import './assets/tailwind.css'; // Import Tailwind CSS

// Vue and application setup
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration
import { createPinia } from 'pinia'; // State management
import piniaPersist from 'pinia-plugin-persistedstate';

// Font Awesome setup
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Add Font Awesome solid icons to the library
library.add(fas);

// Create Vue app instance
const app = createApp(App);

// Create and use Pinia store
const pinia = createPinia();
// Use the pinia persisted state plugin
pinia.use(piniaPersist);

app.use(pinia);

// Use the Vue Router
app.use(router);

// Register Font Awesome component globally
app.component("font-awesome-icon", FontAwesomeIcon);

// Mount the app to the DOM
app.mount('#app');
