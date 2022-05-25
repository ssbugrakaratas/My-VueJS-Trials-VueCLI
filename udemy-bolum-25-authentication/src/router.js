import Vue from "vue";
import VueRouter from "vue-router";

import Auth from "./pages/auth/Auth";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: "/", component: Homepage },
        { path: "/about", component: About },
        { path: "/auth", component: Auth }
    ],
    mode: "history"
});