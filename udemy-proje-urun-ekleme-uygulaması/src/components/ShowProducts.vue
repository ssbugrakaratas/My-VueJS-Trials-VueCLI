<template>
    <div>
        <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
        <hr>
        <div class="row product-container">
            <div v-for="products in product_list" class="col-md-2 card">
                <img class="card-img-top" :src="products.image" alt="ürün resmi bulunamadı.">
                <div class="card-body">
                    <h5 class="card-title">{{ products.name }}</h5>
                    <small>
                        <strong>Adet : </strong> {{ products.quantity }}
                    </small>
                    <br>
                    <small>
                        <strong>Fiyat : </strong> {{ products.price }}
                    </small>
                    <br>
                    <small>
                        <strong>Tutar : </strong> {{ products.price * products.quantity }}
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    data() {
        return {
            product_list: []
        };
    },
    created() {
        eventBus.$on("sent_product", (value) => {
            this.product_list.push(value)
        })

    },
    watch: {
        product_list: function () {
            var urun_count = this.product_list.length
            eventBus.send_product_count(urun_count)
        }
    }
}
</script>

<style>
</style>

