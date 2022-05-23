<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>
    <Header></Header>
    <router-view></router-view>
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
  data() {
    return {
      title: "Bolum 19",
    };
  },
  components: { Header, Footer, ProductBuy, ProductList, ProductSell }
}
</script>

<style>
</style>
