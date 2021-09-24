import Vue from "vue";
import App from "./App.vue";
// import bootstrap from "bootstrap";
import VueRouter from "vue-router";
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
