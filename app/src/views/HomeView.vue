<template>
  <section id="HomeView">
    <section id="cover-page" class="container">
      <div class="row h-100 align-items-center">
        <div class="col-6">
          <h1 class="title">CONECTATE CON LO MEJOR EN COMPETENCIAS ESPORT</h1>
          <span class="text"
            >Unete a la supremacia gamer y se parte de las leyendas del mundo
            eSport.</span
          >
        </div>
        <div class="col-6 d-flex justify-content-center">
          <rButton text="¡Únete ya!" />
        </div>
      </div>
    </section>
    <section id="features-1" class="container">
      <div class="row h-100 align-items-center">
        <div class="col-6 d-flex justify-content-center content-images">
          <img
            class="firts-image"
            src="@/assets/images/tournaments.png"
            alt=""
          />
          <img class="second-image" src="@/assets/images/games.png" alt="" />
        </div>
        <div class="col-6">
          <h1 class="subtitle">
            CONECTATE CON LO MEJOR EN COMPETENCIAS ESPORT
          </h1>
          <span class="text-ligth"
            >Organiza todos tus torneos en un solo lugar. Decide cómo participan
            los jugadores en tus torneos. Elige dónde y cómo visualizar tus
            resultados. Conecta tus servicios con nuestra API. Mantén el control
            de tus datos. Ya gestiones torneos más informales o ligas
            profesionales, Toornament lo hace posible.</span
          >
        </div>
      </div>
    </section>
    <section id="features-2" class="container-fluid">
      <div class="container">
        <div class="row h-100 align-items-center">
          <div class="col-6">
            <h1 class="subtitle">
              CONECTATE CON LO MEJOR EN COMPETENCIAS ESPORT
            </h1>
            <span class="text-ligth"
              >Organiza todos tus torneos en un solo lugar. Decide cómo
              participan los jugadores en tus torneos. Elige dónde y cómo
              visualizar tus resultados. Conecta tus servicios con nuestra API.
              Mantén el control de tus datos. Ya gestiones torneos más
              informales o ligas profesionales, Toornament lo hace
              posible.</span
            >
          </div>
          <div class="col-6 d-flex justify-content-center content-images">
            <img
              class="firts-image"
              src="@/assets/images/tournaments.png"
              alt=""
            />
            <img class="third-image" src="@/assets/images/games.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section id="features-3" class="container">
      <div class="row h-50 align-items-center">
        <div class="col">
          <h1 class="subtitle">ADMINISTRA TODAS TUS CUENTAS Y EQUIPOS</h1>
          <span class="text-ligth"
            >Permite que los jugadores participen en tu torneo en un sitio web
            ya preparado o en tu propia plataforma de jugadores. Usa el lobby de
            encuentros incluido o un servicio de comunicación externo. Pide que
            los jugadores informen de los resultados de sus encuentros o haz que
            tus árbitros se encarguen de ello. Con Toornament, puedes
            elegir.</span
          >
        </div>
      </div>
      <div class="row h-50 align-items-center">
        <div class="col content-images">
          <img
            class="firts-image"
            src="@/assets/images/tournaments.png"
            alt=""
          />
          <img class="third-image" src="@/assets/images/games.png" alt="" />
          <img class="second-image" src="@/assets/images/games.png" alt="" />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import rButton from "@/components/rBtnPrimary.vue";
export default {
  name: "HomeView",
  components: { rButton },
};
</script>
<style lang="scss">
@import "@/scss/variables.scss";
#HomeView {
  h1 {
    margin-bottom: 2rem;
  }
  .content-images {
    position: relative;
    img {
      box-shadow: 13px 13px 24px #000000d9;
    }
    .firts-image {
      position: relative;
      width: 769px;
      height: 527px;
    }
    .second-image {
      position: absolute;
      width: 422px;
      height: 237px;
      bottom: -100px;
      right: 0;
    }
    .third-image {
      position: absolute;
      width: 422px;
      height: 237px;
      bottom: -100px;
      left: 0;
    }
  }

  #cover-page {
    width: 100%;
    height: 600px;
    background-image: url("@/assets/images/bannerHome.png");
    background-size: cover;
    background-position: center;
  }
  #features-1 {
    width: 100%;
    height: 600px;
    margin-bottom: 50px;
  }
  #features-2 {
    width: 100%;
    height: 790px;
    background: $gray-3;
    color: $base-color;
    padding-top: 70px;

    h1,
    span {
      color: $base-color;
    }
  }
  #features-3 {
    width: 100%;
    height: 600px;
    margin-bottom: 21rem;
    text-align: center;
    .firts-image {
      width: 500px;
      height: 400px;
    }
    .second-image {
      right: 5rem;
    }
    .third-image {
      left: 5rem;
    }
  }
}
</style>
