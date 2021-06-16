<template>
  <h2>{{title}}</h2>
  <div :key="company.id" v-for="company in companies" class="companyDiv">
      <Company :company="company" :techHidden="techHidden" />
  </div>
</template>

<script>
import Company from "./Company"

export default {
    name: 'Workplaces',
    props: {
        title: {
            type: String,
            default: 'defaultTitle'
        },
        techHidden: {
            type: Boolean,
            default: true
        },
        companies: Array
    },
    components: {
        Company,
    },
    data() {
        return {
        }
    }
}
</script>

<style>
@media all and (min-width: 1px) and (min-height:1px) {
.companyDiv {
    width:100%;
    /* background-image:linear-gradient(to right, rgb(198, 206, 240), rgb(255, 230, 230), rgb(255, 240, 226)); */
    background: linear-gradient(to right, rgb(198, 206, 240), transparent);
    border: 1px solid;
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189);
    margin:5px;
    margin-bottom: 3vh;
    padding:5%;
}
.worklifeDiv h2 {
    font-size: 1.2rem;
}
}
@media all and (min-width: 800px) and (min-height:1px) { /* RESPONSIVE Defaultish */
.companyDiv {
    width: 90%;
}
}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px){ /* Galaxy fold */
.companyDiv {
    width:80%;
    padding-left: 7%;
    margin-left: 1%;
    margin-bottom: 3vh;
}
h2 {
    font-size: 1.2rem;
}
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /* Galaxy fold rotated */
.companyDiv {
    width:70%;
    padding-left: 3%;
    margin-bottom: 3vh;
}
.worklifeDiv h2 {
    position: relative;
    right: 10%;
    font-size: 1.2rem;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.companyDiv {
    width:80%;
    margin:0;
    margin-left:10%;
    margin-bottom: 3vh;
}
h2 {
    font-size: 1.1rem;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE*/
.companyDiv {
    width:80%;
    margin:0;
    margin-bottom: 3vh;
}
h2 {
    font-size: 1.1rem;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.companyDiv {
    width:72%;
    margin:0;
    margin-left:14%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px) { /*Moto 4 & Galaxy S5 rotated */
.companyDiv {
    width:72%;
    margin:0;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8 */
.companyDiv {
    width:80%;
    margin:0;
    margin-left:10%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px) { /*iPhone 6/7/8 rotated */
.companyDiv {
    width:100%;
    margin:0;
    padding-left:2%;
    margin-bottom: 3vh;
}
} 
@media all and (min-width: 414px) and (max-width: 415px) and (min-height: 736px) and (max-height: 737px) { /* iPhone 6/7/8 Plus*/
.companyDiv {
    width:72%;
    margin-left:5%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height: 414px) and (max-height: 415px) { /* iPhone 6/7/8 Plus rotated*/
.companyDiv {
    width:72%;
    margin-left:2%;
    margin-bottom: 3vh;
}
.worklifeDiv h2 {
    text-align: left;
    margin-left: 30%;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.companyDiv {
    width:72%;
    margin-left:18%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px) { /*iPhone X rotated */
.companyDiv {
    width:78%;
    margin-left:18%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px)  { /* Pixel2 */
.companyDiv {
    width:86%;
    margin:0;
    padding-left:10%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px)  { /* Pixel2 rotated */
.companyDiv {
    width:86%;
    padding-left:10%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px)  { /* Pixel2 XL */
.companyDiv {
    width:80%;
    margin-left:8%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px)  { /* Pixel2 XL rotated */
.companyDiv {
    width:80%;
    margin-left:8%;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.companyDiv {
    width:80%;
    margin-left:8%;
    margin-bottom: 3vh;
}
h2 {
    font-size: 1.3rem;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /* iPad */
.companyDiv {
    width:80%;
    margin-left:1%;
    margin-bottom: 3vh;
}
.worklifeDiv h2 {
    font-size: 1.6rem;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1367px) { /* iPad Pro */
.companyDiv {
    width:80%;
    margin-left:1%;
    margin-bottom: 3vh;
}
.worklifeDiv h2 {
    font-size: 1.6rem;
}
}
@media all and (min-width: 1366ppx) and (max-width: 1367ppx) and (min-height: 1024px) and (max-height: 1025px) { /* iPad Pro rotated */
.companyDiv {
    width:80%;
    margin-left:1%;
    margin-bottom: 3vh;
}
.worklifeDiv h2 {
    font-size: 1.6rem;
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