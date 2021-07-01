<template>
  <div :id="id" class="modal" :name="modalname" height="auto">
      <img class="modalContent" :alt="alt" :src="src"  />
  </div>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
      id: String,
      alt: String,
      src: String,
      modalname: String,
  },
  data() {
      return {
      }
  },
  created() {
  }
}
</script>

<style>  
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  height: auto;
  max-height: 80%;
  width:95%;
  max-width: 95%;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  right: 0vw;
  top: 0;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.6);
  caret-color: transparent;
}
.modalContent {
  margin: auto;
  display: block;
  width: 80%;
  max-height: 84%;
  caret-color: transparent;
  border: double;
  overflow: hidden;
  border-color: gold;
  border-width: .6rem;
}
.modal, .modalContent {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.4s;

  animation-name: zoom;
  animation-duration: 0.4s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}
@media screen and (min-width: 600px) and (min-height:1px) {
  .modalContent {
    width: 65%;
  }
}
@media screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
@media screen and (min-width: 800px) and (min-height:1px) {
  .modalContent {
    width: auto;
  }
}
@media screen and (min-width: 1000px) and (min-height:1px) {
  .modal {
    height: 70%;
  }
  .modalContent {
    height: 100%;
    width: auto;
  }
}
@media (orientation: landscape) and (max-width: 900px) {
  .modal {
    max-height: 100%;
    height:100vh;
    padding: 1% 3%;
    max-width: 40vw;
  }
  .modalContent {
    margin-top: 3%;
    height: 98vh;
    width: auto;
  }
}
@media (orientation: landscape) and (min-width: 901px) {
  .modal {
    max-height: 100%;
    height:100vh;
    padding: 1% 3%;
    max-width: 50vw;
  }
  .modalContent {
    margin-top: 3%;
    height: 98vh;
    width: auto;
  }
}
</style>