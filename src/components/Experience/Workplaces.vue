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
.companyDiv {
    width:100%;
    height: auto;
    background-image:linear-gradient(to right, rgb(219, 219, 219), rgb(255, 230, 230), rgb(255, 240, 226));
    border: 1px solid;
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189);
    margin:5px;
    margin-left: 5vw;
    padding:10px 20px;
    margin-bottom: 3vh;
}
h2 {
    font-size: 1.2rem;
}
@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
.companyDiv {
    width:70%;
    margin:0;
    margin-left:0px;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
.companyDiv {
    width:78%;
    margin:0;
    margin-left:0px;
    /* padding:20px 28px; */
    padding-left:10;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
}
@media all and (min-width: 540px) { /*Surface Duo*/
}
@media all and (min-width: 768px) { /*iPad*/
h2 {
    font-size: 1.3rem;
}
}
@media all and (min-width: 1024px) { /*iPad Pro*/
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