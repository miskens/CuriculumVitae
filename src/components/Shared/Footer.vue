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
    padding-bottom:0;
    background-image: linear-gradient(to right, #ffffff, #fcfcff, #f9f9ff, #f5f7ff, #f1f4ff, #f1f4ff, #f1f4ff, #f1f4ff, #f5f7ff, #f9f9ff, #fcfcff, #ffffff);
    caret-color: transparent;
  }
  .topFooter {
    background-color: rgb(241, 255, 248, .8);
    width: 94%;
    margin-left: 2%;
    height:38%;
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
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px) { /*Galaxy fold */
.footer {
  height:38vh;
  width: 94%;
  margin-top: 2vh;
  margin-left:3%;
  padding: 2%;
  padding-bottom:0;
  background-image: linear-gradient(to right, #ffffff, #fcfcff, #f9f9ff, #f5f7ff, #f1f4ff, #f1f4ff, #f1f4ff, #f1f4ff, #f5f7ff, #f9f9ff, #fcfcff, #ffffff);
  caret-color: transparent;
}
.azImg {
  position: relative;
  top:40px;
}
.vueImg {
  top:22px;
}
.leftFooter {
  display:inline;
  width: 40%;
  float:left;
}
.contactInfoDiv {
  margin-left: 5%;
}
.rightFooter {
  width:40%;
  padding:0;
  padding-left: 20%;
  top: 0;
  left: 0px;
  margin: 0;
  overflow: auto;
}
h5 {
  margin-bottom: 1vh;
  padding-left: 2%;
  padding-right: 2%;
  font-size: .9rem;
}
#layout a{
  font-size: .6rem;
}
p {
    font-size:.7rem;
  }
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.footer {
  height: 94vh;
}
.topFooter {
  height: 36vh;
}
.azImg {
  margin-left: 10%;
}
.vueImg {
    top:-5vh;
    right: 9vw;
}
.leftFooter {
  margin-left: 10%;
  width:30%;
}
.rightFooter {
  margin-left: 2%;
  width:30%;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.footer {
  height: 50vh;
}
.footer h5 {
  font-size: 1rem;
  padding-bottom: 0;
}
.topFooter {
  height: 24vh;
}
.azImg {
  position:relative;
  top: 7vh;
}
.vueImg {
  position:relative;
    top: 4vh;
    right: 5vw;
}
.leftFooter {
  margin-left: 10%;
  width:30%;
}
.contactInfoDiv {
  margin-left: 5%;
}
.rightFooter {
  padding-left: 20%;
  font-size: 1rem;
}
.rightFooter h5 {
  font-size: 1rem;
}
#layout a {
  font-size: .8rem;
}
p {
  font-size: .8rem;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px)  { /*iPhone 5/SE rotated*/
.footer {
  height: 76vh;
}
.topFooter {
  height: 26vh;
}
.azImg {
  position:relative;
  margin-left: 12%;
  top: 3vh;
}
.leftFooter {
  margin-left: 10%;
  width:30%;
}
.rightFooter{
  padding-left: 15%;
  font-size: 1rem;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.footer {
  height: 46vh;
}
.topFooter {
  height: 18vh;
}
.azImg {
  position:relative;
  top: 5vh;
}
.vueImg {
  position:relative;
    top: 2vh;
    right: 4vw;
}
.footer h5 {
  padding:2%;
  font-size: 1rem;
}
.contactInfoDiv {
  margin-left: 5%;
}
.rightFooter {
  padding-left: 15%;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
.footer {
  height: 70vh;
}
.topFooter {
  height: 26vh;
}
.azImg {
  position:relative;
  margin-left: 12%;
  top: 3vh;
}
.contactInfoDiv {
  margin-left: 45%;
}
.rightFooter {
  padding-left: 10vw;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8 */
.footer {
  height: 46vh;
}
.topFooter {
  height: 17vh;
}
.azImg {
  position:relative;
  top: 5vh;
}
.vueImg {
  position:relative;
    top: 2vh;
    right: 4vw;
}
.footer h5 {
    padding:5%;
    font-size: 1rem;
  }
  .contactInfoDiv {
  margin-left: 5%;
}
.rightFooter {
  padding-left: 15%;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
.footer {
  height: 72vh;
}
.topFooter {
  height: 26vh;
}
.azImg {
  position:relative;
  margin-left: 12%;
  top: 3vh;
}
.vueImg {
  position:relative;
  top: -2vh;
    right: 7vw;
}
.footer h5 {
    padding:2%;
    font-size: 1rem;
  }
  .contactInfoDiv {
  margin-left: 45%;
}
  .rightFooter {
    padding-left: 12%;
  }
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
.footer {
  height: 38vh;
}
.footer h5 {
  font-size: 1rem;
}
.topFooter {
  height: 14vh;
}
.azImg {
  position:relative;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 0vh;
    right: 4vw;
}
.leftFooter {
  margin-left: 8%;
}
.contactInfoDiv {
  margin-left: 5%
}
.contactInfoDiv p{
  font-size: 1rem;
  margin-right: 5%;
}
.rightFooter {
    padding-left: 12%;
  }
.rightFooter p {
  font-size: 1rem;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.footer {
  height: 66vh;
}
.topFooter {
  height: 26vh;
}
.azImg {
  position:relative;
  margin-left: 12%;
  top: 3vh;
}
.vueImg {
  position:relative;
  top: -2vh;
    right: 7vw;
}
.contactInfoDiv {
  margin-left: 45%;
}
.rightFooter {
    padding-left: 12%;
  }
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.footer {
  height: 38vh;
}
.topFooter {
  height: 14vh;
}
.azImg {
  position:relative;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 3vw;
}
.footer h5 {
  font-size: 1.1rem;
}
.contactInfoDiv {
  margin-left: 5%
}
.rightFooter {
    padding-left: 12%;
  }
}
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px)  { /*iPhone X rotated */
.footer {
  height: 76vh;
}
.topFooter {
  height: 34vh;
}
.azImg {
  position:relative;
  margin-left: 10%;
  top: 6vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 3vw;
}
.contactInfoDiv {
  margin-left: 45%;
}
.rightFooter {
    padding-left: 12%;
  }
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.footer {
  height: 40vh;
}
.topFooter {
  height: 14vh;
}
.azImg {
  position:relative;
  margin-left:8%;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 3vw;
}
.footer h5 {
  font-size: 1rem;
}
.contactInfoDiv {
  margin-left: 10%;
}
.rightFooter {
    padding-left: 14%;
  }
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.footer {
  height: 70vh;
}
.topFooter {
  height: 30vh;
}
.azImg {
  position:relative;
  margin-left:10%;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 3vw;
}
.footer h5 {
  font-size: 1rem;
}
.contactInfoDiv {
  margin-left: 45%;
}
.rightFooter {
    padding-left: 12%;
  }
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.footer {
  height: 34vh;
}
.topFooter {
  height: 12vh;
}
.azImg {
  position:relative;
  margin-left:8%;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 3vw;
}
.contactInfoDiv {
  margin-left: 10%;
}
.rightFooter {
    padding-left: 14%;
  }
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.footer {
  height: 36vh;
}
.topFooter {
  height: 14vh;
}
.azImg {
  position:relative;
  margin-left:10%;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 3vw;
}
.footer h5 {
  font-size: 1rem;
}
.contactInfoDiv {
  margin-left: 10%;
}
.rightFooter {
    padding-left: 14%;
  }
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.footer {
  height: 50vh;
}
.topFooter {
  height: 22vh;
}
.azImg {
  position:relative;
  margin-left:12%;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 5vw;
}
.contactInfoDiv {
  margin-left: 45%;
}
.rightFooter {
    padding-left: 12%;
  }
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.footer {
  height: 42vh;
}
.topFooter {
  height: 18vh;
}
.azImg {
  position:relative;
  margin-left:10%;
  top: 5vh;
}
.vueImg {
  position:relative;
    top: 3vh;
    right: 3vw;
}
.leftFooter {
  width: 40%;
  float:left;
}
#layout a{
  font-size: 1.4rem;
}
.footer h5 {
  font-size: 1.6rem;
}
.contactInfoDiv {
  margin-left:20%;
}
.rightFooter {
  width:40%;
  overflow: hidden;
  padding-left:8vw;
}
p {
  font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.footer {
  height: 48vh;
}
.topFooter {
  height: 22vh;
}
.azImg {
  position:relative;
  margin-left:12%;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 5vw;
}
#layout a {
font-size: 1.2rem;
}
.contactInfoDiv {
  margin-left: 40%;
}
.rightFooter {
  padding-left: 10vw;
}
h5 {
  font-size: 1.3rem;
}
p {
  font-size: 1.2rem;;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px)  and (max-height: 1367px) { /*iPad Pro*/
#layout a{
  font-size: 1.8rem;
}
.footer {
  height: 42vh;
}
.footer h5 {
  font-size: 2rem;
  padding-bottom: 2vh;
}
.topFooter {
  height: 18vh;
}
.azImg {
  position:relative;
  margin-left:10%;
  top: 5vh;
}
.vueImg {
  position:relative;
    top: 3.5vh;
    right: 6vw;
}
.rightFooter {
  padding:0;
  padding-left: 10%;
}
p {
  font-size: 1.8rem;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro rotated */
#layout a{
  font-size: 1.8rem;
}
.footer {
  height: 52vh;
}
.footer h5 {
  font-size: 2rem;
  padding-bottom: 2vh;
}
.topFooter {
  height: 22vh;
}
.azImg {
  position:relative;
  margin-left:12%;
  top: 3vh;
}
.vueImg {
  position:relative;
    top: 1vh;
    right: 5vw;
}
.contactInfoDiv {
  margin-left: 40%;
}
.rightFooter {
  padding:0;
  padding-left: 10%;
}
p {
  font-size: 1.8rem;
}
}
</style>