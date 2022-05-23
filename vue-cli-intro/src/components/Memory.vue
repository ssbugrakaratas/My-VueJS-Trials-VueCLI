<template>
    <div>
        <h1 class="text-center">Selam Ben Memory</h1>
        <div class="memory">
            <slot name="heading"></slot>
        </div>
        <div class="memory">
            <slot name="content"></slot>
        </div>
        <div class="memory">
            <slot></slot>
        </div>
        <div class="memory">
            <slot name="Benim_adimda_bir_slot_yok">
                <p>Ben bir slot defaultum.</p>
                <p>İçeriğim bulunamadı için beni görüyorsun...</p>
            </slot>
        </div>

    </div>
</template>


<script></script>



<style scoped>
div .memory {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 10px 20px;
    margin-top: 20px;
    text-align: center;
}
</style>