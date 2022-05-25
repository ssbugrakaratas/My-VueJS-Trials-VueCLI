<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1" v-for="post in postList">
        <img class="card-img-top" :src="post.thumbnail" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.previewText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postList: []
    }
  },
  created() {
    axios.get("https://udemy-vuejs-proje-blog-axios-default-rtdb.firebaseio.com/posts.json")
      .then(response => {
        for (let key in response.data) {
          this.postList.push({ ...response.data[key], id: key })
        }
      })
      .catch(e => {
        console.log(e);
      })
  },
}
</script>


<style>
.card {
  width: 300px;
}
</style>
