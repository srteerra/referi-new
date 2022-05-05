<template>
  <div class="row" id="rDashboard">
    <rSideBar />
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import rSideBar from "@/components/rSideBar.vue";
export default {
  name: "rDashboard",
  components: { rSideBar },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#rDashboard {
  background: $gray-2;
  color: $base-color;
}
</style>
