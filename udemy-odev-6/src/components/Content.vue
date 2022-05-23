<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li class="list-group-item" v-for="i in 5">Item</li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Sunucu Bilgisi Güncel Değil!!</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Ödev-6'
        }
    }
}
</script>

<style>
</style>
