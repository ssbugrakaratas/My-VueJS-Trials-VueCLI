<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>

    <Result :counter="counter"></Result>
    <hr>
    <Result2 :counter="counter"></Result2>
    <hr>
    <Counter @counterEvent="counter += $event"></Counter>



  </div>
</template>

<script>
import Result from './components/Result.vue';
import Counter from './components/Counter.vue';
import Result2 from './components/Result2.vue';

export default {
  name: "app",
  data() {
    return {
      title: "Bolum 18",
      counter: 0,
    };
  },
  components: { Result, Counter, Result2 }
}
</script>

<style>
</style>
