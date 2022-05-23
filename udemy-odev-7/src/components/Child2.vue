<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ text }}</p>
        <input class="form-control" type="number" v-model="yas">
        <button @click="send_to_parent" type="button" class="btn btn-secondary m-2">Yaş Gönder</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "Ben Child-2 Component",
            yas: ""
        }
    },
    methods: {
        send_to_parent() {
            console.log(this.yas)
            this.$emit("yas", this.yas)
        }
    },
}
</script>

<style scoped>
div {
    background-color: red;
    text-align: center;
}
</style>
