<template>
  <div class="">
    <!-- <img src="../assets/pub.png" class="card-img-top" alt="image pub" /> -->

    <h1>{{ msg }}</h1>
    <div class="button">
      <button type="button" class="btn btn-danger btn-lg">
        Média Texte photos
      </button>
      <button type="button" class="btn btn-success btn-lg">Large button</button>
      <button type="button" class="btn btn-warning btn-lg">Large button</button>
    </div>

    <div class="pub">
      <img src="../assets/pub.png" class="card-img-top" alt="image pub" />
      <img src="../assets/pub.png" class="card-img-top" alt="image pub" />
      <img src="../assets/pub.png" class="card-img-top" alt="image pub" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #1520bd;
}
.button {
  display: flex;
  justify-content: space-around;
}
.pub {
  display: flex;
}

/* .head_pub  {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */
</style>
