<template>
  <div id="app">
    <h1 class="text-center">{{ title }}</h1>
    <hr>
    <p class="text-center">Bu ödevin asıl konusu parent-child mantığı kullanımı</p>
    <hr>
    <div class="card m-5">
      <div class="card-body">
        <Event_bus_parent></Event_bus_parent>
      </div>
    </div>


  </div>
</template>

<script>
import Parent from './components/Parent.vue';
import Event_bus_parent from './components/event_bus_parent.vue';
export default {
  name: "app",
  data() {
    return {
      title: "Ödev-7"
    };
  },
  components: { Parent, Event_bus_parent }
}
</script>

<style>
p {
  text-align: center;

}
</style>
