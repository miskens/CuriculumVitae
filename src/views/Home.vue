<template>
  <div class="mainDiv">
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
/* @media all and (min-width: 50px) and (min-height:50px) {
.mainDiv {
  width:88%;
  padding: 3vw;
  overflow: hidden;
  border-top: 8px double #1C6EA4;
  border-bottom: 3px solid #1C6EA4;
  border-radius: 0px 130px 0px 130px;
  background-image: url("../assets/swirlbckgrndbottom.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  caret-color: transparent;
}
} 
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px)and (max-height:376px) { /*iPhone 6/7/8 rotated 

}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height: 736px) and (max-height:737px) { /*iPhone 6/7/8 plus 

}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated 

}*/
</style>
