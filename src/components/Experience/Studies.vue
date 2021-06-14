<template>
  <h2>{{title}}</h2>
  <div :key="school.id" v-for="school in schools" class="schoolDiv">
      <School :school="school" :descHidden="descHidden" />
  </div>
</template>

<script>
import School from "./School"

export default {
    name: 'Studies',
    props: {
        title: {
            type: String,
            default: 'defaultTitle'
        },
        descHidden: {
            type: Boolean,
            default: true
        },
        schools: Array
    },
    components: {
        School,
    }
}
</script>

<style>
@media all and (min-width: 1px) and (min-height:1px) {
.schoolDiv {
    width:100%;
    background-image:linear-gradient(to right, rgb(213, 230, 191), rgb(255, 230, 230), rgb(255, 240, 226));
    border: 1px solid;
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189);
    margin:5px;
    margin-bottom: 3vh;
    padding:5%;
}
.studiesDiv h2 {
    font-size: 1.2rem;
}
}
@media all and (min-width: 800px) and (min-height:1px) { /* RESPONSIVE Defaultish */
.schoolDiv {
    width:90%;
}
}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px) { /*Galaxy fold */
.schoolDiv {
    width:82%;
    margin-left: 3%;
    margin-bottom: 3vh;
    margin-bottom: 3vh;
}
}@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px) { /*Galaxy fold rotated */
.schoolDiv {
    width:80%;
    margin-left: 3%;
    margin-bottom: 3vh;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.schoolDiv {
    width:80%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated*/
.schoolDiv {
    width:72%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.schoolDiv {
    width:72%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px) { /*Moto 4 & Galaxy S5 rotated */
.schoolDiv {
    width:72%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8 */
.schoolDiv {
    width:80%;
    margin-left: 10%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 667px) and (min-width: 668px) and (min-height:375px) and (max-height:376px) { /*iPhone 6/7/8 rotated*/
.schoolDiv {
    width:100%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px) { /*iPhone 6/7/8 Plus */
.schoolDiv {
    width:72%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height: 414px) and (max-height: 415px) { /* iPhone 6/7/8 Plus rotated*/
.schoolDiv {
    width:72%;
    margin-left:2%;
    margin-bottom: 3vh;
}
.studiesDiv h2 {
    text-align: left;
    margin-left: 30%;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px) { /*iPhone X */
.schoolDiv {
    width:72%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px) { /*iPhone X */
.schoolDiv {
    width:78%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px) { /* Pixel 2 */
.schoolDiv {
    width:86%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px)  { /* Pixel2 */
.schoolDiv {
    width:86%;
    margin-left:10%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.schoolDiv {
    width:80%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px)  { /* Pixel2 XL rotated */
.schoolDiv {
    width:80%;
    margin-left:4%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.schoolDiv {
    width:80%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo*/
.schoolDiv {
    width:82%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.schoolDiv {
    width:80%;
    margin-left: 1%;
    margin-bottom: 3vh;
}
.studiesDiv h2 {
    font-size: 1.6rem;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro rotated */
.schoolDiv {
    width:80%;
    margin-left:1%;
    margin-bottom: 3vh;
}
.studiesDiv h2 {
    font-size: 1.6rem;
}
}
</style>