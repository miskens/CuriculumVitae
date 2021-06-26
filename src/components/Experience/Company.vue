<template>
    <div class="companyHeader">
        <div class="titlePicDiv">
            <h2>{{company.Name}} </h2>
            <img alt="pic" :src="company.Picture" />
            <Button text="More" class="techMinMaxBtn" @click="showHideTech" />
        </div>
        <div class="assignmentInfoDiv">
            <h6>{{company.Assignment}}</h6>
            <p>When: {{company.When}}</p>
            <p>Boss: {{company.Boss}}</p>
        </div>
    </div>
    
        <div class="moreInfoDiv">  
            <transition-group  name="techTransition" mode="out-in" >
            <div class="descDiv" v-if="!techHidden"><p>{{company.Desc}}</p></div>
            </transition-group >
                <transition-group   name="techTransition" mode="out-in" >
                <h5 v-if="!techHidden">List of technologies:</h5>
                </transition-group >
                <transition-group   name="techTransition" mode="out-in" >
                    <div v-if="!techHidden" class="tableWrapperForTransition">
                        <table class="techListTable" >
                        <tr :key="t.id" v-for="t in company.Tech">
                            <td class="nameTd">{{t.Name}}</td>
                        </tr>
                </table></div>
                </transition-group >
        </div>
    
</template>

<script>
import Button from "../Shared/sharedAssets/Button"

export default {
    inheritAttrs: false,
    name: 'Company',
    props: {
        company: Object,
        src: String,
    },
    components: {
        Button
    },
    data() {
        return {
            techHidden: true
        }
    },
    methods: {
        async showHideTech() {
            this.techHidden = !this.techHidden
        }
    },
    async created() {
        
    },
    async mounted() {
    }
}
</script>

