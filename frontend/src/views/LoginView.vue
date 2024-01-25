<template>
    <div class="login-view w-100 d-flex flex-column justify-content-center">
        <div class="container">
                
                <div class="d-flex justify-content-center w-100">
                    <div class="card card-app px-5 py-5 d-flex my-4">
                        <div class="d-flex justify-content-center">
                            <img src="@/assets/icons/clips.svg" alt="Ícone de um clips de papel" class="icon-clip">
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
                            <form @submit.prevent="doLogin">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label fw-bold">Email:</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: anotacoes@speed.com.br" v-model="this.formLogin.email" required>
                                    <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label fw-bold">Senha:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="this.formLogin.password" autocomplete="current-password" required>
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
                            <form @submit.prevent="createAccount">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label fw-bold">Seu melhor email:</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: anotacoes@speed.com.br" v-model="this.formCreate.email" required>
                                    <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label fw-bold">Sua senha:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="this.formCreate.password" required>
                                </div>
                                <div class="d-flex w-100">
                                    <div class="d-flex flex-column justify-content-center w-100">
                                        <button type="submit" class="btn btn-info mb-2 fw-bold"><i class="bi bi-person-plus me-2"></i>Criar Conta</button>
                                        <button type="button" class="btn btn-danger fw-bold" @click="stepLogin = 1">Voltar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            
        </div>
    </div>
    <LoadingComponent v-if="isLoading"/>
</template>

<script>
import axios from 'axios';
import LoadingComponent from '@/components/atoms/LoadingComponent.vue';
import { useToast } from "vue-toastification";
import { isAuthenticated, login } from '../auth.service';

export default {  
  data() {
    return {
      isLoading: false,
      stepLogin: 1,
      users: [],
      toast: useToast(),
      formLogin: {
        email: '',
        password: ''
      },
      formCreate: {
        email: '',
        password: ''
      },
      authenticated: isAuthenticated()
    };
  },
  components: { LoadingComponent },
  methods: {
    doLogin() {
      this.isLoading = true;
      axios
        .get(`${import.meta.env.VITE_API_MOCK}/users`)
        .then((res) => {
            console.log(res.data);
            this.users = res.data;

            const loginEmail = this.formLogin.email;
            const loginPassword = this.formLogin.password;

            // Verificar se existe um usuário com o email e senha fornecidos
            const userExists = this.users.some(user => {
                console.log(user);
            return user.email === loginEmail && user.password === loginPassword;
            });

            if (userExists) {
            // Usuário autenticado
            this.toast.success('Usuário autenticado!');
            sessionStorage.setItem('authenticated', 'true');
            this.$root.$data.authenticated = true;
            login();

            this.$router.push('/anotations');
            } else {
            // Usuário não encontrado
            this.toast.error('E-mail e/ou senha incorreto(s)!');
            }
        })
        .catch(() => {
            this.toast.error('Erro ao fazer a requisição.');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    createAccount() {
      this.isLoading = true;
      axios
        .post(`${import.meta.env.VITE_API_MOCK}/users`, {
            email: this.formCreate.email,
            password: this.formCreate.password
        })
        .then((res) => {
            console.log(res);
            // Usuário autenticado
            this.toast.success('Usuário criado com sucesso!');
            this.stepLogin = 1;
        })
        .catch(() => {
            this.toast.error('Erro ao fazer a requisição.');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
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

@media screen and (max-width: 768px) {
    .login-view {
        margin-bottom: 1.5rem;
    }
}
</style>