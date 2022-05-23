import Vue from "vue";
import App from "./App.vue";
import Header from "./components/layouts/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/layouts/Footer.vue";

Vue.component("Header", Header);
Vue.component("Content", Content);
Vue.component("Footer", Footer);

new Vue({
    el: "#app",
    render: h => h(App)
});