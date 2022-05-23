<template>
    <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" :style="{ 'width': (count * (100 / max_count)) + '%' }"
            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            {{ count }}/{{ max_count }}
        </div>
    </div>


</template>

<script>
import { eventBus } from '../main'

export default {
    data() {
        return {
            count: 0,
            max_count: 5
        }
    },
    created() {
        eventBus.$on("sent_product_count", (value) => {
            this.count = value
        })
    },
    watch: {
        count() {
            if (this.count >= this.max_count) {
                alert("maximum ürün girşini yaptınız")
                eventBus.send_add_button_status(true)
            }
        }
    }
}
</script>

<style>
</style>

