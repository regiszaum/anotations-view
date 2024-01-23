<template>
  <div class="anotations-view w-100">
    <div class="d-flex flex-column">
      <div class="container">

        <section class="d-flex justify-content-center my-5 has-anotations-desktop" v-if="hasAnotations">
          <TableAnotations :columns="columns" class="text-start">
            <template v-slot:default>
              <tr v-for="(anotation, index) in this.anotations" :key="index" class="text-end">
                <td>{{ anotation.id }}</td>
                <td>
                  <span class="table-data-description d-flex">
                    {{ anotation.descricao }}
                  </span>
                </td>
                <td>{{ anotation.potential_value }}</td>
                <td>{{ anotation.category }}</td>
                <td>{{ anotation.date }}</td>
                <td class="d-flex">
                  <button class="btn btn-outline-success me-2"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-outline-danger" @click="openDeleteAnotationModal(anotation.id)"><i class="bi bi-trash"></i></button>
                </td>
              </tr>
            </template>
          </TableAnotations>
        </section>

        <section class="d-flex justify-content-center my-5 has-anotations-mobile" v-if="hasAnotations">
          <h1 style="color: #595A5E;">Anotações</h1>
          <div style="height: 400px; max-height: 400px; overflow-y: scroll;">
            <div v-for="(anotation, index) in this.anotations" :key="index">
              <CardAnotations :id="anotation.id" :date="anotation.date" :descricao="anotation.descricao">
                <template v-slot:default>
                  <button class="btn ps-4 py-2 text-danger" @click="openDeleteAnotationModal(anotation.id)"><i class="bi bi-trash"></i></button>
                </template>
              </CardAnotations>
            </div>
          </div>
          <div class="d-flex justify-content-center w-100">
            <button class="btn btn-primary mt-5 btn-create-anotation py-2" style="width: 80%" @click="openCreateAnotationModal"><i class="bi bi-plus me-2"></i>Criar anotação</button>
          </div>
        </section>

        <section class="d-flex justify-content-center flex-column my-5 anotations-empty" v-if="!hasAnotations">
          <div class="d-flex flex-column justify-content-center">
            <div class="d-flex justify-content-center">
              <img src="@/assets/icons/clips.svg" alt="Ícone de clips de papel" class="icon-clip">
            </div>
            <div class="d-flex justify-content-center flex-column">
              <span class="text-center descript-title-app fw-bold">Anotações</span>
              <span class="text-center descript-registered-app">by Speedio</span>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary mt-5 btn-create-anotation" @click="openCreateAnotationModal"><i class="bi bi-plus me-2"></i>Criar anotação</button>
          </div>
        </section>
      </div>  </div>
      <CreateAnotationModal ref="CreateAnotationModal" @created="anotationCreated"/>
      <DeleteAnotationModal ref="DeleteAnotationModal" :id="this.anotationIdSelected" @deleted="anotationDelete"/>
      <LoadingComponent v-if="isLoading"/>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from "vue-toastification";
import DeleteAnotationModal from '@/components/modals/DeleteAnotationModal.vue';
import CreateAnotationModal from '@/components/modals/CreateAnotationModal.vue';
import LoadingComponent from '@/components/atoms/LoadingComponent.vue';
import TableAnotations from '@/components/molecules/TableAnotations.vue'
import CardAnotations from '@/components/atoms/CardAnotations.vue'

export default {  
  data() {
    return {
        toast: useToast(),
        anotations: [],
        isLoading: false,
        hasAnotations: false,
        anotationIdSelected: '',
        columns: [
          { label: 'ID', field: 'id' },
          { label: 'Descrição', field: 'descricao' },
          { label: 'Potencial do Negócio', field: 'potential_value' },
          { label: 'Categorização', field: 'categorização' },
          { label: 'Lembrete', field: 'date_reminder' },
          { label: 'Ações', field: 'acoes' },
        ],
    };
  },
  emits: ['logout'],
  components: { 
    CreateAnotationModal,
    DeleteAnotationModal,
    LoadingComponent,
    TableAnotations,
    CardAnotations
  },
  beforeCreate() {
		this.isLoading = true;
		axios
			.get(`${import.meta.env.VITE_API_MOCK}/anotations`)
			.then((res) => {
				this.anotations = res.data;
        if (this.anotations.length > 0) {
          this.hasAnotations = true;
        }
			})
			.catch(() => {
			})
			.finally(() => {
			  this.isLoading = false;
			});
	},
  methods: {
    refreshList() {
    this.isLoading = true;
    axios
      .get(`${import.meta.env.VITE_API_MOCK}/anotations`)
      .then((res) => {
        this.anotations = res.data;
        if (this.anotations.length > 0) {
          this.hasAnotations = true;
        }
      })
      .catch(() => {
      })
      .finally(() => {
        this.isLoading = false;
      });
    },
    openCreateAnotationModal() {
      this.$refs.CreateAnotationModal.showModalCreate();
    },
    openDeleteAnotationModal(id) {
      this.anotationIdSelected = id;
      this.$refs.DeleteAnotationModal.showModalDelete(id);
    },
    anotationCreated() {
      this.$refs.CreateAnotationModal.hideModal();
      this.refreshList();
    },
    anotationDelete() {
      this.$refs.DeleteAnotationModal.hideModal();
      this.refreshList();
    },
  },
};
</script>

<style scoped>
@import '../assets/icons.css';

.has-anotations-desktop {
  display: block;
}

.has-anotations-mobile {
  display: none !important;
}

.anotations-view {
  background-color: #F4F3F8;
  height: 100dvh;
  display: flex;
  flex-direction: column;
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

.table-data-description {
	text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
  overflow:hidden;
}

.btn-create-anotation:hover {
  transition: transform 1s;
  transform-origin: 0 0;
  transform: scale(1.2);
}

@media screen and (max-width: 768px) {
  .has-anotations-desktop {
    display: none !important;
  }

  .has-anotations-mobile {
    display: block !important;
  }

  .anotations-view {
    justify-content: unset;
  }
  
  .anotations-empty {
    height: 80dvh;
  }
}
</style>

