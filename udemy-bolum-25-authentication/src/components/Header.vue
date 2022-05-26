<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary shadow mb-5">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/auth" tag="li" class="nav-item" active-class="active" exact>
          <a class="nav-link">Auth İşlemleri</a>
        </router-link>
        <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
          <a class="nav-link">Anasayfa</a>
        </router-link>
        <router-link to="/about" tag="li" class="nav-item" active-class="active" exact>
          <a class="nav-link">Hakkımda</a>
        </router-link>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link" href="#">Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout")
      this.$router.replace("/auth")
    }
  },
  computed: {
    logoutClass() {
      return {
        'd-none': this.$store.getters.getToken == "" ? true : false
      }
    }
  }
}
</script>
<style scoped>
li.active a {
  font-weight: bold;
  color: whitesmoke;
}
</style>