<template>
<div class="titleDiv">
        <h1 class="title">{{title}}</h1> 
        <h2 class="name">Mikael Puusaari</h2>
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
@font-face {
    font-family: 'cassandra';
    src: url('./sharedAssets/fonts/cassandra-webfont.woff2') format('woff2'),
         url('./sharedAssets/fonts/cassandra-webfont.woff') format('woff'),
         url('./sharedAssets/fonts/cassandra.ttf');
    font-weight: normal;
    font-style: normal;
    font-size: 2rem;
    }
@media all and (min-width: 50px)  and (min-height:50px) {
.titleDiv {
    width:86%;
    margin-left: 1%;
    padding: 5% 3vw;
    border-top: 3px solid #1C6EA4;
    border-bottom: 8px double #1C6EA4;
    border-radius: 130px 0px 130px 0px;
    background-image: url('./sharedAssets/swirlbckgrndtop.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    caret-color: transparent;
    margin-top: 1vh;
    margin-bottom:0vh;
}

.title {
    font-weight: 500;
    display:inline-block;
    padding:0;
    width:60%;
    font-family: "cassandra";
    font-size: 1.2rem;
    border-bottom: double;
    border-width: .5rem;
    animation: skewTitle 3s infinite;
    transform: skewTitle(5deg);
    animation-direction: alternate;
}
.name {
    display: inline-block;
    width:60%;
    font-family: "cassandra";
    font-size: 1rem;
    color: rgb(114, 112, 212);
    animation: skewName 3s infinite;
    transform: skewName(5deg);
    animation-direction: alternate;
}
@keyframes skewTitle {
  0% {
    transform: skewX(-5deg);
  }
  3% {
      transform: skewX(-5deg);
  }
  97% {
    transform: skewX(5deg);
  }
  100% {
    transform: skewX(5deg);
  }
}
@keyframes skewName {
  0% {
    transform: skewX(5deg);
  }
  3% {
      transform: skewX(5deg);
  }
  97% {
    transform: skewX(-5deg);
  }
  100% {
    transform: skewX(-5deg);
  }
}
img {
    width: 50px;
}
}
@media all and (min-width: 400px) and (min-height:1px) {
    .titleDiv {
    padding-top: 2%;
    padding-bottom: 1%;
}
.title {
    font-size: 1.3rem;
}
.name {
    font-size: 1.1rem;
}
}
@media all and (min-width: 500px) and (min-height:1px) {
    .titleDiv {
    padding-top: 1%;
    padding-bottom: 0%;
}
.title {
    font-size: 1.5rem;
}
.name {
    font-size: 1.2rem;
}
}
</style>