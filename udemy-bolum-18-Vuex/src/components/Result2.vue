<template>
  <div>
    <p class="counter-container"> Sayaç2 : {{ counter }}</p>
    <p class="counter-container"> Sayaç2 : {{ stringCounter }}</p>
  </div>
</template>

<script>

export default {
  computed: {
    counter() {
      //return this.$store.state.counter * 5
      return this.$store.getters.getCounterCarpimBes
    },
    stringCounter() {
      //return this.$store.state.counter * 5
      return this.$store.getters.getStringCounter
    }
  }
}


</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
