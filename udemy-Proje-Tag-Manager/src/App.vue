<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>

    <Tags v-model="tags"></Tags>

  </div>
</template>

<script>
import Tags from "./components/Tags.vue";
export default {
  name: "app",
  data() {
    return {
      title: "Bolum-21",
      tags: "ali,veli"
    };
  },
  components: { Tags }
}
</script>

<style>
</style>