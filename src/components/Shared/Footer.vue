<template>
  <div class="footer">
    <h5>Vue.Js by Mikael Puusaari, hosted on Azure</h5><br/>
    <div class="leftFooter">
      <div class="contactInfoDiv">
        <p>Mobil:</p>
          <p>072-568 22 79</p>
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
.footer {
  height:34vh;
  margin-top: 2vh;
  padding: 2%;
  padding-bottom:0;
  border-bottom: solid;
  border-width: 2px;
  border-color: black;
  background-image: linear-gradient(to right, #ffffff, #fcfcff, #f9f9ff, #f5f7ff, #f1f4ff, #f1f4ff, #f1f4ff, #f1f4ff, #f5f7ff, #f9f9ff, #fcfcff, #ffffff);
  caret-color: transparent;
}
.leftFooter {
  display:inline;
  width: 40%;
  float:left;
}
.rightFooter {
  width:40%;
  padding:0;
  padding-left: 18vw;
  top: 0;
  left: 0px;
  margin: 0;
  overflow: auto;
}
h5 {
  margin-bottom: 1vh;
}
#layout a{
  color:rgb(85, 50, 150);
  font-size: small;
  width:100%;
}
p {
  font-size:small;
}
@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
.contactInfoDiv h5{
  width:50%;
}
.rightFooter h5 {
  margin-left: 50vw;
}
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
.footer {
  height: 30vh;
}
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
.footer {
  height: 30vh;
}
.rightFooter h5 {
  margin-left: 30vw;
}
}
@media all and (min-width: 540px) { /*Surface Duo*/
.footer {
  height: 30vh;
}
.leftFooter {
  width: 40%;
  float:left;
}
.footer h5 {
  font-size: larger;
}
.rightFooter {
  width:40%;
  border-left: double;
  border-top: none;
  border-width: 2px;
  overflow: hidden;
  padding:0;
  padding-left:6vw;
  margin-left: 0vw;
}
}
@media all and (min-width: 768px) { /*iPad*/
.footer {
  height: 30vh;
}
.leftFooter {
  width: 50%;
}
.rightFooter {
  width:40%;
}
#layout a{
  font-size: larger;
}
p {
  font-size:larger;
}
}
@media all and (min-width: 1024px) { /*iPad Pro*/
.footer {
  height: 25vh;
}
}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
}
@media all and (min-width: 1256px) { /*Smaller laptop screens*/
}
@media all and (min-width: 1496px) { /*smaller-medium laptop screens*/
}
@media all and (min-width: 1660px) { /*medium laptop screens*/
}
@media all and (min-width: 18240px) { /*medium-larger laptop screens*/
}
@media all and (min-width: 1996px) { /*larger laptop screens*/
}
</style>