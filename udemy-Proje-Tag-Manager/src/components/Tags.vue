<template>
    <div class="tag-container">
        <Tag v-for="(tag, index) in tags" :key="index" :tagColor="color" :tag="tag" :index="index" @deleteTagWithIndexEvent="deleteTagWithIndex($event)"></Tag>

        <input type="text" @keyup.enter="addTag" @keyup.backspace="deleteTag">
        <div class="error" v-if="error == 'bulundu'">Bu tag zaten vardır!!!</div>
        <div class="error" v-else-if="error == 'bos'">Bos tag giremezsin</div>
    </div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
    data() {
        return {
            tags: [],
            error: ""
        };
    },
    props: {
        value: { required: false },
        color: { type: String, required: false, default: "bg-primary" }
    },
    created() {
        if (this.value) {
            if (this.value.length > 0) {
                this.tags = this.value.split(",")
            }
        }
    },
    methods: {
        addTag(event) {
            let tagInput = event.target.value;
            let matchedTag = false;
            if (tagInput != null && tagInput.length > 0) {
                this.tags.forEach(tag => {
                    if (tag.toLowerCase() === tagInput.toLowerCase()) {
                        matchedTag = true;
                    }
                });
                if (!matchedTag) {
                    this.tags.push(tagInput);
                    event.target.value = null;
                }
                else {
                    this.error = "bulundu";
                    setTimeout(() => {
                        this.error = "";
                    }, 2000);
                }
            }
            else {
                this.error = "bos";
                setTimeout(() => {
                    this.error = "";
                }, 2000);
            }
        },
        deleteTag(event) {
            if (event.target.value.length <= 0) {
                this.tags.splice(this.tags.length - 1);
            }
        },
        deleteTagWithIndex(index) {
            this.tags.splice(index, 1);
        }
    },
    watch: {
        tags() {
            this.$emit("input", this.tags.join(","))
        }
    },
    components: { Tag }
}

</script>

<style scoped>
div.tag-container {
    border: 1px solid #ccc;
    padding: 20px;
}

input {
    outline: none;
    height: 30px;
    width: 100px;
}

.error {
    font-size: 12px;
    color: red;
    margin-top: 10px;
}
</style>