<template>
  <modal :id="id" class="modal" :name="modalname" height="auto">
    <div class="modalDiv">
      <img class="modalContent" :alt="alt" :src="src"  />
    </div>
  </modal>
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
.modalDiv {
  height: 90vh;
  width: auto;
}
.modalContent {
  margin: auto;
  display: block;
  width: auto;
  height: 84%;
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
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>