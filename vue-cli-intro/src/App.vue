<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-offset-6">
          <button @click="selected_comp = 'Memory'" class="btn btn-sm btn-success"> Memory </button>
          <button @click="selected_comp = 'NewMemory'" class="btn btn-sm btn-info"> NewMemory </button>
          <button @click="selected_comp = 'Author'" class="btn btn-sm btn-danger"> Author </button>
          <p>{{ selected_comp }}</p>
          <keep-alive>
            <component :is="selected_comp">
              <h3 slot="heading">Slots</h3>
              <p slot="content">Ben bir slotum</p>
              <p>Ben bir default slotum</p>
            </component>
          </keep-alive>
          <!---
          <Memory>
            <h3 slot="heading">Slots</h3>
            <p slot="content">Ben bir slotum</p>
            <p>Ben bir default slotum</p>
          </Memory>
          <Author></Author>
          <NewMemory></NewMemory>
          --->
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Memory from "./components/Memory.vue";
import Author from "./components/Author.vue";
import NewMemory from "./components/NewMemory.vue";

export default {
  data: function () {
    return {
      title: "Selam",
      selected_comp: "Memory"
    };
  },
  components: { Memory, Author, NewMemory }
}





</script>
