<template>
    <div class="login-view w-100 d-flex flex-column justify-content-center">
        <div class="container">
                
                <div class="d-flex justify-content-center w-100">
                    <div class="card card-app px-5 py-5 d-flex my-4">
                        <div class="d-flex justify-content-center">
                            <img src="@/assets/icons/clips.svg" alt="" class="icon-clip">
                        </div>
                        <div class="d-flex justify-content-center">
                            <h3 class="title-app">Anotações</h3>
                            <span class="ms-1">App</span>
                        </div>
                    </div>
                </div>
                
                <section class="section-login" v-if="stepLogin == 1">
                    <div class="d-flex justify-content-center w-100">
                        <div class="card px-5 py-5">
                            <form @submit.prevent="">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label fw-bold">Email:</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: anotacoes@speed.com.br" required>
                                    <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label fw-bold">Senha:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" required>
                                </div>
                                <div class="d-flex w-100">
                                    <div class="d-flex flex-column justify-content-center w-100">
                                        <button type="submit" class="btn btn-primary mb-2 fw-bold"><i class="bi bi-door-open me-2"></i>Entrar</button>
                                        <button type="button" class="btn btn-info fw-bold" @click="stepLogin = 2"><i class="bi bi-person-plus me-2"></i>Criar Conta</button>
                                    </div>
                                </div>
                                </form>
                        </div>
                    </div>
                </section>

                <section class="section-create" v-if="stepLogin == 2">
                    <div class="d-flex justify-content-center w-100">
                        <div class="card px-5 py-5">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label fw-bold">Seu melhor email:</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: anotacoes@speed.com.br" required>
                                    <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label fw-bold">Sua senha:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" required>
                                </div>
                                <div class="d-flex w-100">
                                    <div class="d-flex flex-column justify-content-center w-100">
                                        <button type="submit" class="btn btn-info mb-2 fw-bold" @click="createAccount"><i class="bi bi-person-plus me-2"></i>Criar Conta</button>
                                        <button type="button" class="btn btn-danger fw-bold" @click="stepLogin = 1">Voltar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const stepLogin = ref(1);
</script>

<style scoped>
@import '../assets/icons.css';

.icon-clip {
    width: 100px;
    height: 100px;
}

.title-app {
    color: #1295FD;
}

.card {
    --bs-card-border-color: #1295FD;
}

.card-app {
    width: 445px;
}

input {
    border-radius: 25px !important;
}

</style>