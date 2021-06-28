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
</style>