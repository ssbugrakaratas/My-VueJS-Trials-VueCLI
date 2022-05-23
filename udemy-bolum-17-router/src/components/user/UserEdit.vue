<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>Ad : {{ $route.query.name }}</p>
    <p>Soyad : {{ $route.query.lastname }}</p>
    <button class="btn btn-danger" @click="onayla = true">Onayla</button>
    <div style="height:1000px"></div>
    <p id="data">selam ben scroll için yazıyım</p>

  </div>
</template>
<script>
export default {
  data() {
    return {
      onayla: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.onayla) {
      next()
    }
    else {
      if (confirm("emin misin???")) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>
