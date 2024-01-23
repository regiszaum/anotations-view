<template>
    <nav class="navbar navbar-expand-md bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">
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
                    <button class="btn btn-danger" @click="doLogout"><i class="bi bi-x-octagon-fill me-2"></i>Sair</button>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { useToast } from "vue-toastification";

export default {  
  data() {
    return {
        toast: useToast(),
    };
  },
  emits: ['logout'],
  methods: {
    doLogout() {
        this.isLoading = true;
        this.toast.success('Usuário deslogado com sucesso!');
        this.$emit('logout');
        this.$router.push('/login');
        this.isLoading = false;
    },
  },
};
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

.btn-danger:hover {
    color: #1295FD !important;
    font-weight: bold;
    background-color: white !important;
}

@media screen and (max-width: 768px) {
    .btn-danger {
        /* background-color: #F8F9FA !important; */
        /* color: #1295FD !important; */
        border: none;
        /* --bs-btn-padding-x: 0; */
        /* --bs-btn-padding-y: 0; */
    }
}
</style>