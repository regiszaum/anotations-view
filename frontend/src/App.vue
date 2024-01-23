
<template>
  <div class="app w-100 d-flex flex-column">
    <HeaderComponent v-if="authenticated" @logout="doLogout"/>
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/molecules/HeaderComponent.vue';
import { isAuthenticated, logout } from './auth.service';

export default {  
  data() {
    return {
      authenticated: isAuthenticated()
    };
  },
  components: { HeaderComponent },
  methods: {
    doLogout() {
      logout();
      this.authenticated = false;
    }
  },
};
</script>

<style>
.btn {
  border-radius: 25px !important;
}


.btn-primary {
  background-color: #1295FD !important;
  border-color: #1295FD !important;
  color: white !important;
}

.btn-danger {
  background-color: #F96E53 !important;
  border-color: #F96E53 !important;
}
.btn-info {
  color: white !important;
}
</style>
