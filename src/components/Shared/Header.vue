<template>
<div class="titleDiv">
   <p class="title">{{title}}</p> 
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
@media all and (min-width: 50px)  and (min-height:50px) { /* Responsive defaultish*/
.titleDiv {
    width:88%;
    padding: 3vh 3vw;
    border-top: 3px solid #1C6EA4;
    border-bottom: 8px double #1C6EA4;
    border-radius: 130px 0px 130px 0px;
    background-image: url('./sharedAssets/swirlbckgrndtop.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    caret-color: transparent;
    margin-bottom:0vh;
    }
.title {
    font-weight: 600;
    display: inline-block;
    padding:0;
    width:60%;
    font-size:small;
}
}
@media all and (min-width: 50px) and (min-height:50px) { /* RESPONSIVE */

}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px) { /* Galaxy fold */
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.titleDiv {
     height: 20vh;
}
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.title {
    font-size: 1.1rem;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated */
.title {
    font-size: 1.1rem;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px)  { /*Moto 4 & Galaxy S5 */
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px)  { /*Moto 4 & Galaxy S5 */
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px)  and (max-height:668px)  { /*iPhone 6/7/8 */
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px)  and (max-height:376px)  { /*iPhone 6/7/8 */
.titleDiv {
     height: 18vh;
     padding-right:7vw;
}
.title {
    font-size: 1.3rem;
}
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
.titleDiv {
    margin-left: 1%;
    padding-right: 7vw;
}
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.titleDiv {
    margin-left: 2%;
    padding-right: 4vw;
}
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.titleDiv {
    margin-left: 1%;
    padding-right: 5vw;
}
.title {
    font-size: 1.4rem;
}
}
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px)  { /*iPhone X rotated */
.titleDiv {
    width: 87%;
  margin-left: 0%;
}
.title {
    font-size: 1.4rem;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.title {
    font-size: 1.4rem;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.titleDiv {
    width: 90%;
    margin-left: 0%;
}
.title {
    font-size: 1.3rem;
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
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.titleDiv {
    width: 90%;
    margin-left: 0%;
}
.title {
    font-size: 1.4rem;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.titleDiv {
    width: 92%;
    margin-bottom:2vh;
}
.title {
    font-size: 1.5rem;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.titleDiv {
    width: 91%;
    margin-bottom:3vh;
}
.title {
    font-size: 1.5rem;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /* iPad */
.titleDiv {
    width:94%;
    margin-bottom:3vh;
}
.title {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 768px) and (max-height: 769px) { /* iPad rotated*/
.titleDiv {
    margin-bottom:3vh;
}
.title {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.titleDiv {
    width: 90%;
    margin-bottom:3vh;
}
.title {
    font-size: 2.4rem;
}
}
</style>