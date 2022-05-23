<template>
    <div>
        <input @input="name_changed(1, $event)" :value="ad" class="form-control m-1" type="text"
            placeholder="Ad Giriniz">
        <input @input="name_changed(2, $event)" :value="soyad" class="form-control m-1" type="text"
            placeholder="Soyad Giriniz">

    </div>
</template>

<script>
export default {
    props: ["value"],
    computed: {
        ad() {
            return this.value.split(" ")[0]
        },
        soyad() {
            return this.value.split(" ")[1]
        },
    },
    methods: {
        name_changed(event_sirasi, event) {
            let tam_ad = ""
            if (event_sirasi == 1) {
                tam_ad = event.target.value + " " + this.soyad
            }
            else if (event_sirasi == 2) {
                tam_ad = this.ad + " " + event.target.value
            }
            this.value = tam_ad
            this.$emit("input", this.value)
        }
    },
}
</script>