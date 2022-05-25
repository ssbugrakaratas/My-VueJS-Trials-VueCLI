<template>
  <div id="app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>

    <div class="container">
      <h3 class="text-center mt-5">Vuelidate ile Form Kontrolü</h3>
      <div class="d-flex justify-content-center align-content-center flex-row">
        <div class="card p-4 m-5 shadow" style="width: 400px">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label>E-posta Adresiniz</label>
              <input @blur="$v.email.$touch()" v-model="email" type="email" class="form-control" :class="{ 'is-invalid': $v.email.$error }" placeholder="E-posta adresini giriniz">
              <small v-if="!$v.email.required" class="form-text text-danger">Bu alan zorunludur!!!</small>
              <small v-if="!$v.email.email" class="form-text text-danger">Bu alan email olmak zorundadır!!!</small>
            </div>
            <div class="form-group">
              <label>Şifre</label>
              <input @blur="$v.password.$touch()" v-model="password" type="password" class="form-control" :class="{ 'is-invalid': $v.password.$error }" placeholder="Şifrenizi giriniz">
              <small v-if="!$v.password.required" class="form-text text-danger">Bu alan zorunludur!!!</small>
              <small v-if="!$v.password.numeric" class="form-text text-danger">Bu alan sayı olmak zorundadır!!!</small>
              <small v-if="!$v.password.minLength" class="form-text text-danger">Bu alana minimum {{ $v.password.$params.minLength.min }} hane girin!!!</small>
              <small v-if="!$v.password.maxLength" class="form-text text-danger">Bu alana maximum {{ $v.password.$params.maxLength.max }} hane girin!!!</small>
            </div>
            <div class="form-group">
              <label>Şifre Tekrar</label>
              <input @blur="$v.repassword.$touch()" v-model="repassword" type="password" class="form-control" :class="{ 'is-invalid': $v.repassword.$error }" placeholder="Şifrenizi tekrar giriniz">
              <small v-if="!$v.repassword.required" class="form-text text-danger">Bu alan zorunludur!!!</small>
              <small v-if="!$v.repassword.numeric" class="form-text text-danger">Bu alan sayı olmak zorundadır!!!</small>
              <small v-if="!$v.repassword.minLength" class="form-text text-danger">Bu alana minimum {{ $v.repassword.$params.minLength.min }} hane girin!!!</small>
              <small v-if="!$v.repassword.maxLength" class="form-text text-danger">Bu alana maximum {{ $v.repassword.$params.maxLength.max }} hane girin!!!</small>
              <small v-if="!$v.repassword.sameAs" class="form-text text-danger">Bu alan ile yukarıdaki şifre aynı olmalıdır</small>
            </div>
            <div class="form-group">
              <label>Yaş</label>
              <input @blur="$v.yas.$touch()" v-model="yas" type="text" class="form-control" :class="{ 'is-invalid': $v.yas.$error }" placeholder="Yaşınızı giriniz">
              <small v-if="!$v.yas.required" class="form-text text-danger">Bu alan zorunludur!!!</small>
              <small v-if="!$v.yas.numeric" class="form-text text-danger">Bu alan sayı olmak zorundadır!!!</small>
              <small v-if="!$v.yas.between" class="form-text text-danger">Bu alan {{ $v.yas.$params.between.min }}-{{ $v.yas.$params.between.max }} aralığında olmalıdır</small>
            </div>
            <div class="form-group">
              <label>Kayıt olmak istediğiniz kategori</label>
              <select v-model="$v.selectedCategory.$model" class="form-control">
                <option selected disabled>Seçiniz...</option>
                <option v-for="category in categories" :value="category">{{ category }}</option>
              </select>
              <small v-if="!$v.selectedCategory.checked" class="form-text text-danger">Bugun yalnızca yazılım seçilebilir !!!</small>
            </div>
            <label>Hobiler</label>
            <div>
              <ul class="list-group mt-3 mb-3 border-0" v-if="hobbies.length > 0">
                <li v-for="(hobby, index) in hobbies" class="list-group-item d-flex pl-2">
                  <input type="text" class="form-control mr-2" v-model="hobby.value">
                  <button class="btn btn-sm btn-danger rounded-0" @click="hobbies.splice(index, 1)">Sil</button>
                </li>
              </ul>
              <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm">Hobi Ekle</a>
            </div>

            <div class="text-center">
              <button class="btn btn-outline-success rounded-0">Kaydet</button>
            </div>
          </form>
        </div>
        <div class="card p-4 m-5 shadow" style="width: 400px;">
          <p>{{ $v.selectedCategory }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, numeric, minLength, maxLength, sameAs, between } from "vuelidate/lib/validators"

export default {
  name: 'app',
  data() {
    return {
      title: 'Bolum-24 Vuelidate',
      email: null,
      password: null,
      repassword: null,
      yas: null,
      selectedCategory: null,
      categories: ["Yazılım", "Donanım", "Cloud", "Sunucular", "Unix", "Linux", "Mac OS", "Windows"],
      hobbies: []
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      numeric,
      minLength: minLength(4),
      maxLength: maxLength(6)
    },
    repassword: {
      required,
      numeric,
      minLength: minLength(4),
      maxLength: maxLength(6),
      //sameAs: sameAs('password')
      //şifrenin sonunun 88 ile bittiği durumda true döndür
      sameAs: sameAs(vm => {
        return vm.password + "88"
      })
    },
    yas: {
      required,
      numeric,
      between: between(18, 60)
    },
    selectedCategory: {
      checked(val, vm) {
        return vm.selectedCategory === "Yazılım" ? true : false
      }
    }
  },
  methods: {
    onSubmit() {
      let form = {
        email: this.email,
        password: this.password,
        category: this.category,
        hobbies: this.hobbies,
      }
      console.log(form)
    },
    newHobby() {
      let hobby = {
        id: Math.random() * Math.random() * 1000,
        value: ''
      }
      this.hobbies.push(hobby)
    }
  }
}
</script>

<style>
</style>
