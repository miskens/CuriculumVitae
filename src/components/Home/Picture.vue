<template>
  <img class="thePic" :id="id" @click="$emit('img-click')" :alt="alt" :src="src" />
</template>

<script>
export default {
    name: "Picture",
    components: { 
    },
    props: {
        id: String,
        src: String,
        alt: String,
    },
    methods: {
    }
}
</script>
<style scoped>
.thePic {
    height: 220px;
    width: auto;
    border-style: solid;
    border-width: 5px;
    border-color:rgb(126, 170, 126);
    border-radius: 50%;
    margin-bottom: 1rem;
    image-orientation: from-image;
    caret-color: transparent;
}:hover {
    opacity: 0.92;
    cursor: pointer;
    }

@media all and (min-width: 280px) and (max-width: 281px) and  (min-height:653px) and (max-height:654px) { /*Galaxy fold */
.thePic {
    width: auto;
    left:0;
    padding:0;
    margin:0;
    border-width: 0px;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px)  { /*iPhone 5/SE*/
.thePic {
    width: auto;
    padding:0;
    margin:0;
    border-width: 0px;
}
}
@media all and (min-width: 360px) and (max-width:361px) and (min-height:640px) and (max-height:641px)  { /*Moto 4 & Galaxy S5 */
.thePic {
    width: auto;
    padding:0;
    margin:0;
    border-width: 0px;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px) and (max-height:668px)   { /*iPhone 6/7/8 */
.thePic {
    width: auto;
    padding:0;
    margin:0;
    border-width: 0px;
}
}
@media all and (min-width: 414px) and (max-width: 415px)  and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
.thePic {
    width: auto;
    padding:0;
    margin:0;
    border-width: 0px;
}
}
@media all and (min-width: 411px) and (max-width:412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.thePic {
    width: auto;
    float:left;
    padding:0;
    margin:0;
    margin-bottom: 4vh;
    border-width: 0px;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.thePic {
    width: auto;
    float:left;
    padding:0;
    margin:0;
    margin-bottom: 4vh;
    border-width: 0px;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.thePic {
    width: auto;
    padding:0;
    margin:0;
    margin-bottom: 4vh;
    border-width: 0px;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
}
@media all and (min-width: 768px) { /*iPad*/
}
@media all and (min-width: 1024px) { /*iPad Pro*/
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.thePic {
    height:310px;
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
    
</style>>
