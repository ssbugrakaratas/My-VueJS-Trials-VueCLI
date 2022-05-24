<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>

    <div class="tag-container">
      <span class="tag">
        <span class="tag-content">Vue</span>
        <span class="tag-close">x</span>
      </span>
      <span class="tag">
        <span class="tag-content">Vue</span>
        <span class="tag-close">x</span>
      </span>
      <span class="tag">
        <span class="tag-content">Vue</span>
        <span class="tag-close">x</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Bolum-21'
    }
  }
}
</script>

<style>
div.tag-container {
  border: 1px solid #ccc;
  padding: 20px;
}

.tag {
  background-color: #fbbd08;
  padding: 10px;
  color: #000;
  cursor: default;
  font-size: 14px;
}

.tag .tag-close {
  font-size: 12px;
  cursor: pointer;
}
</style>