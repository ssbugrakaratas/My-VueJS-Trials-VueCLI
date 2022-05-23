<template>
  <div>
    <br>
    <h1 class="text-center">{{ title }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center">
          <br>
          <button @click="selected_tema = 'Blue'" class="btn btn-info">Mavi Temayı Yükle</button>
          <button @click="selected_tema = 'Red'" class="btn btn-danger">Kırmızı Temayı Yükle</button>
          <button @click="selected_tema = 'Green'" class="btn btn-success">Yeşil Temayı Yükle</button>
        </div>
        <div class="col-xs-12">
          <KeepAlive>
            <component :is="selected_tema">
              <p slot="Mavi">Ben Mavi Temayım</p>
              <p slot="Kırmızı">Ben Kırmızı Temayım</p>
              <p slot="Yeşil">Ben Yeşil Temayım</p>
            </component>
          </KeepAlive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Red from './components/Red.vue';
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
export default {
  data() {
    return {
      title: "Ödev-8",
      selected_tema: "Blue"
    };
  },
  components: { Red, Blue, Green }
}
</script>

<style>
p {
  text-align: center;
}
</style>
