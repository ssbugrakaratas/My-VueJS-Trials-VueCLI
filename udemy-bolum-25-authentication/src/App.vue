<template>
  <div id="#app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>
    <Header></Header>
    <router-view></router-view>

  </div>
</template>
<script>

import Header from "./components/Header";

export default {
  data() {
    return {
      title: "Bolum-25"
    }
  },
  components: {
    Header
  },
}
</script>
