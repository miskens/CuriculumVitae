<template>
    <div class="mainDiv">
        <div class="studiesDiv">
            <Studies title="Studies"/>
        </div>
        <div class="worklifeDiv">
            <Work title="Work experience"/>
        </div>
  </div>
</template>

<script>
import Studies from '../components/Experience/Studies.vue'
import Work from '../components/Experience/Work.vue'

export default {
    name: 'Experiences',
    props: {},
    components: {
        Studies,
        Work
    }
}
</script>

<style scoped>
.studiesDiv {
    position: absolute;
    float:left;
    width: 49%;
    height: 85%;
    /* background-color: beige;   */
    border-width: 5px;
    border-image: linear-gradient(to bottom, red, purple);
    border-style: double;
    border-top: 0;
    border-bottom: 0;
    top:3vh;
    right:0;
}
.worklifeDiv {
    position: absolute;
    float:left;
    overflow: auto;
    width: 49%;
    height: 85%;
    top:3vh;
    /* background-color: rgb(231, 255, 245); */

}
</style>