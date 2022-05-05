<template>
  <form id="rFormLogin" class="w-100">
    <div class="form-group">
      <img
        :src="previewImage"
        class="rounded mx-auto d-block"
        alt="..."
        width="200"
        height="200"
      />
      <input type="file" name="" id="" @change="onFileSelected" />
    </div>
  </form>
</template>

<script>
export default {
  name: "rLoginForm",
  data() {
    return {
      selectedFile: null,
      previewImage: "https://github.com/mdo.png",
    };
  },
  components: {},
  methods: {
    onFileSelected(event) {
      console.log(event.target.files[0]);
      this.selectedFile = event.target.files[0];
      this.previewImage = URL.createObjectURL(event.target.files[0]);
      //save image
      /*var  fd = new FormData();
      fd.append('photo',this.selectedFile,this.selectedFile.name)
      axios.post(url,fd)
*/
    },
  },
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
