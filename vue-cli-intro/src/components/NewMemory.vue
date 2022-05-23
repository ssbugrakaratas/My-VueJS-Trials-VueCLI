<template>
    <div>
        <h3>New Memory Componenti</h3>
    </div>
</template>


<script>
export default {
    destroyed() {
        console.log("Destroyed!!!!!!!!!")
    },
    activated() {
        console.log("Activated!!!!!!!!!")
    },
    deactivated() {
        console.log("Deactivated!!!!!!!!!")
    },
}
</script>



<style scoped>
</style>