<template>
  <div id="Profile" class="row h-100 pt-3">
    <div class="col-3">
      <rUploadImage />
    </div>
    <div class="col-8">
      <ul class="nav justify-content-start">
        <li class="nav-item">
          <router-link class="nav-link active" to="/dashboard/profile"
            >General</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard/profile/security"
            >Seguridad</router-link
          >
        </li>
      </ul>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import rUploadImage from "@/components/rFormUploadImage.vue";
export default {
  components: { rUploadImage },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#Profile {
  a {
    color: $base-color;
    &:hover {
      color: $primary-color;
    }
  }
}
</style>
