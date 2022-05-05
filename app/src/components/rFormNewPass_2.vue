<template>
  <form id="rFormLogin" class="px-5 w-75">
    <h2>CAMBIAR CONTRASEÑA</h2>
    <div class="form-group">
      <label for="password">Contraseña<span>*</span></label>
      <input
        type="password_1"
        class="form-control"
        name="password"
        required=""
        autocomplete="current-password"
        placeholder="*****"
      />
    </div>
    <div class="form-group">
      <label for="password">Repite la contraseña<span>*</span></label>
      <input
        type="password"
        class="form-control"
        name="password_2"
        required=""
        autocomplete="current-password"
        placeholder="*****"
      />
    </div>

    <div class="actions">
      <div style="text-align: center">
        <input
          type="submit"
          value="Enviar"
          style="margin-top: 25px"
          class="rbtn btn"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "rLoginForm",
  components: {},
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#rFormLogin {
  .form-group {
    margin: 20px 0;
    label {
      color: $base-color;
      font-size: 18px;
      margin-bottom: 5px;
      span {
        color: $primary-color;
      }
    }
    input {
      background: $gray-1;
      border-radius: 25px;
      height: 50px;
    }
  }
  .actions {
    .form-check-label {
      color: $base-color;
    }
    a {
      color: $base-color;
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
