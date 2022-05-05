<template>
  <button :type="type" class="rbtn btn">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    type: String,
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
.rbtn {
  background-color: $primary-color !important;
  width: 50%;
  clip-path: polygon(8% 0, 100% 0%, 93% 100%, 0% 100%);
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  outline: none;
  span {
    color: white;
    font-family: Kanit Bold Italic;
    font-size: 25px;
  }
  &:hover {
    background-color: white !important;
    span {
      color: $primary-color;
    }
  }
}
</style>
