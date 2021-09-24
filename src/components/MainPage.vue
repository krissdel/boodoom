<template>
  <!-- <div class="main_page"> -->
  <!-- <div class="container-md">
      <div class="row"> -->

  <div class="container d-flex flex-wrap justify-content-center ">
    <!-- ====================================== -->
    <div class="row">
      <!-- _____[banner pub]_____  -->
      <header role="banner">
        <p>
          <img
            src="../assets/images/cahier.jpg"
            class="img-fluid"
            alt="pub bannier"
          />
        </p>
      </header>

      <h1 class="my-5 text-center">{{ msg }}</h1>
      <div class="buttons">
        <!-- <router-link to="/abonner"> -->
        <button type="button" class="btn btn-success1 btn-sm mx-5 my-3">
          Espace abonnées
        </button>
        <!-- </router-link> -->
        <button type="button" class="btn btn-danger1 btn-sm mx-5 my-3">
          Espace média pro
        </button>
      </div>
      <div class="container my-5 just">
        <!-- <div class="button"> -->
        <!-- <router-link to="/MediaText"> -->
        <button type="button" class="btn btn-danger btn-lg mx-5 my-3 ">
          <div class="img-fluid">
            <img alt="Vue logo" src="../assets/images/cahier.jpg" />
          </div>
          LIRE
        </button>
        <!-- </router-link> -->

        <button type="button" class="btn btn-warning btn-lg mx-5 my-3">
          <div class="img-fluid">
            <img src="../assets/images/micro.jpg" alt="pub" />
          </div>
          ENTENDRE
        </button>
        <button type="button" class="btn btn-success btn-lg mx-5 my-3">
          <div class="img-fluid">
            <img src="../assets/images/video.jpg" alt="pub" />
          </div>
          VOIR
        </button>
        <!-- </div> -->
      </div>
      <!-- ================== -->

      <!-- ============== -->

      <div class="container d-flex flex-wrap justify-content-center ">
        <div class="row w-100 ">
          <div class="pub_image d-flex">
            <!-- <video width="320" height="240" controls>
              <source src=”http://techslides.com/demos/sample-videos/small.ogv”
              type=video/ogg> <source src="/build/videos/arcnet.io(7-sec).mp4"
              type=video/mp4>
            </video> -->
            <div class="pub_image1">
              <p>
                <img
                  src="../assets/images/micro.jpg"
                  class="img-fluid"
                  alt="pub bannier"
                />
              </p>
            </div>
            <div class="pub_image2">
              <p>
                <img
                  src="../assets/images/cahier.jpg"
                  class="img-fluid"
                  alt="pub bannier"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
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
/* =================== */
a {
  color: #1520bd;
}
/* .button {
  display: flex;
  justify-content: space-around;
} */
.btn-success1 {
  color: #fff;
  background-color: #000000;
  border-color: #198754;
}
.btn-danger1 {
  color: #fff;
  background-color: #000000;
  border-color: #dc3545;
}

/* h1 {
  padding: 10px;
  padding-bottom: 40px;
  font-size: 80px;
} */
</style>
