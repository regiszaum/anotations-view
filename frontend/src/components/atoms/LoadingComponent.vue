<template>
	<div class="loading-container">
		<div class="loading-spinner">
		</div>
	</div>
</template>
  
<style scoped>
.loading-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 9999;
}

.loading-spinner {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 4px solid #fff;
	border-top-color: #999;
	animation: spin 0.8s ease-in-out infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
