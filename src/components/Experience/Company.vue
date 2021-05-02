<template>
    <div class="companyHeader">
        <h2>{{company.Name}} <img alt="pic" :src="company.Picture" /></h2>
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
                        <table class="techListTable" :key="t.id" v-for="t in company.Tech" >
                        <tr>
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
.companyDiv p {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.techMinMaxBtn {
    position: relative;
    width: 120px;
    background-image:linear-gradient(to right, rgb(245, 245, 245), rgb(224, 224, 224), rgb(245, 245, 245));
    padding: 10px 20px;
    left: 12vw;
    right:0vw;
    border-radius: 5px;
    box-shadow: 3px 3px 4px;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;
    transition: ease-in-out, 0.1s;
}
.techMinMaxBtn:active {
    box-shadow: 1px 1px 1px;
    margin-right:-6px;
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
    width:auto;
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
table {
    display: inline-block;
    list-style-type: none;
    padding: 0;
    overflow: hidden;
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
    max-width: 250px;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(117, 172, 172, 0.8);
    background-color: rgba(240, 240, 240, 0.8);
    text-decoration: none;
}
</style>