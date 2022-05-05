<template>
  <form id="rFormLogin" class="px-5 w-75">
    <div class="form-group">
      <label for="email">Correo Electronico</label>
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
