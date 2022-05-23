<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ text }}</p>
        <p>Kullanıcı Yaşı : {{ yas }}</p>
        <p>Kullanıcı adı : {{ name }}</p>
        <p>Tersten isim : {{ rev_name() }}</p>
        <button class="btn btn-info m-1" @click="send_to_parent">Parent a veri gönder</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "Ben Child-1 Component"
        }
    },
    //props lar dışardan değişken almak için kullanılır.
    props: {
        yas: String,
        name: {
            type: String,
            required: false,
            default: "Değer bulunamadı"
        }
    },
    methods: {
        rev_name() {
            return this.name.split("").reverse().join("")
        },
        send_to_parent() {
            this.$emit("child_data", "ada")
        }
    },
    created() {
        event_bus.$on("yas", () => {

        })
    },
}
</script>

<style scoped>
div {
    background-color: blue;
}
</style>
