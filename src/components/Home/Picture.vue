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
    height: 28vh;
    width: 10vw;
    border-style: solid;
    border-width: 5px;
    border-color:rgb(126, 170, 126);
    border-radius: 50%;
    margin-bottom: 1rem;
    caret-color: transparent;
}:hover {
    opacity: 0.92;
    cursor: pointer;
    }

    @media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
.thePic {
    height: 35vh;
    width: auto;
    left:0;
    padding:0;
    margin:0;
    border-width: 0px;
}
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
.thePic {
    height: 34vh;
    width: auto;
    
    padding:0;
    margin:0;
    border-width: 0px;
}
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
.thePic {
    height: 34vh;
    width: auto;
    padding:0;
    margin:0;
    border-width: 0px;
}
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
}
@media all and (min-width: 540px) { /*Surface Duo*/
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
    
</style>>
