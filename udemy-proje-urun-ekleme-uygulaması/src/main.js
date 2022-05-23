import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
    methods: {
        send_product(value) {
            this.$emit("sent_product", value);
        },
        send_product_count(value) {
            this.$emit("sent_product_count", value);
        },
        send_add_button_status(value) {
            this.$emit("add_button_disabled", value);
        }
    }
});

new Vue({
    el: "#app",
    render: h => h(App)
});