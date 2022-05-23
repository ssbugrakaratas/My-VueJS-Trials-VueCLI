<template>
  <div id="app">
    <h1 class="text-center">{{ title }}</h1>
    <hr>
    <p class="text-center">Bu ödevin asıl konusu component kullanımı</p>
    <hr>
    <div class="card m-5">
      <div class="card-body">
        <Header></Header>
        <hr>
        <Content></Content>
        <hr>
        <Footer></Footer>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Ödev-6"
    };
  },
}
</script>

<style>
</style>
