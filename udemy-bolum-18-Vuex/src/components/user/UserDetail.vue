<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <p>User ID:{{ $route.params.id }}</p>
    <!--
    <router-link tag="button" class="btn btn-warning" :to="'/user/' + $route.params.id + '/edit'">
      Düzenle
    </router-link>
    -->
    <router-link tag="button" class="btn btn-warning" :to="guncelleIcinToBindingi">
      Düzenle
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      guncelleIcinToBindingi: {
        name: 'kullaniciGuncelle',
        params: { id: this.$route.params.id },
        query: { name: 'bugra', lastname: 'karatas' },
        hash: '#data'
      }
    }
  },
  //component bazlı olarak bir sonra sayfaya geçişi engellemek için
  beforeRouteEnter(to, from, next) {
    console.log("component kontrol")
    next()
  }
}
</script>
<style>
</style>