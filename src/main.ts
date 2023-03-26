import { createApp } from "vue";

import router from "../router/index"; // <--- This is the line that is causing the error--->
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");
