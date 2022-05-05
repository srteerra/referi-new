<template>
  <nav class="navbar navbar-expand-lg" :class="{ green: $route.path != '/' }">
    <div class="container">
      <router-link class="navbar-brand p-0" to="/">
        <picture class="d-block ml-2 ml-sm-0">
          <img
            src="@/assets/images/logo-white.png"
            class="lazyload logo-img"
            loading="lazy"
            alt="Geomy"
            title="Geomy"
          />
        </picture>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars" style="color: white"></i>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Inicio</router-link>
          <router-link class="nav-link" to="/">Torneos</router-link>
          <router-link class="nav-link" to="/">Nosotros</router-link>
          <router-link class="nav-link" to="/">contact</router-link>
          <router-link class="btn nav-link" to="/login">Ingresar</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
.navbar {
  min-height: 90px;
  .navbar-nav {
    display: inline-block;
  }
  .navbar-brand {
    .logo-img {
      width: 153px;
      @media screen and (min-width: 990px) {
        width: 190px;
      }
    }
  }
  .nav-link {
    white-space: nowrap;
    text-align: left;
    font-style: normal;
    margin-left: 12px;
    display: inline-block;
    vertical-align: middle;
    color: $gray-1;
    cursor: pointer;
    display: inline-block;
    width: auto;
    font-size: 25px;
    padding: 0;
    font-family: Kanit Bold Italic;
    &:hover {
      color: white;
    }
    @media (min-width: 992px) {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
  }
  .btn {
    color: $primary-color;
    white-space: nowrap;
    text-align: left;
    font-family: Kanit SemiBold Italic;
  }
}
</style>
