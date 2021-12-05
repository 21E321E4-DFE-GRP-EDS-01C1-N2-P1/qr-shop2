import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
