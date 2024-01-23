<template>
	<div class="anotations-card w-100 mb-2">
		<div class="card w-100">
			<div class="d-flex w-100 py-2">
				<div class="row w-100">
					<div class="col-2">
						<div class="card-image-icon py-2 ps-3">
							<img src="../../assets/icons/clips.svg" width="100%" class="icon-clip">
						</div>
					</div>
					<div class="col-8">
						<div class="d-flex flex-column justify-content-center">
							<span class="fw-bold card-description">{{ descricao }}</span>
							<span class="card-date mt-1">{{ date }}</span>
						</div>
					</div>
					<div class="col-2">
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
	},
	props: {
		descricao: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
	};
</script>

<style scoped>
@import '../../assets/icons.css';

.card-image-icon {
	width: 35px;
}

.card-description {
	color: #535257;
	font-weight: bold;
	text-decoration: underline;
	text-overflow: ellipsis;
    /* width: 370px; */
    white-space: nowrap;
    overflow:hidden;
}

.card-date {
	color: #535257;
	font-size: 10px;
}

.card {
	border: none !important;
}

.row {
	--bs-gutter-x: 0;
	margin-right: 0;
    margin-left: 0;
}
</style>
