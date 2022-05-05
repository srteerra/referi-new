<template>
  <div class="mb-5">
    <div class="card border-0 bg-transparent" style="width: 22rem">
      <img
        src="../assets/images/banner-clash-royal.jpg"
        class="card-img-top"
        alt="tournament image"
      />
      <div class="card-body p-4">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text fw-light">
          {{ desc }}
        </p>
        <div class="row pt-3">
          <div class="col d-flex align-items-center">
            <img
              src="../assets/images/icono_negative.png"
              class="card-img-top img-fluid"
              alt="..."
              style="max-width: 2rem"
            />
          </div>
          <div
            v-if="points == 0"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 0.5"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star-half fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 1"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 1.5"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star-half fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 2"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 2.5"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star-half fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 3"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 3.5"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star-half fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 4"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-regular fa-star fa-xl"></i>
          </div>
          <div
            v-if="points == 4.5"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star-half fa-xl"></i>
          </div>
          <div
            v-if="points == 5"
            class="col d-flex align-items-center"
            style="color: #ff9200"
          >
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
            <i class="fa-solid fa-star fa-xl"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    points: Number,
  },
};
</script>

<style lang="scss"></style>
