<!--Coded By Samed Buğra KARATAŞ-->

<template>
    <div class="sell">
        <div class="loading" :style="isLoading">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                    <div class="card-body">
                        <h3>Ürün Çıkışı</h3>
                        <hr />
                        <div class="form-group">
                            <label>Ürün Adı</label>
                            <select @change="productSelected" v-model="selectedProduct" class="form-control">
                                <option disabled selected>Seçiniz...</option>
                                <option :value="product.key" v-for="product in getProducts" :disabled="product.quantity <= 0">{{ product.name }}</option>
                            </select>
                        </div>
                        <transition name="fade" mode="out-in">
                            <div class="card mb-2 border border-danger" v-if="product != null">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <div class="mb-3">
                                                <span class="badge badge-info">Stok : {{ product.quantity }}</span>
                                                <span class="badge badge-primary">Fiyat : {{ product.price | currency }}</span>
                                            </div>
                                            <p class="border border-warning p-2 text-secondary">{{ product.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <div class="form-group">
                            <label>Adet</label>
                            <input v-model="sell_count" type="number" class="form-control" placeholder="Ürün adetini giriniz.." />
                        </div>
                        <hr />
                        <button @click="save" class="btn btn-primary" :disabled="saveButtonEnabled">Kaydet</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            selectedProduct: null,
            saveButtonClicked: false,
            product: null,
            sell_count: null
        }
    },
    computed: {
        ...mapGetters(["getProducts"]),
        saveButtonEnabled() {
            if (this.sell_count > 0 && this.selectedProduct != null) {
                return false;
            } else {
                return true;
            }
        },
        isLoading() {
            if (this.saveButtonClicked) {
                return {
                    display: "block"
                }
            } else {
                return {
                    display: "none"
                }
            }
        }
    },
    methods: {
        productSelected() {
            this.product = this.$store.getters.getProduct(this.selectedProduct)[0]

        },
        save() {
            let product = {
                key: this.selectedProduct,
                count: this.sell_count
            }
            this.saveButtonClicked = true
            this.$store.dispatch("sellProduct", product)
        }
    },
    beforeRouteLeave(to, from, next) {
        if (!this.saveButtonClicked && (this.sell_count > 0 || this.selectedProduct != null)) {
            if (confirm("kaydedilmemiş değişiklikler var. Yinede çıkış yapacak mısınız?")) {
                next()
            }
            else {
                next(false)
            }
        } else {
            next()
        }
    }
}
</script>

<style scoped>
.border-danger {
    border-style: dashed !important;
}
</style>