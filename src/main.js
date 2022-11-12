import Vue from "vue";
import App from "./App.vue";
// import AppLayout from "./layout/index.vue";
import router from "./router";
import store from "./store";
import "./assets/style/base-style.scss";
import "./assets/style/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
