<template>
    <div class="row">
        <p> Burada child 2 de görmek için isim gönderiyor ve child 2 den yas alınıyor</p>
        <div class="col">
            <Event_bus_child_1></Event_bus_child_1>
        </div>
        <div class="col">
            <Event_bus_child_2></Event_bus_child_2>
        </div>
    </div>
</template>

<script>
import Event_bus_child_1 from './event_bus_child_1.vue';
import Event_bus_child_2 from './event_bus_child_2.vue';
export default {
    data() {
        return {

        }
    },
    components: { Event_bus_child_1, Event_bus_child_2 },

}
</script>

<style >
</style>
