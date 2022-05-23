import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    //mode: 'hash' default url de '#' görünür
    mode: "history", // '#' olmadan çalışmasını sağlar
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }; //hash ile belirtilmiş bir element direk olarak o elementin konumuna scroll olması için
        }
        //return { x: 0, y: 500 }; //istediğin konumu manual verip oraya scroll olmasını sağlamak için
    }
});
//global bazlı olarak her Routerda bir sonra sayfaya geçişi engellemek için
router.beforeEach((to, from, next) => {
    console.log("Global kontrol");
    next();
});

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});