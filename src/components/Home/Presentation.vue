<template>
<div class="picDiv">
        <Picture id="thePic" v-on:click="imageClick" alt="noting" :src="src" />
        
      </div>
      <ImageModal id="modal" modalname="presModal" alt="modalalt" :src="src" />
  <div class="presentationDiv">

      <h2>presentation</h2>
        <div class="textDiv">
        <p>Hello and welcome!</p><br/>

       
        <p>I´m a man living in Sundsvall, Sweden, but throughout both my childhood and adult life I´ve lived in many places all
          along the country, both due to studies and work.</p>
        
        <p>In the year 2009 I left construction to follow my childhood dream of programming and working with computers. 
        I found studies that suited me perfectly so I took a leap for it.</p>

        <p>Under the studies I certified for MCPD in .NET 3.5.</p>

        <p>In 2011 I started working in IT as a system developer and very soon was introduced to  Microsofts integration engines and it brought me closer
        to databases and before I knew it I was working as a DBA and database developer.</p>

        <p>I feel comfortable in the Microsoft stack but have gained some front end skills too through coding as a hobby.
        </p>
        <p>I would love an opportunity to work with Azure. 
          I might even look for a future in cloud architecture later on, I love everything in IT.
      </p>
      <p>NB: This CV is a VueJS app and is hosted as an Azure web app. The code for it can be found on my <a href="https://github.com/miskens/CuriculumVitae" target="blank">github</a> and <a href="https://dev.azure.com/miskens/_git/CuriculumVitae" target="blank">Azure Devops</a>.</p>
     </div>
      <div class="lilbox"></div>
  </div>
</template>

<script>
import Picture from './Picture'
import ImageModal from '../Shared/sharedAssets/ImageModal.vue'

export default {
    name: "Presentation",
    props: {
      firstName: String,
      lastName: String,
      src: {
        type: String,
        default: "https://mppersonalsg.blob.core.windows.net/cvfiles/welcome.jpg",
      }
    },
    components: {
        Picture,
        ImageModal,
    },
    data() {
        return {
        }
    },
    methods: {
    //   toggleLanguage(){
    //     this.language = !this.language
    // },
    imageClick() {
        var modal = document.getElementById("modal")
        modal.style.display = "block"
    },
    mouseDown(event){
        if(!event.target.closest('div #modal')) {
                  document.getElementById('modal').style.display = "none";
        }
      }
    },
    created() {
    },
    mounted() {
      window.addEventListener('mousedown', this.mouseDown);
    },
    unmounted() {
      window.removeEventListener('mousedown', this.mouseDown);
    }
}
</script>

<style scoped>
@media all and (min-width: 50px) and (min-height:50px) {
.presentationDiv {
    float: left;
    padding-left: 5vw;
    margin-bottom: 10vh;
    margin-right: 5vw;
    caret-color: transparent;
}
.picDiv {
    height:auto;
    width: 100%;
    padding-top: 8vh;
    float: left;
}
.textDiv {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
    padding: 2% 2%;
    max-width: 90%;
}
p {
  font-weight: 500;
  text-align: justify;
  letter-spacing: 1px;
}
.lilbox {
  position: absolute;
  right:0px;
  bottom: 0px;
  width: 50px;
  height: 50px;
  background-color: rgb(255, 88, 88, 0);
}
a {
  color:rgb(50, 161, 108) !important;
}
}
</style>