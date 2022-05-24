<template>
    <span class="tag">
        <span class="tag-content">{{ tag }}</span>
        <span class="tag-close" @click="$emit('deleteTagWithIndexEvent', index)">x</span>
    </span>
</template>

<script>
export default {
    props: ["tag", "index"]
}
</script>

<style scoped>
.tag {
    background-color: #fbbd08;
    padding: 10px;
    color: #000;
    cursor: default;
    font-size: 14px;
    margin-right: 10px;
}

.tag .tag-close {
    font-size: 12px;
    cursor: pointer;
}
</style>