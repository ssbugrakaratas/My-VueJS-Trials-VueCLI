<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <br><br>
    <select required v-model="sec_data" class="form-select" title="birini seç">
      <option value="" hidden disabled selected>seçiniz...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="sectim">sec</button>
    <br><br>
    <hr>
    <ProductUploader></ProductUploader>
    <br><br>
    <ProgressBar></ProgressBar>
    <br><br>
    <ShowProducts></ShowProducts>
  </div>


</template>

<script>

import ProgressBar from './components/ProgressBar.vue';
import ShowProducts from './components/ShowProducts.vue';
import ProductUploader from './components/ProductUploader.vue';
export default {
  data() {
    return {
      sec_data: ""
    }
  },
  methods: {
    sectim() {
      console.log(this.sec_data)
    }
  },

  components: { ProgressBar, ShowProducts, ProductUploader }
}
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>

