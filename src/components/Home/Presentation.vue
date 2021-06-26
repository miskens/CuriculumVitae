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
@media all and (min-width: 280px) and (max-width:281px) and (min-height:653px)  and (max-height:654px){ /*Galaxy fold */
.presentationDiv {
  width:90%;
  margin-bottom: 5vh;
}
.presentationDiv h2 {
  font-size: 1rem;
}
.textDiv {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
    padding: 2% 2%;
    margin-bottom: 8%;
}
p {
  text-align: justify;
  letter-spacing: 0;
  font-size: .8rem;
}
.picDiv {
    width: auto;
    padding:4vh 0vw 0vh 0vw;
    margin: 0;
    margin-left: 20%;
}
}
@media all and (min-width: 320px)and (min-height:570px) and (max-height:571px) { /*iPhone 5/SE*/
.presentationDiv {
  max-width: 98%;
  padding: 5vw;
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
     margin-left: 25%;
}
}
@media all and (min-width: 568px) and (min-height:320px) and (max-height:321px)  { /*iPhone 5/SE rotated*/
.picDiv {
    height:40vh;
    width: auto;
    padding:0;
    padding-top: 10vh;
    padding-bottom: 38vh;
    margin: 0;
     margin-left: 30vw;
}
}
@media all and (min-width: 360px)and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.presentationDiv h2 {
  font-size: 1.2rem;
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
@media all and (min-width: 375px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8 */
.presentationDiv h2 {
  font-size: 1.2rem;
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
    margin-left: 25%;
}
}
@media all and (min-width: 414px) and (min-height:735) and (max-height:737px) { /*iPhone 6/7/8 Plus */
.presentationDiv h2 {
  font-size: 1.2rem;
}
p {
  text-align: justify;
  letter-spacing: 0;
}
.picDiv {
    height:40vh;
    width: 100%;
    padding:0;
    padding-top: 6vh;
    margin: 0;
    float:left;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
.presentationDiv h2 {
  font-size: 1.2rem;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.textDiv {
  padding: 1% 1%
}
.textDiv p {
  font-size: .9rem;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
p {
  text-align: justify;
  letter-spacing: 0;
}
.picDiv {
    height:32vh;
    width: 100%;
    padding:0;
    padding-top: 6vh;
    margin: 0;
    margin-left: 25%;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
p {
  text-align: justify;
  letter-spacing: 0;
}
.picDiv {
    height:30vh;
    width: 100%;
    padding:0;
    padding-top: 4vh;
    margin: 0;
    margin-left: 25%;
}
}
@media all and (min-width: 540px) and (min-height:720px)  and (max-height:721px)  { /*Surface Duo*/
.presentationDiv {
 padding-right: 4vw;
}
.presentationDiv h2{
  font-size: 1.4rem;
}
.picDiv {
  padding-left: 0vw;
}
}
@media all and (min-width: 720px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.picDiv {
  padding-left: 8vw;
}
p {
  font-size: 1rem;
}
}
@media all and (min-width: 768px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.presentationDiv {
  width:90%;
  margin:0;
  padding:5vw;
}
.presentationDiv h2{
  font-size: 1.8rem;
}
.textDiv p {
  font-size: 1.1rem;
}
.picDiv {
  width:100%;
  margin:0;
  padding:0;
  padding-top: 5vh;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.presentationDiv {
  width:90%;
  margin:0;
  padding:5vw;
}
.presentationDiv h2{
  font-size: 1.8rem;
}
.textDiv p {
  font-size: 1rem;
}
.picDiv {
  width:100%;
  margin:0;
  padding:0;
  padding-top: 5vh;
}
}
@media all and (min-width: 1024px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
h2 {
  font-size: 2.5rem;
}
.textDiv p {
  font-size: 1.8rem;
}
}
</style>