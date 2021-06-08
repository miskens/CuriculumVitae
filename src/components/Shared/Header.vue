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
.titleDiv {
    width:88%;
    margin-left: 3%;
    padding: 3vh 3vw;
    border-top: 3px solid #1C6EA4;
    border-bottom: 8px double #1C6EA4;
    border-radius: 130px 0px 130px 0px;
    background-image: url('./sharedAssets/swirlbckgrndtop.png');
    background-repeat: no-repeat;
    background-size: auto 100%;
    caret-color: transparent;
    margin-bottom:2vh;
    }
.title {
    font-weight: 600;
    display: inline-block;
    padding:0;
    width:60%;
    font-size:small;
}
@media all and (min-width: 280px)  and (max-height:655px){ /*Galaxy fold: maxwidth due to interference towards higher*/
}
@media all and (min-width: 320px)  and (max-height:570px){ /*iPhone 5/SE*/
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 360px) and (max-height:641px)  { /*Moto 4 & Galaxy S5 */
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 375px) and (max-height:669px)  { /*iPhone 6/7/8 */
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (min-height:737px)  { /*iPhone 6/7/8 Plus */
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
.title {
    font-size: 1.2rem;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.title {
    font-size: 1.4rem;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.title {
    font-size: 1.4rem;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /*  Pixel 2 XL */
.title {
    font-size: 1.4rem;
}
}
@media all and (min-width: 540px) and (min-height:72px) and (max-height:721px) { /*Surface Duo*/
.titleDiv {
    margin-bottom:3vh;
}
.title {
    font-size: 1.5rem;
}
}
@media all and (min-width: 768px) and (max-height: 1024px) { /*iPad*/
.titleDiv {
    margin-bottom:3vh;
}
.title {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1024px) and (max-height: 1367px) { /*iPad Pro*/
.titleDiv {
    margin-bottom:3vh;
}
.title {
    font-size: 2.4rem;
}
}
@media all and (min-width: 1124px)  and (min-height:1368px){ /* otherwise responsive*/
.title {
    font-size: 1.8rem;
}
}

</style>