<template>
	<div class="create-anotation-modal">
		<div class="modal fade" tabindex="-1" role="dialog" :class="{ show: showModal }">
			<div class="modal-dialog" role="document">
				<div class="modal-content d-flex flex-column">
					<div class="modal-header d-flex">
						<h5 class="modal-title fw-bold">
							Anotações
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
							<form>
								<div class="mb-3">
									<textarea type="text" class="form-control textarea-input" id="exampleInputPassword1" placeholder="Exp.: Ao ligar fala com Luiza" rows="5" required />
								</div>
                                <div class="mb-3">
									<div class="d-flex w-100">
										<label for="exampleInputEmail1" class="form-label text-start">Potencial do negócio</label>
									</div>
                                    <input type="number" class="form-control" id="exampleInputEmail1" placeholder="R$00,00" required>
                                </div>
                                <div class="mb-3">
									<div class="d-flex w-100">
										<label for="exampleInputEmail1" class="form-label text-start">Categorização</label>
									</div>
                                    <select class="form-select form-select-md mb-3" v-model="this.formCreate.categorySelected">
										<option value="not-selected" disabled selected>Selecione uma categoria</option>
										<option value="important">Importante</option>
										<option value="call-later">Ligar depois</option>
										<option value="dont-forget">Não esquecer</option>
										<option value="urgent">Urgente</option>
									</select>
                                </div>
                                <div class="mb-3">
									<div class="d-flex w-100">
										<label for="exampleInputEmail1" class="form-label text-start">Lembrete</label>
									</div>
                                    <input type="date" class="form-control" id="exampleInputEmail1" placeholder="Selecione uma data" required>
                                </div>
                            </form>
						</div>
						<div class="d-flex flex-column justify-content-end">
							<div class="d-flex flex-row justify-content-center w-100 mt-5">
								<div class="row">
									<div class="col-2">
										<button class="btn btn-danger btn-delete me-2" @click="hideModal"><i class="bi bi-trash-fill"></i></button>
									</div>
								</div>
								<div class="col-10">
									<button class="btn btn-primary w-100">Salvar</button>
								</div>
							</div>
						
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
			formCreate: {
				description: '',
				potentialValue: '',
				categorySelected: 'not-selected',
				reminderDate: '',
			}
		};
	},
	methods: {
		hideModal() {
			this.showModal = false;
		},
		showModalCreate() {
			this.showModal = true;
			if (window.innerWidth <= 768) {
				this.disableBodyScroll();
			}
		},
		disableBodyScroll() {
			document.body.style.overflow = 'hidden';
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
	background-color: #F4F3F8;
	padding: 0;
	border: 0;
	height: 100%;
}

.modal-header {
	font-weight: bold;
	border-bottom: none;
}

.message-modal {
    color: #A0A2A1;
}

.btn-delete {
	border-radius: 50% !important;
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

label {
	color: #B2BABC;
	font-weight: 500;
}

.form-control {
	border-radius: 25px !important;
	border: none !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
}

.form-select {
	border-radius: 25px !important;
	border: none !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
}

.textarea-input {
	border-radius: 12px !important;
	resize: none;
}

@media screen and (max-width: 768px) {
    .show {
        display: flex !important;
        flex-direction: column !important;
		--bs-modal-width: 100%;
		--bs-modal-margin: 0;
		--bs-modal-border-radius: 0;
    }

	.modal {
		height: 100%;
		overflow-y: hidden;
	}
	.modal-dialog {
		height: 100%;
		overflow-y: hidden;
		width: 100%;
	}
}

</style>