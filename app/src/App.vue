<template>
  <div class="container-fluid" style="padding: 0; overflow-x: hidden">
    <header
      v-if="
        ($route.name !== 'login') &
        ($route.name !== 'register') &
        ($route.name !== 'reset') &
        ($route.name !== 'newpass') &
        ($route.name !== 'dashboard') &
        ($route.name !== 'profile') &
        !$route.meta.dashboardView
      "
    >
      <rNavBar />
    </header>
    <rHeaderUser v-else-if="$route.meta.dashboardView" />
    <main>
      <router-view />
    </main>
    <rFooter v-if="!$route.meta.dashboardView" />
  </div>
</template>
<script>
import rNavBar from "@/components/rNavBar.vue";
import rFooter from "@/components/rFooter.vue";
import rHeaderUser from "@/components/rHeaderUser.vue";
export default {
  setup() {},
  components: {
    rNavBar,
    rFooter,
    rHeaderUser,
  },
};
</script>
<style lang="scss">
#app {
  header {
    position: absolute;
    z-index: 10;
    width: 100%;
  }
  main {
    min-height: 100vh;
  }
}
</style>
