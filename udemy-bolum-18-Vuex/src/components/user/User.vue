<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <router-view></router-view>
    <hr>
    <button class="btn btn-success" @click="navigate_to_home">Home git</button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    navigate_to_home() {
      //this.$router.push("/")
      //this.$router.push({ path: "/" })
      this.$router.push({ name: "anaSayfa" })
    }
  },
  watch: {
    "$route"(to, from) {
      this.id = to.params.id
    }
  }
}
</script>
<style>
</style>