<template>
  <div>
    <br>
    <h1 class="text-center">{{ title }}</h1>
    <hr>
    <div class="container">
      <input type="text" v-model="mesaj">
      <p>{{ mesaj | tersCevir }}</p>
      <p>{{ mesaj | kelimeSayiBul }}</p>
      <hr>
      <p>{{ tersCevir }}</p>
      <p>{{ kelimeSayiBul }}</p>
    </div>
    <hr>

  </div>
</template>

<script>

import { textMixin } from "./Mixins/TextMixin.js";

export default {
  data() {
    return {
      title: "Ödev-11",
      mesaj: "",
    };
  },
  filters: {
    tersCevir(value) {
      return value.split("").reverse().join("");
    }
  },
  mixins: [textMixin]
}
</script>

<style>
</style>
