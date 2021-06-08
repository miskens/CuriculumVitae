<template>
  <div class="mainDiv page">
    <!-- <div class="homeDiv"> -->
      <Presentation firstName="Mikael" lastName="Puusaari" age="40"/>
    <!-- </div> -->
  </div>
</template>

<script>
import Presentation from '../components/Home/Presentation.vue'

export default {
  name: 'Home',
  components: {
    Presentation,
}
}
</script>

<style scoped>
.mainDiv {
  width:94%;
  margin-left: 3%;
  height:auto;
}
</style>
