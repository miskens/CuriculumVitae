<template>
  <modal :id="id" class="modal" name="modal" height="auto">
    <span id="closer" class="closeBtn" @click="$emit('closemodal')">X</span>
    <img class="modalContent" :alt="alt" :src="src"  />
  </modal>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
      id: String,
      alt: String,
      src: String,
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
  padding-top: 100px;
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
  width: auto;
  height: 100vh;
  max-height: 80vh;
  caret-color: transparent;
}
#closer {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
  caret-color: transparent;
}

.modal, .modalContent, #closer {  
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
.closeBtn {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}
.closeBtn:hover,
.closeBtn:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>