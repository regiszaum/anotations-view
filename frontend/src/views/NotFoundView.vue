<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="not-found-view w-100 d-flex flex-column justify-content-center">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="my-5">
          <div class="d-flex flex-column justify-content-center">
            <h1>Página não encontrada</h1>
            <div class="d-flex justify-content-center">
              <img src="../assets/404.png" class="image-404">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-404 {
  height: auto;
  width: 500px;
}
.not-found-view {
  height: 100dvh !important;
  background-color: #F4F3F8;
}

@media screen and (max-width: 768px) {
  .image-404 {
    width: 200px;
  }
}
</style>
