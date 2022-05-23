<template>
    <div>
        <p>{{ text }}</p>
        <div class="row">
            <Child1 @child_data="child_data = $event" :yas="yas"></Child1>
            <Child2 @yas="yas = $event"></Child2>
            <div class="text-center m-2">
                <button class="btn btn-dark" @click="text_changer">Text Değiştir</button>
                <hr>
                <p>Child-1 data : {{ child_data }}</p>
            </div>
            <Child1 @child_data="child_data = $event" :name="text"></Child1>
            <Child2></Child2>
        </div>
    </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue';
export default {
    data() {
        return {
            text: "Ben Parent Component",
            child_data: "",
            yas: null
        };
    },
    methods: {
        text_changer() {
            return this.text = "Abdülrezzak"
        }
    },
    components: { Child1, Child2 }
}
</script>

<style >
</style>
