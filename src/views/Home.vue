<template>
  <div class="mainDiv">
    <Presentation firstName="Mikael" lastName="Puusaari" age="40"/>
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
  resize: both;
  overflow: hidden;
  position:relative;
  height:auto;
  overflow-y: hidden;
}
</style>
