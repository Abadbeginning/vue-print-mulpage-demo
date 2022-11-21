import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";

import { hiPrintPlugin } from "vue-plugin-hiprint";

const app = createApp(App);
app.use(hiPrintPlugin, "$pluginName");
hiPrintPlugin.disAutoConnect();

app.use(ElementPlus);
app.mount("#app");
