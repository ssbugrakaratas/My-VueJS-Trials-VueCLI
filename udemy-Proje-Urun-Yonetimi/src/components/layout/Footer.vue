<!--Coded By Samed Buğra KARATAŞ-->

<template>
    <div class="footer">
        <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
            <span class="navbar-text mr-auto">
                <strong> <a href="https://github.com/ssbugrakaratas/My-VueJS-Trials-VueCLI/tree/master/udemy-Proje-Urun-Yonetimi"><img src="../../assets/img/GitHub-Emblem.png" style="height: 50px; width: 100px"></a> </strong> | ssbugrakaratas
            </span>
            <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
                <strong>Alış Tutarı : </strong>
                <span class="badge badge-danger">{{ getTradeResult.purchase | currency }}</span>
            </span>
            <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
                <strong>Satış Tutarı : </strong>
                <span class="badge badge-success">{{ getTradeResult.sale | currency }}</span>
            </span>
            <span class="navbar-text navbar-nav my-2 my-lg-0">
                <strong>Bakiye : </strong>
                <span class="badge badge-primary">{{ getTradeResult.balance | currency }}</span>
            </span>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            "getTradeResult"
        ])
    }
}
</script>

<style>
div.footer {
    margin-top: 100px;
}
</style>