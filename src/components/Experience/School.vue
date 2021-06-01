<template>
<div class="schoolHeader">
      <h2>{{school.Name}} </h2>
      <img alt="pic" :src="school.Picture" />
      <h3>{{school.Course}}</h3>
      <p>{{school.When}}</p>
</div>
        <Button text="More" class="descMinMaxBtn" @click="showHideDesc"></Button>
      <transition-group  name="descTransition" mode="out-in" >
        <p v-if="!descHidden">{{school.Desc}}</p>
      </transition-group>
</template>

<script>
import Button from "../Shared/sharedAssets/Button"

export default {
    inheritAttrs: false,
    name: 'School',
    props: {
        school: Object,
        src: String
    },
    components: {
        Button
    },
    data() {
        return {
            descHidden: true
        }
    },
    methods: {
        async showHideDesc() {
            this.descHidden = !this.descHidden
        }
    }
}
</script>

<style scoped>
.schoolDiv p {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.schoolDiv h2 {
    padding-bottom: 2vh;
}
.schoolDiv h3 {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.descMinMaxBtn {
    position: relative;
    background-image:linear-gradient(to right, rgb(245, 245, 245), rgb(224, 224, 224), rgb(245, 245, 245));
    padding: 10px 20px;
    left: 17vw;
    right:0vw;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px 2px;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;
    transition: ease-in-out, 0.02s;
}
.descMinMaxBtn:hover {
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.descMinMaxBtn:active {
    box-shadow: 0px 0px 0px;
    margin-right:-5px;
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.descTransition-enter-active, .descTransition-leave-active {
    transition: opacity 1s ease-in-out;
}
.descTransition-enter-from, .descTransition-leave-to {
    opacity: 0;
    transition-duration: .3s;
}
.descTransition-leave-from, .descTransition-enter-to {
    opacity: 1;
    transition-duration: 1s;
}
img{
    height: 80px;
    width: auto;
    float:right;
    border-style: solid;
    border-radius: 10%;
    border-width: 1px;
    border-color:mediumturquoise;
    cursor:pointer;
}

@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
.schoolHeader h2 {
    display: none;
}
.schoolHeader h3 {
    padding-top: 1vh;
}
img{
    height: 80px;
    max-width:100%;
    width: auto;
    float:none;
}
.descMinMaxBtn {
    left: 28vw;
    position: relative;
    padding: 3vh 8vw;
    padding-right: 20vw;
    font-size: 1.1rem;
    line-height: 2px;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
.schoolHeader h2 {
    display: none;
}
.schoolHeader h3 {
    padding-top: 1vh;
}
img{
    height: 80px;
    max-width:100%;
    width: auto;
    float:none;
}
.descMinMaxBtn {
    position: relative;
    padding: 3vh 8vw;
    padding-right: 20vw;
    font-size: 1.1rem;
    line-height: 2px;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
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
img{
    height: 110px;
    width: auto;
    float:none;
}
.descMinMaxBtn {
    left: 12vw;
    padding: 2vh 8vw 2vh 4vw;   
    font-size: 20px;
}
.schoolHeader h3 {
    font-size: xx-large;
}
.schoolHeader p {
    font-size: x-large;
}
}
@media all and (min-width: 1024px) { /*iPad Pro*/
.descMinMaxBtn {
    width: 5%;
    left: 12vw;
    padding-left:1vw;
    padding-right: 1vw;
    font-size: 1.2rem;
}
}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
.descMinMaxBtn {
    left: 8vw;
}
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