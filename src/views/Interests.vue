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
    width: 90%;
    margin-left: 3%;
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
    margin-top: 1%;
    margin-bottom: 1%;
    margin-right: 5%;
    padding:0;
    border:solid;
    border-width: 1px;
    border-color: transparent;
    background-color:transparent;
    caret-color: transparent;
    user-select: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
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
    -webkit-transition: all .6s ease;
    -moz-transition: all .6s ease;
    -o-transition: all .6s ease;
    -ms-transition: all .6s ease;
    transition: all .6s ease;
}
}
@media all and (min-width: 800px) and (min-height:1px) {
.scrollImg {
    width: 50px !important;
    height: 50px !important;
}
}
</style>