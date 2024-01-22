<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/molecules/HeaderComponent.vue'
</script>

<template>
  <div class="app w-100 d-flex">
    <div class="d-flex flex-column w-100">
      <HeaderComponent />
      <RouterView />
    </div>
  </div>
</template>

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
