import Vue from "vue";
import App from "./App";
import { router } from "./routers/index.js";
import "./assets/css/fontawesome-free/css/all.min.css"
import "./assets/css/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
import "./assets/css/icheck-bootstrap/icheck-bootstrap.min.css"
import "./assets/css/css/adminlte.min.css"
import "./assets/css/overlayScrollbars/css/OverlayScrollbars.min.css"

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
