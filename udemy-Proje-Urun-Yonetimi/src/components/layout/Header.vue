<template>
    <div class="header">
        <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #563F7A">
            <ul class="navbar-nav mr-auto">
                <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
                    <a class="nav-link">Ürün Listesi</a>
                </router-link>
                <router-link to="/urun-islemleri" tag="li" class="nav-item" active-class="active" exact>
                    <a class="nav-link">Ürün İşlemleri</a>
                </router-link>
                <router-link to="/urun-cikisi" tag="li" class="nav-item" active-class="active" exact>
                    <a class="nav-link">Ürün Çıkışı</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
li.active a {
    font-weight: bold;
    color: whitesmoke;
}
</style>