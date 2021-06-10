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
@media all and (min-width: 50px) and (min-height: 50px) {
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
}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px) { /*Galaxy fold */
.schoolDiv {
    width:70%;
    padding-left: 3%;
    margin-left: 0%;
    margin-bottom: 3vh;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px) { /*Galaxy fold rotated */
.schoolDiv {
    width:70%;
    padding-left: 3%;
    margin-left: 0%;
    margin-bottom: 3vh;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 320px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated*/
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 360px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px) { /*Moto 4 & Galaxy S5 */
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 375px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8 */
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px) { /*iPhone 6/7/8 Plus */
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px) { /*iPhone X */
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /* Pixel 2, Pixel 2 XL */
.schoolDiv {
    width:72%;
    margin:0;
    padding:20px 28px;
    margin-bottom: 3vh;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.schoolDiv {
    width:86%;
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
</style>