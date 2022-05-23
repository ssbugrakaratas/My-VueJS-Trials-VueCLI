<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button>
    <hr>
    <p>action buttons</p>
    <button class="btn btn-success" @click="increase">+ Arttır</button>
    <button class="btn btn-danger" @click="decrease">- Azalt</button>
    <p>async action buttons</p>
    <button class="btn btn-success" @click="increaseAsync">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseAsync">- Azalt</button>

  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      'incrementCounter',
      'decrementCounter'
    ]),
    increase() {
      this.$store.dispatch("increase")
    },
    decrease() {
      this.$store.dispatch("decrease")
    },
    increaseAsync() {
      this.$store.dispatch("increaseAsync")
    },
    decreaseAsync() {
      this.$store.dispatch("decreaseAsync")
    }
    /*
    incrementCounter() {
      //this.$store.state.counter++
      this.$store.commit("incrementCounter")
    },
    decrementCounter() {
      this.$store.commit("decrementCounter")
    }
    */
  }
}
</script>

<style>
</style>
