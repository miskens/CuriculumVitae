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
@media all and (min-width: 50px) and (min-height: 50px) {
.companyDiv {
    width:100%;
    background-image:linear-gradient(to right, rgb(219, 219, 219), rgb(255, 230, 230), rgb(255, 240, 226));
    border: 1px solid;
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189);
    margin-bottom: 3vh;
}
}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px){ /* Galaxy fold */
.companyDiv {
    width:80%;
    padding-left: 3%;
    margin-left: 5%;
    margin-bottom: 3vh;
}
h2 {
    font-size: 1.2rem;
}
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /* Galaxy fold rotated */
.companyDiv {
    width:88%;
    padding-left: 3%;
    margin-left: 2%;
    margin-bottom: 3vh;
}
h2 {
    font-size: 1.2rem;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:570px) and (max-height:571px) { /*iPhone 5/SE*/
.companyDiv {
    width:85%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
h2 {
    font-size: 1.1rem;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.companyDiv {
    width:85%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px) { /*Moto 4 & Galaxy S5 rotated */
.companyDiv {
    width:85%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 375px) and (min-width: 376px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8 */
.companyDiv {
    width:85%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px) { /*iPhone 6/7/8 rotated */
.companyDiv {
    width:85%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
} 
@media all and (min-width: 414px) and (max-width: 415px) and (min-height: 736px) and (max-height: 737px) { /* iPhone 6/7/8 Plus*/
.companyDiv {
    width:85%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.companyDiv {
    width:86%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px)  { /* Pixel2 */
.companyDiv {
    width:86%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) and (max-width: 411px) and (min-height:823px) and (max-height:824px)  { /* Pixel2 XL */
.companyDiv {
    width:86%;
    margin:0;
    padding-left:10;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
h2 {
    font-size: 1.3rem;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
h2 {
    font-size: 1.3rem;
}
}
@media all and (min-width: 1024px) and (max-height: 1365px) { /*iPad Pro*/
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