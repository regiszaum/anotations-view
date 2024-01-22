<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../../assets/icons/clips.svg" alt="Bootstrap" width="30" height="30">
                <span class="title-brand">Speedio</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login" exact-active-class="active">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/anotations" exact-active-class="active">Anotações</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/anotatsions" exact-active-class="active">Perfil</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
img {
  color: #9BA1A4;
  filter: invert(74%) sepia(9%) saturate(158%) hue-rotate(155deg) brightness(86%) contrast(86%);
}

.title-brand {
    color: #1295FD !important;
}

.nav-link {
    color: #1295FD;
}

.nav-link:hover {
    font-weight: bold;
}

.active {
    font-weight: bold;
    color: #1295FD !important;
}
</style>