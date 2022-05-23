<template>
    <div class="card">
        <div class="card-body">
            <p>Kullanıcı (parent tan gelen ): {{ name }}</p>
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
    props: {

    },
    created() {
        event_bus.$on("name_changed", (value) => {
            this.name = value
        })
    },
}
</script>

<style scoped>
.card-body {
    background-color: coral;
}
</style>
