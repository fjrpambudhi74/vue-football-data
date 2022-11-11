import Vue from "vue";
// import App from "./App.vue";
import AppLayout from "./layout/index.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(AppLayout),
}).$mount("#app");
