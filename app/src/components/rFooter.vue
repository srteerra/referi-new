<template>
  <footer id="footer">
    <div class="container">
      <div class="columns column-2">
        <div class="address">
          <a href="/">
            <img
              class="lazyload logo"
              loading="lazy"
              src="@/assets/images/logo-white.png"
              width="190"
              alt="Geomy"
              title="Geomy"
            />
          </a>
          <span
            ><!-- 4 rue du coronel Dupont<br>  --><a
              href="mailto:referigames@gmail.com"
              title="Contacte con nosotros por correo electrónico"
              ><i class="fa fa-envelope"></i> referigames@gmail.com</a
            ></span
          >
        </div>
      </div>
      <br />
      <br class="d-none d-sm-none d-md-block" />
      <div class="columns column-3 v-align-top">
        <div>
          <h3 class="d-sm-block d-md-none">Navegación</h3>
          <div class="columns column-2 sitemap-links">
            <div>
              <a href="#">Inicio</a>
              <a href="#">Juegos</a>
            </div>
            <div>
              <a href="#">Nosotros</a>
              <a href="#">Contacto</a>
            </div>
          </div>
        </div>

        <br class="d-sm-block d-md-none" />
        <br class="d-sm-block d-md-none" />

        <div class="languages">
          <!--   <h3 class="d-none d-sm-none d-md-block">Idioma</h3>
          <button
            class="btn btn-outline modal-trigger"
            data-modal-link="languages"
            id="dropdown-languages"
          >
            Español<i class="fa fa-angle-down"></i>
          </button>-->
        </div>
        <br class="d-sm-block d-md-none" />
        <br class="d-sm-block d-md-none" />
        <div class="networks">
          <h4 class="v-align-solo v-align-bottom">Nuestras redes</h4>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitch"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <br class="d-none d-sm-none d-md-block" />
      <br />
      <div class="links">
        <span class="copyright">©referigames 2022</span>
        <a href="#">Política de cookies</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Términos y condiciones generales</a>
        <a href="#">Aviso legal</a>
        <a target="_blank" href="#">Programa de afiliados</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "gFooter",
};
</script>

<style lang="scss">
#footer {
  background: rgb(2, 26, 38);
  background: linear-gradient(
    180deg,
    rgba(2, 26, 38, 1) 0%,
    rgba(22, 54, 70, 0.9026961126247374) 100%
  );
  height: 445px;
  .container {
    padding-top: 76px;
  }
  .logo {
    padding-right: 20px;
  }
  .address {
    a,
    span {
      color: #fff;
      font-family: Poppins Regular, sans-serif;
    }
    span {
      display: inline-block;
      font-size: 14px;
      vertical-align: middle;
      border-left: 1px solid hsla(0, 0%, 100%, 0.5);
      padding-left: 20px;
    }
  }
  .localize {
    text-align: right;
  }
  h3 {
    color: #fff;
    margin-bottom: 15px;
    font-family: Poppins SemiBold, sans-serif;
    text-transform: uppercase;
  }
  .sitemap-links {
    a,
    span {
      cursor: pointer;
      width: 100%;
      display: inline-block;
      margin-bottom: 10px;
      color: #fff;
    }
    a,
    span {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .links {
    > * {
      color: #fff;
      font-family: Poppins Regular, sans-serif;
      margin-right: 15px;
    }
    .copyright {
      margin-right: 73px;
    }
  }
  .networks {
    i {
      font-size: 50px;
      padding: 10px;
      margin-left: 5px;
      color: rgba(255, 255, 255, 0.737);
    }
  }
  .links {
    a {
      color: rgba(255, 255, 255, 0.737);
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
