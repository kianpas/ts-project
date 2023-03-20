import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import App from "./App.vue";

import "vuetify/styles";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import "./style.css";


import router from "./router";
const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
.use(router)
.use(vuetify)
.use(pinia)
.mount("#app");
