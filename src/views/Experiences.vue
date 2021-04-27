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
    float:left;
    /* width: 46vw; */
    width: 49%;
    background-color: beige;  
    border-width: 5px;
    border-style: double;
    border-top: 0;
    border-bottom: 0;
}
.worklifeDiv {
    float:left;
    overflow: auto;
    width: 49%;
    /* width: 46vw; */
    background-color: rgb(0, 177, 103);

}
</style>