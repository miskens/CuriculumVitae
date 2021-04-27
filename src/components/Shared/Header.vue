<template>
<div class="titleDiv">
  <h1 class="title">{{title}}</h1>
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
    padding: 10px 0px 10px 0px;
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
</style>