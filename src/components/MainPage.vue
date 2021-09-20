<template>
  <!-- <div class="main_page"> -->
  <!-- <div class="container-md">
      <div class="row"> -->

  <div class="container d-flex flex-wrap justify-content-center ">
    <div class="row">
      <video width="90%" height="240" controls>
        <source src=”http://techslides.com/demos/sample-videos/small.ogv”
        type=video/ogg> <source src="/build/videos/arcnet.io(7-sec).mp4"
        type=video/mp4>
      </video>
      <p>
        Lorem Ipsum est simplement un texte factice de l'industrie de
        l'impression et de la composition. Lorem Ipsum est le texte factice
        standard de l'industrie depuis les années 1500, quand un imprimeur
        inconnu a pris une galère de type et l'a brouillé pour en faire un
        cahier de caractères. Il a survécu non seulement à cinq siècles, mais
        aussi au saut dans la composition électronique, demeurant
        essentiellement inchangé.
      </p>

      <h1 class="my-5 text-center">{{ msg }}</h1>
      <div class="container my-5">
        <div class="button">
          <button type="button" class="btn btn-danger btn-lg">
            Média Texte photos
          </button>
          <button type="button" class="btn btn-success btn-lg">
            Média Télé Vidéos
          </button>
          <button type="button" class="btn btn-warning btn-lg">
            Média Audio Musique
          </button>
        </div>
      </div>
      <div class="container d-flex flex-wrap justify-content-center ">
        <div class="row">
          <div class="pub_video">
            <video width="320" height="240" controls>
              <source src=”http://techslides.com/demos/sample-videos/small.ogv”
              type=video/ogg> <source src="/build/videos/arcnet.io(7-sec).mp4"
              type=video/mp4>
            </video>

            <video width="320" height="240" controls>
              <source src=”http://techslides.com/demos/sample-videos/small.ogv”
              type=video/ogg> <source src="/build/videos/arcnet.io(7-sec).mp4"
              type=video/mp4>
            </video>

            <video width="320" height="240" controls>
              <source src=”http://techslides.com/demos/sample-videos/small.ogv”
              type=video/ogg> <source src="/build/videos/arcnet.io(7-sec).mp4"
              type=video/mp4>
            </video>
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
a {
  color: #1520bd;
}
.button {
  display: flex;
  justify-content: space-around;
}
/* .pub_video {
  width: 100%;
  display: flex;
  justify-content: space-between;
} */
/* h1 {
  padding: 10px;
  padding-bottom: 40px;
  font-size: 80px;
} */
</style>
