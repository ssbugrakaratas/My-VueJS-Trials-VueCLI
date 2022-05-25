<template>
  <div id="#app">
    <div class="container text-center">
      <br>
      <h1>{{ title }}</h1>
      <hr>
    </div>
    <Header></Header>
    <router-view></router-view>

  </div>
</template>
<script>

import Header from "./components/Header";

export default {
  data() {
    return {
      title: "Bolum-25"
    }
  },
  components: {
    Header
  },
}
</script>
<!--
bu alan firestore ayarları

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC10xCH5qDLskp59AosjvJnqs9WtxUtuK4",
    authDomain: "udemy-vuejs-proje-auth.firebaseapp.com",
    projectId: "udemy-vuejs-proje-auth",
    storageBucket: "udemy-vuejs-proje-auth.appspot.com",
    messagingSenderId: "251884020749",
    appId: "1:251884020749:web:da1f24ddcd2f05f82ea144",
    measurementId: "G-9F2ZWVKVKZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
-->