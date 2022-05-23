<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>

    <router-view name="header-top"></router-view>
    <router-view></router-view>
    <router-view name="header-bottom"></router-view>


  </div>
</template>

<script>
import Home from './components/Home.vue'
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';
import Header from './components/Header.vue';
export default {
  name: "app",
  data() {
    return {
      title: "Bolum 17",
    };
  },
  components: { Home, User, UserDetail, UserEdit, UserStart, Header }
}
</script>

<style>
</style>
