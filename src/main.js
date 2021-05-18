import { createApp } from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CoreuiVue from "@coreui/vue";

createApp(App).use(router, CoreuiVue, Vuelidate ).mount("#app");
