<template>
    <div class="companyHeader">
        <h2>{{company.Name}} </h2>
        <img alt="pic" :src="company.Picture" />
        <h6>{{company.Assignment}}</h6>
            <p>When: {{company.When}}</p>
            <p>Boss: {{company.Boss}}</p>
    </div>
    <Button text="More" class="techMinMaxBtn" @click="showHideTech"></button>
    
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
.companyDiv p {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.companyHeader {
    height:auto;
    width:100%;
    padding-bottom: 0vh;
}
.companyDiv h2 {
    padding-bottom: 2vh;
}
.companyDiv h3 {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.techMinMaxBtn {
    position: relative;
    background-image:linear-gradient(to right, rgb(245, 245, 245), rgb(224, 224, 224), rgb(245, 245, 245));
    left: 12vw;
    right:0vw;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px 2px;
    font-size: 2rem;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;
    transition: ease-in-out, .6s;
}
.techMinMaxBtn:active {
    box-shadow: 0px 0px 0px;
    margin-right:-5px;
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
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
        50% {
          transform: scale(1.2);
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
    width:40%;
    height: auto;
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
    display: inline-block;
    margin-right: 1vw;
    text-align: center;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(117, 172, 172, 0.8);
    background-color: rgba(240, 240, 240, 0.8);
    text-decoration: none;
}
@media all and (min-width: 50px) and (min-height:50px) {
.techMinMaxBtn {
    position: relative;
    left: 20vw;
    padding: .6rem;
    font-size: 1.1rem;
    line-height: 2px;
}
}
@media all and (min-width: 801px) and (min-height: 200px) {
.techMinMaxBtn {
    position: relative;
    left: 6vw;
    padding: .6rem;
    font-size: 1.1rem;
    line-height: 2px;
}
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
    left: 22vw;
    bottom: 1vh;
    padding: .8rem;
    padding-right: 13vw;
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
    margin-right: 0;
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
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.companyHeader {
    padding-left: 1vw;
}
.companyHeader h2 {
    font-size: 1rem;
}
img{
    height: 50px;
    float:none;
    margin-top: 3vh;
    margin-left: 0vw;
}
.techMinMaxBtn {
    position: relative;
    left: 20vw;
    bottom: 5vh;
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
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 20vw;
    width:39vw;
    height: auto;
    margin-right: 0;
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
    padding: 5%;
}
.companyHeader h2 {
    font-size: 1rem;
}
.companyHeader h3 {
    padding-top: 2vh;
}
img {
    /* margin-top: 3vh; */
    max-width:100%;
    float:none;
}
.techMinMaxBtn {
    position: relative;
    left: 28vw;
    bottom: 2vh;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
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
    width:39vw;
    margin-left: 35%;
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
    /* margin-top: 3vh; */
    max-width:100%;
    float:none;
}
.techMinMaxBtn {
    position: relative;
    left: 32vw;
    bottom:4vh;
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
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-left: 45%;
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
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    width:38vw;
    margin-right: 0;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 22vw;
    bottom: 2vh;
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
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 22vw;
    bottom: 4vh;
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
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:38vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 26vw;
    bottom:2vh;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
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
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 24vw;
    bottom:3vh;
    padding: .9rem 1.1rem;
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
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 23vw;
    bottom:4vw;
    padding: .9rem 1.1rem;
    padding-right:3rem;
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
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 28vw;
    bottom: 3vh;
    padding: .9rem 1.1rem;
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
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 24vw;
    bottom: 2vh;
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
    width:80%;
    margin-left: 45%;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
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
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 24vw;
    bottom: 2vh;
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
    width:22vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 12vw;
    bottom: 4vh;
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
    min-width: 0;
    width:39vw;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 26vw;
    bottom: 2vh;
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
    min-width: 0;
    width:39vw;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 26vw;
    bottom: 2vh;
    padding: 1rem 1.2rem;
    padding-right: 10vw;
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
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:18vw;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.techMinMaxBtn {
    position: relative;
    left: 9vw;
    bottom: 2vh;
    padding: 1rem 1.2rem;
    padding-right: 10vw;
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
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.techMinMaxBtn {
    left: 10vw;
    bottom: 1vh;
    line-height: 4px;
    padding: 1.4rem 1rem 1.4rem 2rem;
    padding-right: 5rem;
    font-size: 1.6rem;
}
.companyHeader h3 {
    font-size: xx-large;
}
.companyHeader p {
    font-size: x-large;
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
    padding: 1.4rem 1rem 1.4rem 2rem;
    padding-right: 5rem;
    font-size: 1.6rem;
}
.companyHeader h3 {
    font-size: xx-large;
}
.companyHeader p {
    font-size: x-large;
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
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.techMinMaxBtn {
    left: 10vw;
    bottom: 1vh;
    line-height: 4px;
    padding: 1.4rem 1rem 1.4rem 2rem;
    padding-right: 5rem;
    font-size: 1.6rem;
}
.companyHeader h3 {
    font-size: xx-large;
}
.companyHeader p {
    font-size: x-large;
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
@media all and (min-width: 1366px) and (max-width:1367px) and (min-height:1024px) and (max-height:1025px) { /* iPad rotated*/
img {
    max-width:40%;
}
.techMinMaxBtn {
    position: relative;
    left: 11vw;
    padding: 1.2rem 2.5rem;
    padding-right: 4.5rem;
    font-size: 1.2rem;
    line-height: 2px;
}
h6 {
    font-size: 1.3rem;
}
p {
  font-size: 1.2rem;
}
}
</style>