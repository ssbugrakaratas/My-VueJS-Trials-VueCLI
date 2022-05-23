<template>
  <div>
    <p class="counter-container"> Sayaç : {{ counter }}</p>
    <p class="counter-container"> Sayaç : {{ mapString }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    //'...' yani Spread operatörler üç noktanın içini alıp bir dışındaki yere kes yapıştı yapan operatördür.
    ...mapGetters({
      mapString: 'getStringCounter'
    }),
    counter() {
      return this.$store.state.counter * 3
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
