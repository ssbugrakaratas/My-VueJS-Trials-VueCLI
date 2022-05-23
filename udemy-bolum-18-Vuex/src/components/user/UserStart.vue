<template>
  <div class="container">
    <h3>User Start Component</h3>
    <hr>
    <ul class="list-group">
      <router-link v-for="user_id in 5" :key="user_id" active-class="active" :to="'/user/' + user_id" exact tag="li"
        class="list-group-item">
        <a>User {{ user_id }}</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style>
</style>