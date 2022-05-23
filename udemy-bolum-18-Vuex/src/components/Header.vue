<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <router-link active-class="active" to="" exact tag="li" class="nav-item">
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link active-class="active" to="/user" tag="li" class="nav-item">
                        <a class="nav-link">User List</a>
                    </router-link>
                    <router-link active-class="active" to="/user/5" tag="li" class="nav-item">
                        <a class="nav-link">User 5</a>
                    </router-link>
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>

</script>

<style>
li {
    margin-right: 10px;
}
</style>