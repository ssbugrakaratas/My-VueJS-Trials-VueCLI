<template>
    <div class="card">
        <div class="card-body">
            <input type="text" v-model="name">
            <p>kullanıcı (child 2 ye gönderilen) : {{ name }}</p>
            <button class="btn btn-secondary" @click="send_name"> Gonder </button>
        </div>
    </div>
</template>

<script>
import { event_bus } from '../main'

export default {
    data() {
        return {
            name: ""
        }
    },
    methods: {
        send_name() {
            event_bus.name_changer(this.name)
        }
    },
}
</script>

<style scoped>
.card-body {
    background-color: bisque;
    text-align: center;
}
</style>
