import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import axios from "axios";

axios.defaults.baseURL =
    "https://udemy-vuejs-proje-blog-axios-default-rtdb.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "bugra_auth_key-token";
axios.defaults.headers.get["Accept"] = "application/json";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});