<template>
  <div class="presentationDiv">

      <h2>presentation</h2>
       <!-- <nav id="presNav" class="presNav">
           <ul class="navOl">
              <li>Presentation</li>
              <li>Intressen</li>
              <li>Framtiden</li>
          </ul>
        </nav> -->

        <div class="textDiv">
        <p>Hej och välkommen!</p><br/>

       
        <p>Jag är en kille från Sundsvall som har bott lite överallt i Sverige under min uppväxt
            och har bott och arbetat inom IT i Stockholm i några år.</p>
        
        <p>År 2009 läste jag om till systemutvecklare, vilket var min barndomsdröm. 
        Jag läste en KY-utbildning med systemutveckling på heltid.</p>

        <p>Under studierna certifierade jag mig till MCPD inom .NET 3.5.</p>

        <p>År 2011 började jag att arbeta inom IT och  med Microsofts integrationsmotorer och med tiden ledde det mig närmare databaser
        tills jag arbetade ett tag som DBA och databasutvecklare.</p>

        <p>Jag känner mig trygg i Microsoft-stacken och vill gärna fortsätta jobba aktivt i .NET och gärna i Azure.</p>
        
        <p>Kanske även som molnarkitekt, allting inom IT är roligt att arbeta med och nu har jag börjat smyga runt mer i frontend
        också, denna CV är skriven helt och hållet i VueJS och är hostas på Azure.
      </p>
      </div>
  </div>
        <div class="picDiv">
        <Picture id="thePic" @img-click="imageClick" alt="noting" src="https://csb1003bffd9e4e9a13.blob.core.windows.net/dge-blobstorage01/misk.jpg" />
        <p>{{firstName}} {{lastName}}, {{age}} år.</p>
        <ImageModal id="modal" @closemodal="closeModal" alt="modalalt" src="https://csb1003bffd9e4e9a13.blob.core.windows.net/dge-blobstorage01/misk.jpg" />
      </div>
</template>

<script>
import Picture from './Picture'
import ImageModal from './ImageModal'

export default {
    name: "Presentation",
    props: {
      firstName: String,
      lastName: String,
      age: String,
      showModal: {
          type:Boolean,
          default: false
      }
    },
    components: {
        Picture,
        ImageModal,
    },
    data() {
        return {
            showModal: this.showModal
        }
    },
    methods: {
    //   changeToSwedish(){
    //     this.toggleLanguage = "Swedish"
    // },
    //   changeToEnglish(){
    //     this.toggleLanguage = "English"
    // },
    imageClick() {
        this.showModal = !this.showModal;
        
        var modal = document.getElementById("modal")
        modal.style.display = "block"
        },
    closeModal() {
        this.showmodal = !this.showModal
           
        var modal = document.getElementById("modal")
        modal.style.display = "none"
      }
    // async fetchSomething(){
    // },
 },
    mounted() {
    //   document.addEventListener('DOMContentLoaded',function () {
    //     var navDiv = document.getElementById('presNav');
    //     var navTop = navDiv.offsetTop;
    //     window.scroll(function () {   
    //     if (this.scrollTop() > navTop){ 
    //          $navDiv.css({'position': 'fixed', 'top': '0px'});
    //          $(navDiv).removeClass('static'); 
    //     }
    //     if (this.scrollTop() < navTop && isPositionFixed){
    //         $navDiv.css({'position': 'static', 'top': '0px'}); 
    //         $(navDiv).removeClass('fixed');
    //     } 
    // });
   //});
}
}
</script>

<style scoped>
.presentationDiv {
    max-width: 50vw;
    float: left;
    padding-left: 5vw;
    margin-right: 5vw;
    caret-color: transparent;
}
.presNav {
    position: static;
    z-index: 1;
}
.navOl {
    margin-top: 6vh;
    display: inline-block;
}
/* li {
    background-color:rgb(180, 255, 236, 0.5);
    margin-right: 1vw;
    padding: 1rem 2rem 1rem 2rem;
    list-style-type: none;
    display: inline;
    border-radius: 2rem;
    font-weight: 500;
    border-style: solid;
    border-width: 1px;
    border-bottom-width: 3px;
    cursor: pointer;
    transition: all .3s;
}
li:hover {
    border-color:gold;
    font-weight: 700;
} */
.picDiv {
    height:auto;
    width: auto;
    padding-top: 15vh;
    float: right;
    margin-right: 10vw;
    overflow:auto;
}
.textDiv {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
    padding: 25px;
}
p {
  /* text-indent: 30px; */
  text-align: justify;
  letter-spacing: 1px;
}
</style>