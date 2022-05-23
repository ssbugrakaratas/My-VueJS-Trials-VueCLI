<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>

    <Result :counter="counter"></Result>
    <hr>
    <Counter @counterEvent="counter += $event"></Counter>



  </div>
</template>

<script>
import Result from './components/Result.vue';
import Counter from './components/Counter.vue';

export default {
  name: "app",
  data() {
    return {
      title: "Bolum 18",
      counter: 0,
    };
  },
  components: { Result, Counter }
}
</script>

<style>
</style>