<style scoped>
@media all and (min-width: 1px) and (min-height:1px) {
p {
    font-size: 1.1rem;
}
.companyHeader {
    width:100%;
    height:auto;
    padding: 3%;
}
.titlePicDiv {
    width: 100%;
    float:left;
    clear:left;
}
.assignmentInfoDiv {
    margin-top: 250px;
}
h2 {
    font-size: 1.2rem;
    padding-bottom: 2vh;
}
h6 {
    font-size: 1rem;
}
.techMinMaxBtn {
    width: 100px !important;
    height: 30px !important;
    background-image: linear-gradient(rgb(151, 215, 226), rgb(30, 127, 172),rgb(151, 215, 226));
    color: rgb(245, 245, 245);
    margin: auto;
    margin-top: 10%;
    border-color: transparent;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgb(221, 221, 221);
    font-size: 1.1rem;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;
    transition: ease-in-out, 0.02s;
}
.techMinMaxBtn:active {
    transform: scale(0.98);
    margin-right:-3px;
    background-image: linear-gradient(rgb(144, 205, 216), rgb(29, 122, 165),rgb(144, 205, 216));
}
.techTransition-enter-active, .techTransition-leave-active {
    transition: opacity ease-in-out;
}
.techTransition-enter-from, .techTransition-leave-to {
    opacity:0;
    animation: leave .6s;
    transition-duration: .5s;
}
.techTransition-leave-from, .techTransition-enter-to{
    opacity:1;
    animation: bouncein .8s;
    transition-duration: .8s;
}
@keyframes bouncein {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
    }
@keyframes leave {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
    }
.tech {
    width:100%;
    position:relative;
    left: 0vw;
    bottom:1vh; 
}
.moreInfoDiv {
    width:100%;
    height: 100%;
    overflow: hidden;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
.techListTable {
    width:60%;
    height: auto;
    margin-left:0%;
}
img{
    display: block;
    height: 80px;
    max-width:100%;
    margin: auto;
    border-style: solid;
    border-radius: 10%;
    border-width: 1px;
    border-color:mediumturquoise;
    cursor:pointer;
}
.typeTd {
    display: inline-block;
    min-width: 80px;
    margin-right: 1vw;
    text-align: center;
    max-width: 250px;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(117, 172, 172, 0.8);
    background-color: rgba(240, 240, 240, 0.8);
    text-decoration: none;
}
.nameTd {
    display: block;
    width:100%;
    margin: auto;
    margin-bottom: 0.5vh;
    text-align: left;
    padding: 10px;
    border-left: solid;
    border-bottom: solid;
    border-width: 2px;
    border-color: rgba(117, 172, 172, 0.8);
    background-image:linear-gradient(to bottom, rgb(211, 245, 255), rgb(217, 217, 255), rgb(255, 255, 255));
    text-decoration: none;
}
h6 {
    font-size: .9rem;
}
p {
    font-size: .9rem;
}
@media all and (min-width: 350px) and (min-height:1px) {
    .techListTable {
        margin:auto;
    }
.nameTd {
    width:100%;
}
}
@media all and (min-width: 400px) and (min-height:1px) {
.companyHeader {
    display:inline;
}
.companyHeader h2 {
    padding: 0;
    margin: 0;
    margin-bottom: 10%;
}
.titlePicDiv {
    width: 50%;
}
.assignmentInfoDiv {
    width:40%;
    float:right;
    margin-top: 0%;
    margin-right: 3%;
}
.assignmentInfoDiv h6 {
    padding: 0;
}
}
@media all and (min-width: 500px) and (min-height:1px) {
.nameTd {
    max-width: 240px;
}
}
@media all and (min-width: 500px) and (max-width:799px) and (min-height:1px) {

}
@media all and (min-width: 600px) and (min-height:1px) {
}
@media all and (min-width: 700px) and (min-height:1px) {
}
@media all and (min-width: 800px) and (min-height:1px) {
}
@media all and (min-width: 1000px) and (min-height:1px) {
}
@media all and (min-width: 1200px) and (min-height:1px) {
}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px){ /*Galaxy fold */
.companyHeader {
    padding-left: 4%;
}
.companyHeader h2 {
    font-size: 1rem;
}
img{
    height: 65px;
    float:none;
    margin-top: 1vh;
    margin-left: 0vw;
}
.techMinMaxBtn {
    position: relative;
    bottom: 1vh;
    font-size: .8rem;
    line-height: 2px;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    margin-right: 30px;
    margin-bottom: 4vh;
}
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 30vw;
    width:39vw;
    height: auto;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
h6 {
    font-size: .9rem;
}
p {
    font-size: .9rem;
}
}
}
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.companyHeader {
    padding-left: 1vw;
}
.companyHeader h2 {
    font-size: 1rem;
    margin-left: 25%;
}
img{
    height: 80px;
    float:none;
    margin-top: 3vh;
    margin-left: 0vw;
}
.techMinMaxBtn {
    position: relative;
    left: 18vw;
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
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.techListTable {
    margin-left: 30%;
}
.nameTd {
    display: inline-block;
    min-width: 20vw;
    margin-left: 0%;
    width:24vw;
    height: auto;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.companyHeader {
    padding: 3%;
}
.companyHeader h2 {
    font-size: 1rem;
}
.companyHeader h3 {
    padding-top: 2vh;
}
img {
    max-width:100%;
    float:none;
}
.techMinMaxBtn {
    position: relative;
    left: 16vw;
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
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.techListTable {
    margin-left: 20%;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 568px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated */
.companyHeader h2 {
    font-size: 1.1rem;
}
.companyHeader h3 {
    padding-top: 2vh;
}
img {
    max-width:100%;
    float:none;
}
.techMinMaxBtn {
    position: relative;
    left: 22vw;
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
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:28vw;
    margin-left: 50%;
    text-align:left;
    margin-bottom: 0.5vh;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.companyHeader {
    padding: 5%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1rem;
}
.techListTable {
    margin-left: 18%;
}
.nameTd {
    display: inline-block;
    margin-left: 0%;
    width:36vw;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    margin-left: 4%;
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
@media all and (min-width: 640px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:25vw;
    margin-left:10%;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 16vw;
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
@media all and (min-width: 375px) and (min-height: 667px) and (max-height:668px) { /*iPhone 6/7/8 */
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.techListTable {
    margin-left: 20%;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:32vw;
    margin-left: 0%;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 28%;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: .9rem;
}
}
@media all and (min-width: 667px)and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
img {
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:100%;
    margin-left:35%;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 22vw;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-weight: 300;
    font-size: .8rem;
}
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus */
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:30vw;
    margin-left: 10%;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 32%;
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
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.companyHeader {
    padding: 3%;
}
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:18vw;
    margin-left:0%;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 36%;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .8rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px) { /* iPhone X*/
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:30vw;
    margin-left:10%;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 32%;
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
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px) { /* iPhone X rotated */
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:75%;
    margin-left: 38%;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 22vw;
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
.companyHeader {
    padding: 3%;
}
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    margin-left: 14%;
    width:120%;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 32%;
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
.companyHeader {
    padding: 3%;
}
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 4vw;
}
.nameTd {
    display: inline-block;
    width:110%;
    margin-left:0%;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 9vw;
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
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    margin-left: 5%;
    width:30vw;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 30%;
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
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 10vw;
    padding-bottom: 5vh;
}
.nameTd {
    display: inline-block;
    margin-left: 0%;
    width:110%;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 34%;
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
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px)  { /*Surface Duo*/
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    margin-left: 10%;
    width:30vw;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 22vw;
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
@media all and (min-width: 720px) and (max-width: 721px)and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.companyHeader {
    padding: 3%;
}
img {
    float:none;
}
.companyHeader h2 {
    font-size: 1.1rem;
}
.techListTable {
    margin-left: 20%;
}
.nameTd {
    display: inline-block;
    width:18vw;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 9vw;
    bottom: 2vh;
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
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.companyHeader {
    padding: 3%;
}
img{
    height: 120px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.techMinMaxBtn {
    margin-right: 28%;
    line-height: 4px;
    font-size: 1.6rem;
}
.techMinMaxBtn:active {
    box-shadow: 0px 0px 0px;
    margin-right:58px;
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.companyHeader h2 {
    font-size: 1.5rem;
}
.companyHeader p {
    font-size: 1rem;
}
.techListTable {
    width:65%;
}
.nameTd {
    margin-left: 30%;
    width:80%;
}
p {
    font-size: .8rem;
}
h6 {
    font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.companyHeader {
    padding:3%;
}
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.techMinMaxBtn {
    left: 12vw;
    bottom: 1vh;
    line-height: 4px;
    font-size: 1.6rem;
}
.companyHeader h3 {
    font-size: 1.3rem;
}
.companyHeader p {
    font-size: 1.2rem;
}
.techListTable {
    width:65%;
}
.nameTd {
    margin-left: 30%;
    width:80%;
}
p {
    font-size: .8rem;
}
h6 {
    font-size: 1rem;
}
}
@media all and (min-width: 1024px) and (max-width:10257px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.companyHeader {
    padding: 3%;
}
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.techMinMaxBtn {
    margin-left: 10%;
    line-height: 4px;
    font-size: 1.7rem;
}
.companyHeader h2 {
    font-size: 2rem;
}
.companyHeader p {
    font-size: 1.8rem;
}
.techListTable {
    width:65%;
}
.nameTd {
    margin-left: 35%;
    width:80%;
    font-size: 1.5rem;
}
p {
    font-size: 1.6rem;
    padding:2%;
}
h5 {
    font-size: 1.4rem;
}
h6 {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro rotated*/
.companyHeader {
    padding:3%;
}
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.techMinMaxBtn {
    margin-left: 10%;
    line-height: 4px;
    font-size: 1.6rem;
}
.companyHeader h3 {
    font-size: 1.6rem;
}
.companyHeader p {
    font-size: 1.6rem;
}
.techListTable {
    width:65%;
}
.nameTd {
    margin-left: 40%;
    width:70%;
    font-size: 1.6rem;
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