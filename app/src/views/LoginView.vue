<template>
  <section id="loginView" class="row align-items-center">
    <router-link
      to="/"
      style="
        color: white;
        font-size: 25px;
        position: absolute;
        top: 5px;
        left: 5px;
        width: 9vw;
      "
      ><i class="fa-solid fa-caret-left"></i>Volver</router-link
    >
    <div class="col-6 position-relative">
      <div class="content-logo w-100 row justify-content-center">
        <div class="logo"></div>
      </div>
      <div class="content-diag row w-100 justify-content-center">
        <h2>¿No tienes una cuenta aún ?</h2>
        <router-link class="w-25" style="text-align: center" to="/register"
          >Registrarse</router-link
        >
      </div>
    </div>
    <div
      class="content-form col-6 h-100 d-flex align-items-center position-relative"
    >
      <div class="row w-100 justify-content-center">
        <h1 class="title">INICIAR SESIÓN</h1>
        <rFormLogin />
      </div>
    </div>
  </section>
</template>

<script>
import rFormLogin from "@/components/rFormLogin.vue";
export default {
  components: {
    rFormLogin,
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#loginView {
  height: 100vh;
  .content-form {
    background: white;
    .title {
      color: $base-color;
    }
  }

  h1,
  h2 {
    text-align: center;
  }
  .content-logo {
    height: 100px;
    position: relative;
    top: -7rem;
    .logo {
      background-image: url("@/assets/images/logo-white.png");
      background-size: contain;
      background-position: center;
      width: 33%;
      height: 100%;
      background-repeat: no-repeat;
    }
  }
  .content-diag {
    position: relative;
    top: -5rem;
    h2 {
      font-family: Kanit Light Italic;
      font-size: 35px;
      color: $gray-1;
    }
    a {
      font-family: Kanit Bold Italic;
      color: $primary-color;
      font-size: 30px;
      padding: 5px;
      &:hover {
        color: white;
      }
    }
  }
}
</style>
