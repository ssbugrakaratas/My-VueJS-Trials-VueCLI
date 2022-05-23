<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button>
  </div>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      //this.$store.state.counter++
      this.$store.commit("updateCounter", 99)
    },
    decrementCounter() {
      this.$store.commit("updateCounter", -66)
    }
  }
}
</script>

<style>
</style>
