<template>
    <div>
        <hr>
        <p>Lamba durumu : {{ status }}</p>
        <button class="btn btn-info" @click="lamp_changer">Lamba kapat/aç</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: true
        }
    },
    methods: {
        lamp_changer() {
            this.status = !this.status
        }
    },
}
</script>