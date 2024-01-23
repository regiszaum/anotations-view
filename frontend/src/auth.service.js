// auth.service.js

import { ref } from 'vue';

const authenticated = ref(sessionStorage.getItem('authenticated') === 'true');

export function login() {
  authenticated.value = true;
  sessionStorage.setItem('authenticated', 'true');
}

export function logout() {
  authenticated.value = false;
  sessionStorage.removeItem('authenticated');
}

export function isAuthenticated() {
  return authenticated.value;
}
