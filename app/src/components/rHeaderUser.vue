<template>
  <header
    id="rHeaderUser"
    class="navbar sticky-top flex-md-nowrap p-0 shadow position-relative"
  >
    <router-link class="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
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
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <div class="dropdown nav-link px-4 position-relative">
          <a
            href="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
          </a>
          <ul
            class="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser1"
            style="position: absolute; left: -70px; background: white"
          >
            <li>
              <router-link class="dropdown-item" to="/profile"
                >perfil</router-link
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">salir</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "rHeader",
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#rHeaderUser {
  background: $base-color;
  box-shadow: 0 6px 15px #021a26c4 !important;
  border-bottom: 1px solid #eae8ea9c;
  .dropdown-item {
    color: $base-color;
  }
}
</style>
