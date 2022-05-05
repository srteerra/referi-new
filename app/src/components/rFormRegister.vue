<template>
  <form id="rFormRegister" class="px-5 w-75">
    <div class="form-group">
      <label for="email">Correo Electronico*</label>
      <input
        id="email"
        type="email"
        class="form-control"
        name="email"
        value=""
        required=""
        autocomplete="email"
      />
    </div>

    <div class="form-group">
      <label for="password">Contraseña*</label>
      <input
        id="password"
        type="password"
        class="form-control"
        name="password"
        required=""
        autocomplete="current-password"
      />
    </div>
    <div class="form-group">
      <label for="password">Repite la contraseña*</label>
      <input
        id="password"
        type="password"
        class="form-control"
        name="password"
        required=""
        autocomplete="current-password"
        placeholder="*****"
      />
    </div>
    <div class="actions">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Aceptar terminos y condiciones
        </label>
      </div>
      <div style="text-align: center">
        <input
          type="submit"
          value="Iniciar sesión"
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
#rFormRegister {
  .form-group {
    margin: 20px 0;
    label {
      color: $base-color;
      font-size: 18px;
      margin-bottom: 5px;
    }
    input {
      background: $gray-2;
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
