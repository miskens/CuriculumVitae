<template>  
        <div id="scrollDiv" class="scrollDiv">
                <img class="scrollImg" @click="scrollTo('header')" src="../components/Interests/Hobbies/assets/up_arrow.png" />
                <img class="scrollImg" @click="scrollTo('discgolfScrollpoint')" src="../components/Interests/Hobbies/assets/basket.png" />
                <img class="scrollImg" @click="scrollTo('gamingScrollpoint')" src="../components/Interests/Hobbies/assets/dice.png" />
                <img class="scrollImg" @click="scrollTo('movserScrollpoint')" src="../components/Interests/Hobbies/assets/movie.png" />
                <img class="scrollImg" @click="scrollTo('learningScrollpoint')" src="../components/Interests/Hobbies/assets/knowl.png" />
        </div>
    <div class="mainDiv" id="maindiv" >
        <div class="interestsDiv">
            <Hobbies />
        </div>
  </div>
</template>

<script>
 import Hobbies from '../components/Interests/Hobbies.vue'
 import Button from '../components/Shared/sharedAssets/Button.vue'

export default {
    name: 'Interests',
    components: {
        Hobbies,
        Button,
    },
    methods: {
        scrollTo(id) {
            const div = document.getElementById(id).scrollIntoView( { behavior: "smooth",  });
        },
        handleScroll(event) {
        var scrollDiv = document.getElementById('scrollDiv');
        var scrollDivHolder = document.getElementById('scrollDivHolder');

                if(window.scrollY > this.st)
                {
                    scrollDiv.style.top = '2%';
                    scrollDiv.style.marginleft = '5%';
                    scrollDiv.style.zIndex = 1;
                    scrollDiv.style.position = 'sticky';
                    scrollDivHolder.style.display = 'inline';
                    
                }
                else if (window.scrollY < this.st)
                    scrollDiv.style.position = 'relative';
                }
    },
    created () {  
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        var scrollDiv = document.getElementById('scrollDiv');
        var scrolltop = scrollDiv.offsetTop;
        this.st = scrolltop;
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
        return {
            st: this.scrolltop
    }
    },
}
</script>

<style scoped>
@media all and (min-width: 1px) and (min-height:1px) {
.interestsDiv {
    width: 80%;
    margin-left: 2%;
    float:left;
}
.rlink {
    text-align: center;
    line-height:50px;
    background-color:rgb(180, 255, 236, 0);
    border-radius: 2rem;
    font-weight: 500;
    border-style: none;
    cursor: pointer;
    transition: all .3s;
}
.rlink:hover {
    border-color: black;
    border-radius: 0;
}
#layout a {
    color:rgb(154, 66, 255);
}
#layout a:hover {
    color:rgb(54, 0, 116);
}
.scrollDiv {
    position: relative;
    float:left;
    height:auto;
    width:100%;
    margin-top: 0%;
}
.scrollImg {
    width: 40px !important;
    height: 40px !important;
    margin:auto;
    margin-top: 4%;
    margin-bottom: 1%;
    margin-right: 5%;
    padding:0;
    background-color:transparent;
    caret-color: transparent;
    user-select: none;
    outline: none;
    box-shadow: none;
}
.scrollImg:focus {
    background-color: transparent;
    outline: none;
    box-shadow: none;
    user-select: none;
    caret-color: transparent;
}
.scrollImg:hover {
    border: solid;
    border-color: rgb(255, 232, 99);
    border-width: 1px;
    background-color: rgb(255, 254, 223);
}
}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px) { /*Galaxy fold */
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:570px) and (max-height:571px) { /*iPhone 5/SE*/
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px) { /*  iPhone 6/7/8 Plus*/
.interestsDiv {
    width: 80%;
    margin-left: 8%;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.interestsDiv {
    width: 86%;
    margin-left: 3%;
}
} 
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.interestsDiv {
    width: 80%;
    margin-left: 8%;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.interestsDiv {
    width: 78%;
    margin-left: 8%;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.interestsDiv {
    width: 76%;
    margin-left: 8%;
}
}
</style>