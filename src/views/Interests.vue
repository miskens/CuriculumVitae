<template>
    <div class="mainDiv" id="maindiv" >
        <!-- <div class="worklifeDiv">
            <Workplaces title="Work experience" :companies="companies"/>
        </div> -->
        <div class="interestsDiv">
            <!-- <Studies title="Studies" :schools="studies" /> -->
            <Hobbies />
        </div>
  </div>
</template>

<script>
 import Hobbies from '../components/Interests/Hobbies.vue'

export default {
  name: 'Interests',
  components: {
    Hobbies,
}
}
</script>

<style scoped>
.mainDiv {
  resize: both;
  overflow: hidden;
  position:relative;
  height:auto;
  overflow-y: hidden;
}
</style>