<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>

    <div class="tag-container">
      <span class="tag" v-for="(tag, index) in tags">
        <span class="tag-content">{{ tag }}</span>
        <span class="tag-close" @click="deleteTagWithIndex(index)">x</span>
      </span>

      <input type="text" @keyup.enter="addTag" @keyup.backspace="deleteTag">
      <div class="error" v-if="error == 'bulundu'">Bu tag zaten vardır!!!</div>
      <div class="error" v-else-if="error == 'bos'">Bos tag giremezsin</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Bolum-21',
      tags: ["tag1", "asda"],
      error: ""
    }
  },
  methods: {
    addTag(event) {
      let tagInput = event.target.value
      let matchedTag = false

      if (tagInput != null && tagInput.length > 0) {
        this.tags.forEach(tag => {
          if (tag.toLowerCase() === tagInput.toLowerCase()) {
            matchedTag = true
          }
        });

        if (!matchedTag) {
          this.tags.push(tagInput)
          event.target.value = null
        } else {
          this.error = 'bulundu'
          setTimeout(() => {
            this.error = ""
          }, 2000);
        }
      } else {
        this.error = 'bos'
        setTimeout(() => {
          this.error = ""
        }, 2000);
      }


    },
    deleteTag(event) {
      if (event.target.value.length <= 0) {
        this.tags.splice(this.tags.length - 1)
      }
    },
    deleteTagWithIndex(index) {
      this.tags.splice(index, 1)
    }
  },
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
  margin-right: 10px;
}

.tag .tag-close {
  font-size: 12px;
  cursor: pointer;
}

input {
  outline: none;
  height: 30px;
  width: 100px;
}

.error {
  font-size: 12px;
  color: red;
  margin-top: 10px;
}
</style>