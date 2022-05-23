<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>
    <div class="container">
      <div class="form-group">
        <input class="form-control" type="text" v-model="username">
      </div>
      <button class="btn btn-success" @click="save_username">Gönder</button>
    </div>
    <button class="btn btn-info" @click="get_username">Kullanıcı adı getir</button>
    <div class="container">
      <ul>
        <li v-for="i in user_liste">
          <button @click="delete_user(i)" class="btn btn-danger">Sil</button>
          {{ i.username }}
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Bolum 16',
      username: "",
      data: "",
      user_liste: [],
    }
  },
  methods: {
    save_username() {
      this.$http.post("",
        { username: this.username }).then((response) => {
          console.log(response);
        })
    },
    get_username() {
      this.$http.get("").then((response) => {
        this.user_data = response.data
        for (let key in this.user_data) {
          this.user_liste.push(this.user_data[key])
        }
      })
    },
    delete_user() {
      //firebase api nin sıkıntılarından dolayı çok uğraşasım gelmedi
      //yapılması gereken şey öncelikle alınan datanın firebase veritabanında verdiği keyler ile birlikte alınması ve silerken o saçma keylerin delete ile main url e post atılması
    }
  },
}
</script>

<style>
</style>
