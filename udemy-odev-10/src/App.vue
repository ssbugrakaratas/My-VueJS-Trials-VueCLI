<template>
  <div>
    <br>
    <h1 class="text-center">{{ title }}</h1>
    <hr>
    <div class="container">
      <p v-color1>Bu directive e parametre gönderemiyoruz</p>
      <p v-color2="'lightgreen'">Gönderilen string parametre ile çalışıyor</p>
      <hr>
      <p v-color3:background="'violet'">Gönderilen argüman varsa ona göre değişerek çalışıyor</p>
      <p v-color3.gecikme="'violet'">Gönderilen argüman varsa ona göre değişerek çalışıyor</p>
      <hr>
      <p v-local_directive:background="'red'">Local-directive</p>
      <p v-local_directive.gecikme="'red'">Local-directive</p>
      <hr>
      <p v-local_directive:background.yanSon="'red'">Local-directive</p>
      <p v-local_directive.yanSon="'blue'">Local-directive</p>
      <hr>
      <!-- ÖDEV 10 v-on:click gibi çalışan bir directive oluşturma -->
      <button v-kontrol:click="tiklandi">Tıklama Kontrol</button>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Ödev-10",
    };
  },
  directives: {
    "local_directive": {
      bind(el, binding, vnode) {
        let delay = 0
        if (binding.modifiers["gecikme"]) {
          delay = 2000
        }
        if (binding.modifiers["yanSon"]) {

          let renk1 = binding.value
          let renk2 = "#fbbd08"
          let anlikrenk = renk1

          setTimeout(() => {
            setInterval(() => {
              anlikrenk == renk2 ? anlikrenk = renk1 : anlikrenk = renk2
              if (binding.arg == "background") {
                el.style.backgroundColor = anlikrenk;
              } else {
                el.style.color = binding.value;
              }
            }, 1000);
          }, delay);

        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    },
    "kontrol": {
      bind(el, binding, vnode) {
        el.onclick = function () {
          binding.value();
        }
      }
    }
  },
  methods: {
    tiklandi() {

      alert("tıklandı");
    }
  }
}
</script>

<style>
</style>
