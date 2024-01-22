<template>
	<div class="delete-anotation-modal">
		<div class="modal fade" tabindex="-1" role="dialog" :class="{ show: showModal }">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header d-flex">
						<h5 class="modal-title fw-bold">
							Deseja excluir esta anotação
						</h5>
						<button
							type="button"
							class="btn btn-close"
							@click="hideModal"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
						</button>
					</div>
					<div class="modal-body">
						<div class="d-flex flex-column w-100 text-center">
							<div class="d-flex justify-content-center w-100 mt-5">
								<span class="message-modal">
									Você está prestes a deletar uma anotação e esta ação não poderá ser desfeita. Tem certeza que deseja exclui-la?
								</span>
							</div>
						</div>
                        <div class="d-flex flex-row justify-content-end w-100 mt-5">
							<button class="btn btn-outline-info me-2" @click="hideModal">Cancelar</button>
							<button class="btn btn-danger">Excluir</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			showModal: false,
		};
	},
	methods: {
		hideModal() {
			this.showModal = false;
		},
		showModalDelete() {
			this.showModal = true;
		},
	},
};
</script>

<style scoped>
.modal {
	display: none;
	background-color: rgba(0, 0, 0, 0.5);
}

.modal.show {
	display: block;
}

.modal-content {
	background-color: #fff;
	padding: 0;
	border: 0;
}

.modal-header {
	font-weight: bold;
}

.message-modal {
    color: #A0A2A1;
}

.btn-outline-info {
	border-color: #A0A2A1;
	color: #A0A2A1;
}

.btn-danger:hover {
	border-color: #F96E53 !important;
	color: white !important;
	font-weight: 500;
}

.btn-outline-info:hover {
	border-color: #A0A2A1;
	color: white;
	background-color: #A0A2A1;
}

@media screen and (max-width: 768px) {
    .show {
        display: flex !important;
        justify-content: center !important;
        flex-direction: column !important;
    }
}

</style>