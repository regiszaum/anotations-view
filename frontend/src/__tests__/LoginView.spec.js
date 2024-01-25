import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginView from '../views/LoginView.vue';

describe('LoginView', () => {
  it('authenticates user on valid login', async () => {
    const wrapper = mount(LoginView);
    
    // Defina as credenciais de teste
    await wrapper.setData({ formLogin: { email: 'regis@regis.com', password: '111111' } });

    console.log('Before form submit:', wrapper.vm.authenticated);

    // Dispare o evento de envio do formulário
    await wrapper.find('form').trigger('submit.prevent');
    
    // Aguarde a próxima atualização do ciclo de vida para garantir que a lógica assíncrona seja concluída
    await wrapper.vm.$nextTick();

    console.log('After form submit:', wrapper.vm.authenticated);

    // Asserções para verificar se o usuário foi autenticado e redirecionado corretamente
    console.log('Route path:', wrapper.vm.$route.path);  // Adicionado para depurar
    expect(wrapper.vm.authenticated).toBe(true);
    expect(wrapper.vm.$route.path).toBe('/anotations');
  });

  it('shows error message on invalid login', async () => {
    const wrapper = mount(LoginView);
  
    // Defina credenciais inválidas
    await wrapper.setData({ formLogin: { email: 'invalid@example.com', password: 'invalidpassword' } });
  
    // Dispare o evento de envio do formulário
    await wrapper.find('form').trigger('submit.prevent');
  
    // Aguarde a próxima atualização do ciclo de vida para garantir que a lógica assíncrona seja concluída
    await wrapper.vm.$nextTick();
  
    // Verificar se uma mensagem de erro foi exibida
    expect(wrapper.vm.toast.error('E-mail e/ou senha incorreto(s)!'));
  });
  
});