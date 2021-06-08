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
.schoolDiv {
    background-image:linear-gradient(to right, rgb(231, 255, 206), rgb(255, 230, 230), rgb(219, 219, 219));
    border: 1px solid;
    border-radius: 10px;
    box-shadow: 12px 12px 10px rgb(211, 200, 189);
    margin:5px;
    margin-left: 3vw;
    padding:10px 20px;
    width:35vw;
    margin-bottom: 3vh;
}
@media all and (max-width: 280px)  and (max-height:654px){ /*Galaxy fold: maxwidth due to interference towards higher*/
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 320px) and (max-height:570px) { /*iPhone 5/SE*/
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 360px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 540px) { /*Surface Duo*/
.schoolDiv {
    width:82%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 768px) { /*iPad*/
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