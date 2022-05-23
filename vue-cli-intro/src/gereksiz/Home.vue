<template>
    <div>
        <lam v-for="i in 5" :key="i"></lam>
    </div>
</template>

<script>

import Lamba_comp from "./Lamba_durumlari.vue"

export default {
    data() {
        return {
            status: true
        }
    },
    methods: {

    },
    components: {
        lam: Lamba_comp
    }
}
</script>