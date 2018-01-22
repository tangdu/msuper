import Vue from "vue";
import store from "./store/index";
import App from "./App.vue";
import router from "./router";
import iView from "iview";
import "iview/dist/styles/iview.css";
Vue.use(iView);

import axios from "axios";
axios.defaults.baseURL = "https://www.vue-js.com/api/v1/";

new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App }
});
