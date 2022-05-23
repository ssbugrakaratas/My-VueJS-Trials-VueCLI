import Vue from "vue";
import App from "./App.vue";

export const event_bus = new Vue({
    methods: {
        name_changer(name) {
            this.$emit("name_changed", name);
        }
    }
});

new Vue({
    el: "#app",
    render: h => h(App)
});