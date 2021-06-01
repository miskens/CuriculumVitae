<template>
<div class="titleDiv">
   <p class="title">{{title}}</p> 
   <h1 class="h2Title">{{title}}</h1>
  </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        title: {
            type: String,
            default: "titleDefault"
        }
    }
}
</script>

<style scoped>
.titleDiv {
    margin-top:20px;
    padding: 8vh 3vw 5vh 3vw;
    border-top: 3px solid #1C6EA4;
    border-bottom: 8px double #1C6EA4;
    border-radius: 130px 0px 130px 0px;
    background-image: url('./swirlbckgrndtop.png');
    caret-color: transparent;
    margin-bottom:4vh;
    }
.title {
font-weight: 600;
}
@media all and (min-width: 280px) { /*Galaxy fold: maxwidth due to interference towards higher*/
.titleDiv {
    padding: 8vh 3vw 2vh 3vw;
}
.title {
    display: inline-block;
    width:60%;
    font-size:large;
    }
.h2Title {
    display: none;
    }
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
}
@media all and (min-width: 540px) { /*Surface Duo*/
.title {
    display: none;
    }
.h2Title {
    display: inline-block;
    }
}
@media all and (min-width: 768px) { /*iPad*/
.titleDiv {
    padding: 8vh 3vw 5vh 3vw;
}
}
</style>