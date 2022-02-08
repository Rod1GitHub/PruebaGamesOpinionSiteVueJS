import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Enabling Font Awesome on this project
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSpinner);
library.add(fas);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
Vue.component("font-awesome-icon", FontAwesomeIcon);

// End - Enabling Font Awesome on this project

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
