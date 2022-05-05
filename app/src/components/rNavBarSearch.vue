<template>
  <nav
    id="rNavBarSearch"
    class="navbar navbar-expand-lg d-flex justify-content-between"
  >
    <h1 style="font-family: Kanit ExtraBold Italic">Juegos</h1>
    <div class="d-flex form-group">
      <input
        class="me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
      />
      <i class="fa-solid fa-magnifying-glass" style="font-size: 34px"></i>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#rNavBarSearch {
  .form-group {
    margin: 20px 0;
    label {
      color: $base-color;
      font-size: 18px;
      margin-bottom: 5px;
    }
    input {
      background: rgba($color: $base-color-2, $alpha: 0.5);
      border-radius: 25px;
      height: 40px;
      color: white;
    }
  }
}
</style>
