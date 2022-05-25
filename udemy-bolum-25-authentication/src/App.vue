<template>
  <div id="#app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>
    <Header></Header>
    <Homepage></Homepage>
  </div>
</template>
<script>

import Header from "./components/Header";
import Auth from "./pages/auth/Auth"
import Homepage from "./pages/Homepage"
import About from "./pages/About"

export default {
  data() {
    return {
      title: "Bolum-25"
    }
  },
  components: {
    Header,
    Auth,
    Homepage,
    About
  },
}
</script>
