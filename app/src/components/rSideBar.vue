<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block sidebar collapse"
    style=""
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/tournaments">
            <i class="fa-solid fa-house-user"></i>
            Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tournaments">
            <i class="fa-solid fa-trophy"></i>
            Torneos
          </router-link>
        </li>
      </ul>
      <hr />
    </div>
  </nav>
</template>

<script>
export default {
  name: "rSideBar",
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#sidebarMenu {
  background: $gray-1;
  .nav-item {
    a {
      color: $base-color;
      &:hover {
        color: white;
        background: $primary-color;
      }
    }
  }
}
</style>
