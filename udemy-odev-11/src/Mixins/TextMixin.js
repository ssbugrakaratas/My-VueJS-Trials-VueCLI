export const textMixin = {
    computed: {
        tersCevir() {
            return this.mesaj
                .split("")
                .reverse()
                .join("");
        },
        kelimeSayiBul() {
            return this.mesaj + "( " + this.mesaj.length + " )";
        }
    }
};