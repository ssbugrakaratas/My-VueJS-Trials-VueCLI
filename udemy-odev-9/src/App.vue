<template>
  <div>
    <br>
    <h1 class="text-center">{{ title }}</h1>

    <div class="container">
      <form v-if="show_form">
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <TamAd v-model="user.tam_ad"></TamAd>
            <input v-model="user.e_posta" class="form-control m-1" type="email" placeholder="E-posta Giriniz">
            <input v-model="user.sifre" class="form-control m-1" type="password" placeholder="Şifre Giriniz">
            <input v-model="user.cinsiyet" type="radio" class="form-check-input m-1" value="Erkek"> Erkek
            <input v-model="user.cinsiyet" type="radio" class="form-check-input m-1" value="Kadın"> Kadın
            <div class="text-center">
              <button @click.prevent="show_form = false" class="btn btn-success m-1">Gönder</button>
            </div>

            <!-- Soru 2 -->
            <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
            <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

            <!-- Soru 3 -->
            <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
          </div>
        </div>
      </form>
      <hr>
      <div v-if="!show_form" class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4>Girdiğiniz Bilgier</h4>
            </div>
            <div class="panel-body">
              <p>Tam Ad: {{ user.tam_ad }}</p>
              <p>E-mail: {{ user.e_posta }}</p>
              <p>Şifre: {{ user.sifre }}</p>
              <p>Cinsiyet: {{ user.cinsiyet }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TamAd from './components/TamAd.vue'
export default {
  data() {
    return {
      title: "Ödev-9",
      show_form: true,
      user: {
        tam_ad: "",
        e_posta: "",
        sifre: "",
        cinsiyet: "",
      },
    };
  },

  components: { TamAd }
}
</script>

<style>
</style>
