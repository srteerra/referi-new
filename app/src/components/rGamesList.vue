<template>
  <div class="row" id="rGames">
    <div class="row mt-5">
      <rNavBarSearch />
    </div>
    <div class="row mt-3">
      <div class="col-3 container-card">
        <div class="d-flex justify-content-center">
          <router-link to="/">
            <img src="@/assets/images/banner-clash-royal.jpg" alt="" />
          </router-link>
        </div>
        <h4>CLASH ROYAL</h4>
      </div>
      <div class="col-3 container-card">
        <div class="d-flex justify-content-center">
          <router-link to="/">
            <img src="@/assets/images/banner-clash-royal.jpg" alt="" />
          </router-link>
        </div>
        <h4>CLASH ROYAL</h4>
      </div>
      <div class="col-3 container-card">
        <div class="d-flex justify-content-center">
          <router-link to="/">
            <img src="@/assets/images/banner-clash-royal.jpg" alt="" />
          </router-link>
        </div>
        <h4>CLASH ROYAL</h4>
      </div>
    </div>
  </div>
</template>

<script>
import rNavBarSearch from "./rNavBarSearch.vue";
export default {
  components: {
    rNavBarSearch,
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#rGames {
  .container-card {
    opacity: 0.8;

    transition: all 0.3s ease 0s;
    &:hover {
      opacity: 1;
    }
    img {
      clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
      width: 250px;
      height: 250px;
    }
    h4 {
      text-align: center;
      margin-top: 25px;
      font-family: Kanit Medium Italic;
    }
  }
}
</style>
