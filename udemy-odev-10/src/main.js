import Vue from "vue";
import App from "./App.vue";

Vue.directive("color1", {
    bind(el, binding, vnode) {
        el.style.backgroundColor = "red";
    }
});

Vue.directive("color2", {
    bind(el, binding, vnode) {
        el.style.backgroundColor = binding.value;
    }
});

Vue.directive("color3", {
    bind(el, binding, vnode) {
        if (binding.modifiers["gecikme"]) {
            setTimeout(() => {
                if (binding.arg == "background") {
                    el.style.backgroundColor = binding.value;
                } else {
                    el.style.color = binding.value;
                }
            }, 2000);
        } else {
            if (binding.arg == "background") {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }
    }
});

new Vue({
    el: "#app",
    render: h => h(App)
});