<template>
    <div class="row">
        <div class="card offset-2 col-md-3">
            <div class="card-body tex-center d-flex align-items-center flex-column">
                <img height="128" class="img-responsive text-center mb-3"
                    :src="input_image == null ? '/src/assets/default.png' : input_image">
                <input ref="file" type="file" accept="image/jpeg , image/png, image/jpg" style="display: none;"
                    @change="onChange($event)" class="form-control">
                <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Resim Seç</button>
            </div>
        </div>
        <div class="col-md-5">
            <div class="col-md-11 card">
                <div class="card-body">
                    <div class="form-group">
                        <label>Ürün Adı</label>
                        <input v-model="product.name" type="text" class="form-control" placeholder="Adını giriniz">
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Ürün Adeti</label>
                            <input v-model.number="product.quantity" type="number" class="form-control"
                                placeholder="Adetini giriniz">
                        </div>
                        <div class="form-group col-md-6">
                            <label>Ürün Fiyatı</label>
                            <input v-model.number="product.price" type="number" class="form-control"
                                placeholder="Fiyatını giriniz">
                        </div>
                    </div>
                    <div class="row m-2">
                        <button @click="add_product" class="btn btn-info btn-block"
                            :disabled="button_status">Ekle!</button>
                    </div>
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
            input_image: null,
            product: {
                image: null,
                name: "",
                quantity: null,
                price: null,
            },
            button_status: false

        };
    },
    methods: {
        onChange(e) {
            const file = e.target.files[0];
            this.input_image = URL.createObjectURL(file);
        },
        add_product() {
            this.product.image = this.input_image
            //const obj = JSON.parse(JSON.stringify(this.product))
            eventBus.send_product({ ...this.product })
            //resel all data
            Object.assign(this.$data, this.$options.data())
        }
    },
    updated() {
        eventBus.$on("add_button_disabled", (value) => {
            this.button_status = value
        })
    },
}
</script>

<style>
</style>

