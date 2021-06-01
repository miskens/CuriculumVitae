<template>
    <div class="companyHeader">
        <h2>{{company.Name}} </h2>
        <img alt="pic" :src="company.Picture" />
        <h3>{{company.Assignment}}</h3>
            <p>When: {{company.When}}</p>
            <p>Boss: {{company.Boss}}</p>
    </div>
    <Button text="More" class="techMinMaxBtn" @click="showHideTech"></button>
    
        <div class="moreInfoDiv">  
            <transition-group  name="techTransition" mode="out-in" >
            <div class="descDiv" v-if="!techHidden">{{company.Desc}}</div>
            </transition-group >
                <transition-group   name="techTransition" mode="out-in" >
                <h4 v-if="!techHidden">List of technologies:</h4>
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
import Button from "../Shared/Button"

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
          transform: scale(1.4);
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
    height: 100%;
    overflow: hidden;
}
.descDiv {
    margin-top: 50px;
    padding-left:2vw;
    width:26vw;
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
    min-width: 240px;
    margin-right: 1vw;
    text-align: center;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(117, 172, 172, 0.8);
    background-color: rgba(240, 240, 240, 0.8);
    text-decoration: none;
}
@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
.companyHeader h2 {
    display: none;
}
.companyHeader h3 {
    padding-top: 1vh;
}
img{
    height: 80px;
    width: auto;
    float:none;
}
.techMinMaxBtn {
    position: relative;
    padding: 2.5vh 10vw;
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
.companyHeader h2 {
    display: none;
}
.companyHeader h3 {
    padding-top: 2vh;
}
img {
    margin-top: 3vh;
    max-width:100%;
    width: auto;
    float:none;
}
.techMinMaxBtn {
    position: relative;
    padding: 2.5vh 10vw;
    padding-right: 20vw;
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
.techMinMaxBtn {
    left: 12vw;
    padding: 2vh 8vw 2vh 4vw;
    /* padding-left:4vw;
    padding-right: 7vw; */
}
}
@media all and (min-width: 768px) { /*iPad*/
img{
    height: 110px;
    width: auto;
    float:none;
}
.techMinMaxBtn {
    left: 12vw;
    padding: 2vh 8vw 2vh 4vw;
    /* padding-left:4vw;
    padding-right: 7vw; */
}
.companyHeader h3 {
    font-size: xx-large;
}
.companyHeader p {
    font-size: x-large;
}
.techListTable {
    width:45%;
}
.nameTd {
    width:100%;
}
}
@media all and (min-width: 1024px) and (max-width: 1123px) { /*iPad Pro*/
.techMinMaxBtn {
    left: 12vw;
}
}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
.techMinMaxBtn {
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