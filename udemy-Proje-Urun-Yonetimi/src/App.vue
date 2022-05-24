<!--Coded By Samed Buğra KARATAŞ-->

<template>
  <div id="app">
    <Header></Header>
    <div class="contentBody">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import ProductBuy from "./components/products/ProductBuy.vue";
import ProductList from "./components/products/ProductList.vue";
import ProductSell from "./components/products/ProductSell.vue";

export default {
  name: "app",
  created() {
    this.$store.dispatch("getTradeResult")
    this.$store.dispatch("initApp")
  },
  components: { Header, Footer, ProductBuy, ProductList, ProductSell }
}
</script>

<style>
body {
  background-color: #e6e6e6;

}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .3s ease-out;
}

.fade-leave {}

.fade-leave-active {
  transition: opacity .3s ease-out;
  opacity: 0;
}
</style>
