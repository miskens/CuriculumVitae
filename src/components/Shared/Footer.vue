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
@media all and (min-width: 280px) and (min-height:653px) and (max-height:654px) { /*Galaxy fold */
.footer {
  height:26vh;
  width: 84%;
  margin-top: 2vh;
  margin-left:5%;
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
  padding-left: 10vw;
  top: 0;
  left: 0px;
  margin: 0;
  overflow: auto;
}
h5 {
  margin-bottom: 1vh;
  font-size: x-small;
}
#layout a{
  color:rgb(85, 50, 150);
  font-size: x-small;
  width:100%;
}
p {
  font-size:xx-small;
}
}
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.footer {
  height: 72vh;
}
}
@media all and (min-width: 320px) and (min-height:570px) and (max-height:571px) { /*iPhone 5/SE*/
.contactInfoDiv h5{
  width:50%;
}
.rightFooter h5 {
  margin-left: 50vw;
}
}
@media all and (min-width: 568px) and (min-height:320px) and (max-height:321px)  { /*iPhone 5/SE rotated*/
.footer {
  height: 64vh;
}
}
@media all and (min-width: 360px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 640px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
.footer {
  height: 58vh;
}
}
@media all and (min-width: 375px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8 */
.footer {
  height: 30vh;
}
}
@media all and (min-width: 667px)and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
.footer {
  height: 56vh;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.footer {
  height: 28vh;
}
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.footer {
  height: 50vh;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.footer {
  height: 28vh;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
.footer {
  height: 30vh;
}
.contactInfoDiv h5{
  width:50%;
}
.rightFooter h5 {
  margin-left: 50vw;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.footer {
  height: 50vh;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.footer {
  height: 28vh;
}
}
@media all and (min-width: 540px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
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
@media all and (min-width: 720px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.footer {
  height: 40vh;
}
}
@media all and (min-width: 768px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.footer {
  height: 32vh;
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
p {
  font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.footer {
  height: 38vh;
}
#layout a {
font-size: 1.2rem;
}
h5 {
  font-size: 1.3rem;
}
p {
  font-size: 1.2rem;;
}
}
@media all and (min-width: 1024px)and (min-height: 1366px)  and (max-height: 1367px) { /*iPad Pro*/
#layout a{
  font-size: 1.8rem;
}
.footer h5 {
  font-size: 2rem;
  padding-bottom: 2vh;
}
.footer {
  height: 34vh;
}
.rightFooter {
  padding:0;
  padding-left: 10%;
}
p {
  font-size: 1.8rem;
}
}
@media all and (min-width: 400px) and (min-height:1368px) { /* For smaller window than smallest laptop screens */
#layout a{
  font-size: 1.8rem;
}
.footer h5 {
  font-size: 2rem;
  padding-bottom: 2vh;
}
.footer {
  height: 34vh;
}
.leftFooter {
  width: 40%;
  float:left;
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
p {
  font-size: 1.8rem;
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