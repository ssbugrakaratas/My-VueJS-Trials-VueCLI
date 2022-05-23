<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <slot name="Mavi"></slot>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    margin: 5px;
    background-color: blue;
}
</style>
