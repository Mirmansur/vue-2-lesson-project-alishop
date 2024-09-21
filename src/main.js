import { createApp } from "vue";
import "@/style.css";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import App from "@/components/app/App.vue";
import routes from "./router";
import store from "../src/redux/store/index";

const app = createApp(App);

app.use(PrimeVue);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("InputText", InputText);
app.use(routes);
app.use(store);

app.mount("#app");
