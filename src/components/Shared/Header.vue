<template>
<div class="titleDiv">
        <h1 class="title">{{title}}</h1> 
        <h2 class="name">Mikael Puusaari</h2>
  </div>
  
</template>

<script>
export default {
    name: "Header",
    props: {
        title: {
            type: String,
            default: "titleDefault"
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'cassandra';
    src: url('./sharedAssets/fonts/cassandra-webfont.woff2') format('woff2'),
         url('./sharedAssets/fonts/cassandra-webfont.woff') format('woff'),
         url('./sharedAssets/fonts/cassandra.ttf');
    font-weight: normal;
    font-style: normal;
    font-size: 2rem;
    }
@media all and (min-width: 50px)  and (min-height:50px) {
.titleDiv {
    width:86%;
    margin-left: 1%;
    padding: 5% 3vw;
    border-top: 3px solid #1C6EA4;
    border-bottom: 8px double #1C6EA4;
    border-radius: 130px 0px 130px 0px;
    background-image: url('./sharedAssets/swirlbckgrndtop.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    caret-color: transparent;
    margin-top: 1vh;
    margin-bottom:0vh;
}

.title {
    font-weight: 500;
    display:inline-block;
    padding:0;
    width:60%;
    font-family: "cassandra";
    font-size: 1.2rem;
    border-bottom: double;
    border-width: .5rem;
    animation: skewTitle 3s infinite;
    transform: skewTitle(15deg);
    animation-direction: alternate;
}
.name {
    display: inline-block;
    width:60%;
    font-family: "cassandra";
    font-size: 1rem;
    color: rgb(114, 112, 212);
    animation: skewName 3s infinite;
    transform: skewName(15deg);
    animation-direction: alternate;
}
@keyframes skewTitle {
  0% {
    transform: skewX(-15deg);
  }
  3% {
      transform: skewX(-15deg);
  }
  97% {
    transform: skewX(15deg);
  }
  100% {
    transform: skewX(15deg);
  }
}
@keyframes skewName {
  0% {
    transform: skewX(15deg);
  }
  3% {
      transform: skewX(15deg);
  }
  97% {
    transform: skewX(-15deg);
  }
  100% {
    transform: skewX(-15deg);
  }
}
img {
    width: 50px;
}
}
@media all and (min-width: 400px) and (min-height:1px) {
    .titleDiv {
    padding-top: 2%;
    padding-bottom: 1%;
}
.title {
    font-size: 1.3rem;
}
.name {
    font-size: 1.1rem;
}
}
@media all and (min-width: 500px) and (min-height:1px) {
    .titleDiv {
    padding-top: 1%;
    padding-bottom: 0%;
}
.title {
    font-size: 1.5rem;
}
.name {
    font-size: 1.2rem;
}
}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px) { /* Galaxy fold */
.titleDiv {
     width: 91%;
}
.title {
    font-size: 1.4rem;
}
.name {
    font-size: 1rem;
}
img {
    width: 50px;
    position: relative;
    bottom: 10vh;
}
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.titleDiv {
     width: 91%;
}
.title {
    font-size: 1.2rem;
}
.name {
    font-size: 1rem;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.titleDiv {
     width: 90%;
}
.title {
    font-size: 1.2rem;
}
.name {
    font-size: 1rem;
}
img {
    width: 50px;
    position: relative;
    bottom: 8vh;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated */
.titleDiv {
    width: 90%;
    margin-left:2%;
}
.title {
    font-size: 1.1rem;
}
.name {
    font-size: 1rem;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px)  { /*Moto 4 & Galaxy S5 */
.titleDiv {
    width: 90%;
}
.title {
    font-size: 1.2rem;
}
.name {
    font-size: 1rem;
}
img {
    width: 50px;
    position: relative;
    bottom: 10vh;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px)  { /*Moto 4 & Galaxy S5 rotated */
.titleDiv {
    width: 90%;
}
.title {
    font-size: 1.2rem;
}
.name {
    font-size: 1rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px)  and (max-height:668px)  { /*iPhone 6/7/8 */
.titleDiv {
    width: 90%;
}
.title {
    font-size: 1.2rem;
}
.name {
    font-size: 1rem;
}
img {
    width: 50px;
    position: relative;
    bottom: 10vh;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px)  and (max-height:376px)  { /*iPhone 6/7/8 rotated */
.titleDiv {
    width: 91%;
}
.title {
    font-size: 1.3rem;
}
.name {
    font-size: 1rem;
}
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
.titleDiv {
    width: 90%;
    margin-left: 1%;
}
.title {
    font-size: 1.2rem;
}
.name {
    font-size: 1rem;
}
img {
    width: 50px;
    position: relative;
    bottom: 9vh;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.titleDiv {
    width: 91%;
    margin-left: 0%;
}
.title {
    font-size: 1.2rem;
}
.name {
    font-size: 1rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.titleDiv {
    margin-left: 1%;
}
.title {
    font-size: 1.4rem;
}
.name {
    font-size: 1.2rem;
}
img {
    width: 50px;
    position: relative;
    bottom: 8vh;
}
}
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px)  { /*iPhone X rotated */
.titleDiv {
    width: 91%;
    margin-left: 1%;
}
.title {
    font-size: 1.2rem;
}
.name {
    font-size: 1rem;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.titleDiv {
    width: 91%;
    margin-left: 0%;
}
.title {
    font-size: 1.3rem;
}
.name {
    font-size: 1.1rem;
}
img {
    width: 50px;
    position: relative;
    bottom: 9vh;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.titleDiv {
    width: 91%;
    margin-left: 0%;
}
.title {
    font-size: 1.3rem;
}
.name {
    font-size: 1rem;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /*  Pixel 2 XL */
.titleDiv {
    width: 90%;
    margin-left: 0%;
}
.title {
    font-size: 1.4rem;
}
.name {
    font-size: 1.1rem;
}
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.titleDiv {
    width: 91%;
    margin-left: 0%;
}
.title {
    font-size: 1.4rem;
}
.name {
    font-size: 1rem;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.titleDiv {
    width: 92%;
    margin-bottom:0vh;
}
.title {
    font-size: 1.5rem;
}
.name {
    font-size: 1.2rem;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.titleDiv {
    width: 91%;
    margin-bottom:0vh;
}
.title {
    font-size: 1.5rem;
}
.name {
    font-size: 1.2rem;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /* iPad */
.titleDiv {
    width:91%;
    margin-bottom:3vh;
    padding: 2vh 3vw;
}
.title {
    font-size: 2rem;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 768px) and (max-height: 769px) { /* iPad rotated*/
.titleDiv {
    width:91%;
    margin-bottom:3vh;
}
.title {
    font-size: 1.8rem;
}
.name {
    font-size: 1.3rem;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.titleDiv {
    width: 91%;
    margin-bottom:1vh;
}
.title {
    font-size: 2.5rem;
}
.name {
    font-size: 1.8rem;
}
img {
    position:relative;
    width: 80px;
    top: 1vh;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro rotated */
.titleDiv {
    width: 92%;
    padding: 1vh 3vw;
    margin-bottom:0vh;
}
.title {
    font-size: 2.6rem;
}
.name {
    font-size: 2rem;
}
img {
    position:relative;
    width: 80px;
    top: 1vh;
}
}
@media all and (min-width: 1080px) and (max-width:1081px) and (min-height:2160px) and (max-height:2161px) { /* Asus Zenfone Max Pro */
.titleDiv {
    width: 92%;
    margin-left: 1%;
    padding: 1vh 3vw;
    margin-bottom:0vh;
}
.title {
    font-size: 1.6rem;
}
}
</style>