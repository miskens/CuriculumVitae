<template>
  <div class="footer">
    <div class="topFooter">
      <img class="azImg" src="./sharedAssets/azImg.png">
      <h5>Vue.Js by Mikael Puusaari hosted on Azure</h5><br/>
      <img class="vueImg" src="./sharedAssets/vueImg.png">
    </div>
    <div class="leftFooter">
      <div class="contactInfoDiv">
        <p>Mobil:</p>
          <p>+46 72 568 22 79</p>
        <p>Mail: </p>
          <p>miskens@hotmail.com</p>
      </div>
      </div>
      <div class="rightFooter">
        <p><a href="http://www.linkedin.com/pub/mikael-puusaari/59/369/57" target="blank">LinkedIn</a></p>
        <p><a href="https://www.facebook.com/mikael.puusaari/" target="blank">Facebook</a></p>
        <p><a href="https://stackoverflow.com/users/6094057/mikael-puusaari" target="blank">StackOverflow</a></p>
        <p><a href="https://github.com/miskens" target="blank">Github</a></p>
      </div>
  </div>
</template>

<script>
</script>

<style  scoped>
@media all and (min-width: 1px) and (min-height:1px) {
  .footer {
    height:100%;
    margin-top: 2%;
    padding: 2%;
    padding-bottom:5%;
    background-image: linear-gradient(to right, #ffffff, #fcfcff, #f9f9ff, #f5f7ff, #f1f4ff, #f1f4ff, #f1f4ff, #f1f4ff, #f5f7ff, #f9f9ff, #fcfcff, #ffffff);
    caret-color: transparent;
  }
  .topFooter {
    background-color: rgb(241, 255, 248, .8);
    width: 94%;
    margin-left: 2%;
    height:auto;
    overflow: hidden;
    border: solid;
    border-width: 1px;
    border-color: mediumturquoise;
    border-radius: .4rem;
  }
  .azImg {
    position:relative;
    float:left;
    width: 25%;
    margin-left: 0%;
    top: 2vh;
  }
  .vueImg {
    position: relative;
    top:0vh;
    right: 3vw;
    width: 25%;
  }
  .leftFooter {
    width: 40%;
    float:left;
  }
  .contactInfoDiv {
    margin-left:2%;
  }
  .rightFooter {
    width:30%;
    padding:0;
    padding-left: 25%;
    top: 0;
    left: 0px;
    margin: 0;
    overflow: hidden;
  }
  h5 {
    padding: 0 3%;
    float:left;
    overflow: hidden;
    width: 40%;
    padding-bottom: 2vh;
  }
  #layout a{
    color:rgb(85, 50, 150);
    font-size: .8rem;
    width:100%;
  }
  p {
    font-size:.9rem;
  }
}
@media all and (min-width: 250px) and (min-height:1px) {
    .azImg {
    width: 22.5%;
    margin-left: 5%;
  }

  .vueImg {
    width: 22.5%;
  }
}
@media all and (min-width: 340px) and (min-height:1px) {
  .footer {
    padding-bottom:0;
  }
  .topFooter {
    height:38%;
  }
  .azImg {
    width: 20%;
    margin-left: 10%;
  }
  .vueImg {
    width: 20%;
  }
p {
    font-size:1rem;
  }
}
@media all and (min-width: 400px) and (min-height:1px) {
  .azImg {
    width: 17.5%;
    top: 2vh;
  }
  .vueImg {
    right: 3vw;
    width: 17.5%;
  }
p {
    font-size:1rem;
  }
    #layout a{
    font-size: 1rem;
  }
}
@media all and (min-width: 500px) and (min-height:1px) {
  .azImg {
    top: 2vh;
  }
  .vueImg {
    right: 4vw;
  }
}
@media all and (min-width: 600px) and (min-height:1px) {
.contactInfoDiv {
    margin-left:20%;
  }
  .rightFooter {
    padding-left: 15%;
  }
  .topFooter {
    height:34%;
  }
  .azImg {
    top: 2vh;
  }
  .vueImg {
    right: 4vw;
  }
}
@media all and (min-width: 700px) and (min-height:1px) {
h5 {
  padding-top: 2%;
}
  .azImg {
    margin-left: 12.5%;
    width: 15%;
    top: 2vh;
  }
  .vueImg {
    width: 15%;
    right: 5vw;
  }
}
@media all and (min-width: 1000px) and (min-height:1px) {
h5 {
  padding-top: 3%;
}
  .azImg {
    margin-left: 15%;
    width: 12.5%;
    top: 2vh;
  }
  .vueImg {
    width: 12.5%;
    right: 6vw;
  }
}
@media all and (min-width: 1200px) and (min-height:1px) {
h5 {
  padding-top: 3%;
}
  .azImg {
    width: 11%;
    top: 2vh;
  }
  .vueImg {
    width: 11%;
    right: 6vw;
  }
}
@media all and (min-width: 1500px) and (min-height:1px) {
h5 {
  padding-top: 3%;
}
  .azImg {
    width: 10%;
  }
  .vueImg {
    width: 10%;
  }
}
</style>