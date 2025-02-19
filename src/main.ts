import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersistedState from "pinia-plugin-persistedstate";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue from "@arco-design/web-vue";

import App from "./App.vue";
import router from "./router";
import "./style.css";

const pinia = createPinia();
pinia.use(piniaPersistedState);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ArcoVue);

app.mount("#app");
