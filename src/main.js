import { createApp } from "vue";
import { createPinia } from 'pinia'

import App from "@/App.vue";
import router from "@/router";
import webVitals from './plugins/webVitals';


const app = createApp(App);
app.use(createPinia())
app.use(webVitals);

app.use(router);
app.mount("#app");