<template>
<div class="picDiv">
        <Picture id="thePic" @img-click="imageClick" alt="noting" src="https://mppersonalsg.blob.core.windows.net/cvfiles/welcome.jpg" />
        <!-- <p>{{firstName}} {{lastName}}</p> -->
        <ImageModal id="modal" @closemodal="closeModal" alt="modalalt" src="https://mppersonalsg.blob.core.windows.net/cvfiles/welcome.jpg" />
      </div>
  <div class="presentationDiv">

      <h2>presentation</h2>
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
      <div class="lilbox"></div>
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
    //   changeToSwedish(){
    //     this.toggleLanguage = "Swedish"
    // },
    //   changeToEnglish(){
    //     this.toggleLanguage = "English"
    // },
    imageClick() {
        var modal = document.getElementById("modal")
        modal.style.display = "block"
        },
    closeModal() {
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
    max-width: 50%;
    float: left;
    padding-left: 5vw;
    margin-right: 5vw;
    caret-color: transparent;
    /* background-color: rgba(255,255,255, .7); */
}
.picDiv {
    height:auto;
    width: auto;
    padding-top: 15vh;
    float: left;
    left: 5vw;
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
.lilbox {
  position: absolute;
  right:0px;
  bottom: 0px;
  width: 50px;
  height: 50px;
  background-color: rgb(255, 88, 88, 0);
}

@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
.presentationDiv {
  max-width: 98%;
  padding: 2vw;
  margin: 0;
  padding-top: 5vh;
}
.textDiv {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
    padding: 0;
}
p {
  text-align: justify;
  letter-spacing: 0;
}
.picDiv {
    width: auto;
    /* left:22%; */
    padding:0;
    padding-top: 5vh;
    margin: 0;
    margin-left: 18vw;
}
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
.presentationDiv {
  max-width: 98%;
  padding: 5vw;
  margin: 0;
  padding-top: 5vh;
}
.presentationDiv h2 {
  padding:0;
  margin:0;
}
.textDiv {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 500;
    padding: 0;
    padding-left: 3vw;
    padding-right: 5vw;
    padding-top:3vh;
}
p {
  text-align: justify;
  letter-spacing: 0;
}
.picDiv {
    height:40vh;
    width: auto;
    padding:0;
    padding-top: 6vh;
    margin: 0;
     margin-left: 25vw;
}
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
.picDiv {
     margin-left: 25vw;
}
}
@media all and (min-width: 540px) { /*Surface Duo*/
.presentationDiv {
  padding-left: 8vw;
  padding-right: 12vw;
}
.picDiv {
  position:relative;
  float:left;
    width: 50%;
}
}
@media all and (min-width: 768px) { /*iPad*/
.presentationDiv {
  width:90%;
  margin:0;
  padding:5vw;
}
.presentationDiv h2{
  font-size: xx-large;
}
.textDiv p {
  font-size: x-large;
}
.picDiv {
  width:100%;
  margin:0;
  padding:0;
  padding-top: 5vh;
  left:0;
}
}
@media all and (min-width: 1024px) { /*iPad Pro*/
}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
}
@media all and (min-width: 1256px) { /*Smaller laptop screens*/
}
@media all and (min-width: 1496px) { /*smaller-medium laptop screens*/
}
@media all and (min-width: 1660px) { /*medium laptop screens*/
}
@media all and (min-width: 18240px) { /*medium-larger laptop screens*/
}
@media all and (min-width: 1996px) { /*larger laptop screens*/
}
</style>