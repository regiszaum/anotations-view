<template>
  <div class="anotations-view w-100">
    <div class="d-flex flex-column justify-content-center">
      <div class="container">
        <section class="d-flex justify-content-center my-5 has-anotations" v-if="asd">
          <div class="d-flex flex-column justify-content-center">
            <div class="d-flex justify-content-center">
              <img src="@/assets/icons/clips.svg" alt="Ícone de clips de papel" class="icon-clip">
            </div>
            <div class="d-flex justify-content-center flex-column">
              <span class="text-center descript-title-app fw-bold">Anotações</span>
              <span class="text-center descript-registered-app">by Speedio</span>
            </div>
            <button class="btn btn-primary mt-5 btn-create-anotation" @click="openCreateAnotationModal"><i class="bi bi-plus me-2"></i>Criar anotação</button>
            <button class="btn btn-primary mt-5 btn-create-anotation" @click="openDeleteAnotationModal"><i class="bi bi-plus me-2"></i>Deletar anotação</button>
          </div>
        </section>
        <section class="d-flex justify-content-center my-5 anotations-empty">
          <div class="d-flex flex-column justify-content-center">
            <div class="d-flex justify-content-center">
              <img src="@/assets/icons/clips.svg" alt="Ícone de clips de papel" class="icon-clip">
            </div>
            <div class="d-flex justify-content-center flex-column">
              <span class="text-center descript-title-app fw-bold">Anotações</span>
              <span class="text-center descript-registered-app">by Speedio</span>
            </div>
            <button class="btn btn-primary mt-5 btn-create-anotation" @click="openCreateAnotationModal"><i class="bi bi-plus me-2"></i>Criar anotação</button>
            <button class="btn btn-primary mt-5 btn-create-anotation" @click="openDeleteAnotationModal"><i class="bi bi-plus me-2"></i>Deletar anotação</button>
          </div>
        </section>
      </div>  </div>
      <DeleteAnotationModal ref="deleteAnotationModalRef"/>
      <CreateAnotationModal ref="createAnotationModalRef"/>
      <LoadingComponent v-if="isLoading"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DeleteAnotationModal from '@/components/modals/DeleteAnotationModal.vue';
import CreateAnotationModal from '@/components/modals/CreateAnotationModal.vue';
import LoadingComponent from '@/components/atoms/LoadingComponent.vue';

const deleteAnotationModalRef = ref(null);

const openDeleteAnotationModal = () => {
  const deleteAnotationModal = deleteAnotationModalRef.value;
  if (deleteAnotationModal) {
    deleteAnotationModal.showModalDelete(); // Ou deleteAnotationModal.open();
  }
};

const createAnotationModalRef = ref(null);

const openCreateAnotationModal = () => {
  const createAnotationModal = createAnotationModalRef.value;
  if (createAnotationModal) {
    createAnotationModal.showModalCreate();
  }
};

</script>

<style scoped>
@import '../assets/icons.css';
.anotations-view {
  background-color: #F4F3F8;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.descript-title-app {
  color: #1295FD;
  font-size: 25px;
}

.descript-registered-app {
  color: #999E9F;
  font-size: 14px;
}

.icon-clip {
  width: 80px;
}


.btn-create-anotation:hover {
  transition: transform 1s;
  transform-origin: 0 0;
  transform: scale(1.2);
}
</style>

