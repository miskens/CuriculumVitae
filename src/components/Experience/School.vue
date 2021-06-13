<template>
<div class="schoolHeader">
      <h2>{{school.Name}} </h2>
      <img alt="pic" :src="school.Picture" />
      <h6>{{school.Course}}</h6>
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
@media all and (min-width: 1px) and (min-height:1px) {
    .schoolHeader {
        padding: 3%;
    }
p {
    font-size: .9rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
h2 {
    font-size: 1.1rem;
    padding-bottom: 2vh;
}
h6 {
    font-size: .9rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.descDiv {
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
    margin-top: 5vh;
    padding:0;
}
.descMinMaxBtn {
    position:relative;
    width: 80px !important;
    height: 30px !important;
    background-image:linear-gradient(to right, rgb(245, 245, 245), rgb(224, 224, 224), rgb(245, 245, 245));
    left: 26%;
    width: 500px;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px 2px;
    font-size: 1.2rem;
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
    height: 65px;
    width: auto;
    max-width: 100%;
    float:none;
    border-style: solid;
    border-radius: 10%;
    border-width: 1px;
    border-color:mediumturquoise;
    cursor:pointer;
}
@media all and (min-width: 350px) and (min-height:1px) {
.descMinMaxBtn {
    left: 30%;
}
}
@media all and (min-width: 600px) and (min-height:1px) {
.descMinMaxBtn {
    left: 34%;
}
}
@media all and (min-width: 700px) and (min-height:1px) {
.descMinMaxBtn {
    left: 38%;
}
}
@media all and (min-width: 800px) and (min-height:1px) {
.descMinMaxBtn {
    left: 23%;
}
}
@media all and (min-width: 1000px) and (min-height:1px) {
.descMinMaxBtn {
    left: 28%;
}
}
@media all and (min-width: 1200px) and (min-height:1px) {
.descMinMaxBtn {
    left: 33%;
}
}
@media all and (min-width: 280px) and (max-width:281px) and (min-height:653px) and (max-height:654px){ /*Galaxy fold */
.schoolHeader h2 {
    display: none;
}
.schoolHeader h3 {
    padding-top: 0;
}
.descMinMaxBtn {
    position: relative;
    left: 22vw;
    padding: .8rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: .9rem;
}
p {
    font-size: .9rem;
}
}
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.schoolHeader {
    padding-left: 1vw;
}
.schoolHeader h2 {
    font-size: 1rem;
}
img{
    margin-top: 3vh;
    margin-left: 0vw;
}
.descMinMaxBtn {
    position: relative;
    left: 23vw;
    padding: .8rem .4rem;
    font-size: .8rem;
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
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.schoolHeader {
    padding:3%;
}
.schoolHeader h2 {
    font-size: 1rem;
}
.schoolHeader h3 {
    padding-top: 1vh;
}
img{
    margin-top: 3vh;
    margin-left: 0vw;
}
.descMinMaxBtn {
    position: relative;
    left: 20vw;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated */
.schoolHeader h2 {
    font-size: 1rem;
}
.schoolHeader h3 {
    padding-top: 2vh;
}
.descMinMaxBtn {
    position: relative;
    left: 23vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
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
h6 {
    font-size: 1.1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.schoolHeader h2 {
    font-size: 1rem;
}
img{
    margin-top: 1vh;
    margin-left: 0vw;
}
.descMinMaxBtn {
    position: relative;
    left: 18vw;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
.schoolHeader h2 {
    font-size: 1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 20vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height: 667px) and (max-height:668px) { /*iPhone 6/7/8 */
.schoolHeader {
    padding:3%;
}
.schoolHeader h2 {
    font-size: 1rem;
}
img{
    margin-top: 1vh;
    margin-left: 0vw;
}
.descMinMaxBtn {
    position: relative;
    left: 28%;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: .9rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
img {
    float:none;
}
.schoolHeader {
    padding:3%;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 24vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-size: .8rem;
}
h6 {
    font-size: 1rem;
}
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
.schoolHeader {
    padding: 3%;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
img{
    float:none;
}
.descMinMaxBtn {
    position: relative;
    left: 32%;
    padding: .9rem 1.1rem;
    padding-right:3rem;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-size: 1rem;
}
h6 {
    font-size: 1rem;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: .9rem;
}
.descMinMaxBtn {
    position: relative;
    left: 36%;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px) { /* iPhone X*/
.schoolHeader {
    padding: 3%;
}
.schoolHeader h5 {
    font-size: 1.1rem;
}
img{
    float:none;
}
.descMinMaxBtn {
    position: relative;
    left: 32%;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 812px) and (min-height:375px) and (max-height:376px) { /* iPhone X rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.descMinMaxBtn {
    position: relative;
    left: 22vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.schoolHeader h2 {
    font-size: 1.2rem;
}
img{
    height: 50px;
    float:none;
    margin-top: 1vh;
    margin-left: 0vw;
}
.descMinMaxBtn {
    position: relative;
    left: 32%;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.descMinMaxBtn {
    position: relative;
    left: 13vw;
    padding: .9rem 1rem;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: .9rem;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 30%;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 34%;
    padding: .9rem 1rem;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 22vw;
    padding: 1rem 1.6rem;
    padding-right: 3.5rem;
    font-size: .9rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 10vw;
    padding: 1rem 1.6rem;
    padding-right: 3.5rem;
    font-size: .9rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.schoolHeader {
    padding: 3%;
}
img{
    height: 120px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.descMinMaxBtn {
    margin-right: 28%;
    padding: 1.4rem 1rem 1.4rem 2rem;
    margin-bottom: 1vh;
    padding-right: 5rem;
    line-height: 4px;  
    font-size: 1.6rem;
}
.descMinMaxBtn:active {
    box-shadow: 0px 0px 0px;
    margin-right:58px;
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.schoolHeader h3 {
    font-size: xx-large;
}
.schoolHeader p {
    font-size: x-large;
}
p {
    font-size: large;
}
h6 {
    font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
img {
    max-width:40%;
}
.descMinMaxBtn {
    left: 12vw;
    bottom: 1vh;
    line-height: 4px;
    padding: 1.4rem 1rem 1.4rem 2rem;
    padding-right: 5rem;
    font-size: 1.6rem;
}
h6 {
    font-size: 1.3rem;
}
p {
  font-size: 1.2rem;
}
}
@media all and (min-width: 1024px) and (max-width:1025px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.schoolHeader {
    padding: 3%;
}
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.descMinMaxBtn {
    margin-left: 11%;
    padding: 1.4rem 1rem 1.4rem 2rem;
    padding-right: 4.8rem;
    font-size: 1.7rem;
    line-height: 2px;
}
.schoolHeader h2 {
    font-size: 2rem;
}
.schoolHeader p {
    font-size: 1.8rem;
}
p {
    font-size: 1.5rem;
}
h6 {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1366px) and (max-width:1367px) and (min-height:1024px) and (max-height:1025px) { /* iPad Pro rotated*/
.companyHeader {
    padding:3%;
}
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.descMinMaxBtn {
    margin-left: 10%;
    line-height: 4px;
    padding: 1.4rem 1rem 1.4rem 2rem;
    padding-right: 6rem;
    font-size: 1.6rem;
}
.scoolHeader h3 {
    font-size: 1.6;
}
.scoolHeader p {
    font-size: 1.6;
}
p {
    font-size: 1.6rem;
    padding:2%;
}
h5 {
    font-size: 1.4rem;
}
h6 {
    font-size: 1.6rem;
}
}
</style>