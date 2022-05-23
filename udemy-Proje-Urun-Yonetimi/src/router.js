import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "./components/products/ProductList";
import ProductBuy from "./components/products/ProductBuy";
import ProductSell from "./components/products/ProductSell";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: ProductList },
    { path: "/urun-islemleri", component: ProductBuy },
    { path: "/urun-cikisi", component: ProductSell },
    { path: "*", redirect: "/" }
];

export const router = new VueRouter({
    mode: "history",
    routes
});