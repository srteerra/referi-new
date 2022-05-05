<template>
  <section class="container pt-5 mt-4" id="GameView">
    <!-- <router-view></router-view> -->
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="title">EN TENDENCIA</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <img
            src="../assets/images/banner-clash-royal.jpg"
            class="img-fluid"
            alt="clash"
          />
        </div>
        <div class="col mt-5 mt-lg-0 ps-0 ps-lg-5">
          <div class="row d-flex align-items-center">
            <div class="col">
              <h1 class="title">WORLD CHAMPIONSHIP</h1>
            </div>
            <div class="col d-flex justify-content-end">
              <i class="fa-regular fa-heart fa-2xl"></i>
            </div>
          </div>
          <div class="d-flex justify-content-between py-4">
            <div class="d-flex align-items-center">
              <div class="border border-1 rounded-circle p-3 me-3">
                <i class="fa-solid fa-mobile-screen fa-xl"></i>
              </div>
              <div class="border border-1 rounded-circle p-3 me-3">
                <i class="fa-solid fa-bolt-lightning fa-xl"></i>
              </div>
              <div class="border border-1 rounded-circle p-3">
                <i class="fa-solid fa-medal fa-xl"></i>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <h2 style="color: #ff9200">FREE</h2>
            </div>
          </div>
          <div>
            <p class="fst-italic">
              Una breve descripcion del torneo para llenar el
            </p>
            <p class="fw-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
              fuga voluptate! Harum omnis blanditiis vel, modi repudiandae eius
              repellat minima.
            </p>
          </div>
          <div class="row pt-4">
            <div class="col-2">
              <img
                src="../assets/images/icono_negative.png"
                class="img-fluid"
                alt="..."
                style="max-width: 4rem"
              />
            </div>
            <div class="col-5">
              <h3>REFERIGAMES</h3>
              <p>300 eventos</p>
              <span
                ><i class="fa-solid fa-star" style="color: #ff9200"></i>
                4.9</span
              >
            </div>
            <div class="col-4">
              <rBtnPrimary text="Inscribete" style="width: 100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row my-5 justify-content-end">
        <div class="col-12 col-lg-6 d-flex">
          <div class="input-group mb-3">
            <select
              class="form-select text-light border-0 rounded-pill"
              aria-label="Select category"
              style="background-color: #062e42"
            >
              <option selected>Todas las categorias</option>
            </select>
            <input
              type="text"
              class="form-control ms-5 text-light border-0 rounded-pill"
              aria-label="button for search"
              aria-describedby="button-searchby"
              style="background-color: #062e42"
            />
            <button
              class="btn btn-outline-secondary bg-transparent border-0 ms-2"
              type="button"
              id="button-searchby"
            >
              <span><i class="fa-solid fa-magnifying-glass fa-xl"></i></span>
            </button>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col d-flex flex-wrap justify-content-between">
          <rGameCard
            title="SQUAD TOURNAMENT"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          expedita voluptatum cumque."
            points="3"
          />
          <rGameCard
            title="SQUAD TOURNAMENT"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          expedita voluptatum cumque."
            points="4.5"
          />
          <rGameCard
            title="SQUAD TOURNAMENT"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          expedita voluptatum cumque."
            points="1"
          />
          <rGameCard
            title="SQUAD TOURNAMENT"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          expedita voluptatum cumque."
            points="2.5"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import rBtnPrimary from "../components/rBtnPrimary.vue";
import rGameCard from "../components/rGameCard.vue";

export default {
  components: { rBtnPrimary, rGameCard },
  name: "GameView",
};
</script>

<style lang="scss"></style>
