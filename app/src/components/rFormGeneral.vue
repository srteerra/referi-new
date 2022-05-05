<template>
  <form id="rFormGeneral" class="px-2">
    <div class="row py-3">
      <div class="col-6 form-group">
        <label for="firtsname">Nombres</label>
        <input
          id="firtsname"
          type="text"
          class="form-control"
          name="firtsname"
          value=""
        />
      </div>
      <div class="col-6 form-group">
        <label for="lastname">Apellidos</label>
        <input
          id="lastname"
          type="text"
          class="form-control"
          name="lastname"
          value=""
        />
      </div>
    </div>
    <div class="row py-3">
      <div class="form-group col-4">
        <label for="birthday">Fecha de nacimiento</label>
        <input id="birthday" type="date" class="form-control" name="birthday" />
      </div>

      <div class="col-6 px-5">
        <label class="row">Genero</label>
        <div class="row justify-content-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="male"
            />
            <label class="form-check-label" for="male"> hombre </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="female"
            />
            <label class="form-check-label" for="female"> mujer </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="other"
            />
            <label class="form-check-label" for="other"> otro </label>
          </div>
        </div>
      </div>
    </div>
    <!--
    <div class="row py-3">
      <div class="col-4 form-group">
        <label for="country">País</label>
        <input
          id="country"
          type="text"
          class="form-control"
          name="country"
          value=""
        />
      </div>
      <div class="col-4 form-group">
        <label for="city">Ciudad</label>
        <input
          id="city"
          type="text"
          class="form-control"
          name="city"
          value=""
        />
      </div>
       <div class="col-4 form-group">
        <label for="lastname">provincia</label>
        <input
          id="lastname"
          type="text"
          class="form-control"
          name="lastname"
          value=""
        />
      </div>
    </div>-->
    <div class="row py-3">
      <div class="form-group">
        <label for="phone">Numero de telefono</label>
        <vue-tel-input v-model="phone" :inputOptions="options"></vue-tel-input>
      </div>
    </div>
    <div class="actions py-3">
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
  name: "rGeneralForm",
  components: {},
  data() {
    return {
      phone: "",
      options: { placeholder: "ej: 3005882441" },
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#rFormGeneral {
  .form-group {
    margin: 20px 0;
    label {
      color: $base-color;
      font-size: 18px;
      margin-bottom: 5px;
    }
    input {
      background: $gray-1;
      border-radius: 25px;
      height: 50px;
    }
    .vue-tel-input {
      border: none;
      .vti__dropdown {
        margin-right: 10px;
      }
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
