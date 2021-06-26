<template>
<div class="schoolHeader">
    <div class="titlePicDiv">
      <h2>{{school.Name}} </h2>
      <img alt="pic" :src="school.Picture" />
      <Button text="More" class="descMinMaxBtn" @click="showHideDesc"></Button>
    </div>
    <div class="courseInfoDiv">
      <h6>{{school.Course}}</h6>
      <p>{{school.When}}</p>
    </div>
</div>
    <div class="moreInfoDiv"> 
      <transition-group :key="school.id"  name="descTransition" mode="out-in" >
        <p v-if="!descHidden">{{school.Desc}}</p>
        <div class="gradesHolderDiv" v-if="!descHidden">
            <div class="gradesPicDiv" v-if="school.GradesPic">
                <p>Grades</p>
                <img class="gradesPic" alt="gradesPic" :src="school.GradesPic"  v-on:click='imageClick("gradesModal")' />
                <Button class="downloadBtn" text="Download" @click="downloadFile('https://mppersonalsg.blob.core.windows.net/cvfiles/Utb_Nord01.jpg', 'Utb_Nord01.jpg')" ></Button>
            </div>
            <div class="certPicDiv" v-if="school.CertificatePic">
                <p>Certificate</p>
                <img  class="certificatePic"  alt="certificatePic" :src="school.CertificatePic" v-on:click="imageClick('certModal')" />
                <Button class="downloadBtn" text="Download" @click="downloadFile('https://mppersonalsg.blob.core.windows.net/cvfiles/c7.jpg', 'c7.jpg')" ></Button>
            </div>
            <div class="certPdfDov" v-if="school.CertificatePdf">
                <p>Certificate Pdf</p>
                <a class="certificatePdf" type="application/pdf" alt="certificatePdf" :href="school.CertificatePdf" target="blank"><img class="pdfClickableImg" src="./assets/campus_pdf.png" /></a>
                <Button class="downloadBtn" text="Download as pdf" @click="downloadFile('https://mppersonalsg.blob.core.windows.net/cvfiles/Utbildningsbevis_Microsoft_Azure_Mikael_Puusaari.pdf', 'Utbildningsbevis_Microsoft_Azure_Mikael_Puusaari.pdf')" ></Button>
            </div>
        </div>
      </transition-group>
    </div>
    <ImageModal id="gradesModal" alt="gradesmodalalt" modalname="gradesModal" :src="school.GradesPic" />
    <ImageModal id="certModal" alt="certmodalalt" modalname="certModal" :src="school.CertificatePic" />
</template>

<script>
import Button from "../Shared/sharedAssets/Button"
import ImageModal from "../Shared/sharedAssets/ImageModal"
import axios from 'axios';

export default {
    inheritAttrs: false,
    name: 'School',
    props: {
        school: Object,
        src: String
    },
    components: {
        Button,
        ImageModal,
        axios,
    },
    data() {
        return {
            descHidden: true
        }
    },
    methods: {
        async showHideDesc() {
            this.descHidden = !this.descHidden
        },
        imageClick(picRef) {
        var modal = document.getElementById(picRef)
        modal.style.display = "block"
        },
        async downloadFile(url, fileName) {
            axios({
                    url: url,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', fileName);
                     document.body.appendChild(fileLink);

                     fileLink.click();
                });
        },
        mouseDown(event){
            if(!event.target.closest('div #gradesModal')) {
                  document.getElementById('gradesModal').style.display = "none";
            }
            if(!event.target.closest('div #certModal')) {
                  document.getElementById('certModal').style.display = "none";
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
@media all and (min-width: 1px) and (min-height:1px) {
.schoolHeader {
        width:100%;
    height:auto;
    padding: 3%;
}
.titlePicDiv {
    width: 100%;
    float:left;
    clear:left;
}
.courseInfoDiv {
    margin-top: 250px;
}
p {
    font-size: .9rem;
    display:block;
    align-items: center;
    justify-content: space-between;
}
h2 {
    font-size: 1.1rem;
    padding-bottom: 2vh;
}
h6 {
    font-size: .9rem;
    display:block;
    align-items: center;
    justify-content: space-between;
}
.descMinMaxBtn {
    width: 100px !important;
    height: 30px !important;
    background-image: linear-gradient(lightgreen, green,lightgreen);
    color: rgb(245, 245, 245);
    margin:auto;
    margin-top: 10%;
    border-color: transparent;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgb(221, 221, 221);
    font-size: 1.1rem;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;
    transition: ease-in-out, 0.02s;
}
.descMinMaxBtn:hover {
    background-image: linear-gradient(lightgreen, green,lightgreen);
}
.descMinMaxBtn:active {
    transform: scale(0.98);
    margin-right:-3px;
    background-image: linear-gradient(rgb(138, 228, 138), rgb(0, 122, 0),rgb(138, 228, 138));
}
.descTransition-enter-active, .descTransition-leave-active {
    transition: opacity 1s ease-in-out;
}
.descTransition-enter-from, .descTransition-leave-to {
    opacity: 0;
    transition-duration: .3s;
}
.descTransition-leave-from, .descTransition-enter-to {
    opacity: 1;
    transition-duration: 1s;
}
.moreInfoDiv {
    width:100%;
    height: 100%;
    overflow: hidden;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
img{
    display: block;
    height: 80px;
    max-width:100%;
    margin: auto;
    border-style: solid;
    border-radius: 10%;
    border-width: 1px;
    border-color:mediumturquoise;
    cursor:pointer;
}
.gradesHolderDiv {
    width: 80%;
    max-width:240px;
    margin-top: 8%;
    margin:auto;
}
.gradesPic {
    width: 80%;
    max-width: 120px;
    height: 80px;
    margin:auto;
    margin-bottom: 5%;
}
.certificatePic {
    width: 80%;
    max-width: 120px;
    height: 80px;
    margin:auto;
}
.pdfClickableImg {
    max-width: 160px;
    height: 80px;
    border-radius: 0;
    margin:auto;
}
#layout a {
    color: black !important;
}
.gradesHolderDiv p {
    display: inline-block;
    font-size: 1.1rem;
    width:60%;
}
.downloadBtn {
    height: 6% !important;
    width: 115px !important;
    min-width: 115px !important;
    margin-top: 0rem;
    margin-bottom: .5rem;
    border-radius: .5rem;
    box-shadow: 2px 2px 2px;
    color: rgb(240, 240, 240);
    padding: .6rem 0rem;
    border: solid;
    border-width: 2px;
    background-image: linear-gradient(lightgreen, green,lightgreen);
}
.downloadBtn:hover {
    cursor: pointer;
}
@media all and (min-width: 350px) and (min-height:1px) {
}
@media all and (min-width: 400px) and (min-height:1px) {
.schoolHeader {
    display:inline;
}
.schoolHeader h2 {
    padding: 0;
    margin: 0;
    margin-bottom: 10%;
}
.titlePicDiv {
    width: 50%;
}
.courseInfoDiv {
    width:40%;
    float:right;
    margin-top: 0%;
    margin-right: 3%;
}
.courseInfoDiv h6 {
    padding: 0;
}
}
@media all and (min-width: 600px) and (min-height:1px) {
}
@media all and (min-width: 700px) and (min-height:1px) {
}
@media all and (min-width: 800px) and (min-height:1px) {
}
@media all and (min-width: 1000px) and (min-height:1px) {
}
@media all and (min-width: 1200px) and (min-height:1px) {
}
@media all and (min-width: 280px) and (max-width:281px) and (min-height:653px) and (max-height:654px){ /*Galaxy fold */
.schoolHeader h2 {
    display: none;
}
.schoolHeader h3 {
    padding-top: 0;
}
.descMinMaxBtn {
    position: relative;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: .9rem;
}
p {
    font-size: .9rem;
}
}
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.schoolHeader {
    padding-left: 1vw;
}
.schoolHeader h2 {
    font-size: 1rem;
    margin-left: 25%;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.schoolHeader {
    padding:3%;
}
.schoolHeader h2 {
    font-size: 1rem;
}
.schoolHeader h3 {
    padding-top: 1vh;
}
img{
    margin-top: 3vh;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated */
.schoolHeader h2 {
    font-size: 1rem;
}
.schoolHeader h3 {
    padding-top: 2vh;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
h6 {
    font-size: 1.1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.schoolHeader h2 {
    font-size: 1rem;
}
img{
    margin-top: 1vh;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
.schoolHeader h2 {
    font-size: 1rem;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height: 667px) and (max-height:668px) { /*iPhone 6/7/8 */
.schoolHeader {
    padding:3%;
}
.schoolHeader h2 {
    font-size: 1rem;
}
img{
    margin-top: 1vh;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: .9rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
img {
    float:none;
}
.schoolHeader {
    padding:3%;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-size: .8rem;
}
h6 {
    font-size: 1rem;
}
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
.schoolHeader {
    padding: 3%;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
img{
    float:none;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-size: 1rem;
}
h6 {
    font-size: 1rem;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: .9rem;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px) { /* iPhone X*/
.schoolHeader {
    padding: 3%;
}
.schoolHeader h5 {
    font-size: 1.1rem;
}
img{
    float:none;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 812px) and (min-height:375px) and (max-height:376px) { /* iPhone X rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.descMinMaxBtn {
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.schoolHeader h2 {
    font-size: 1.2rem;
}
img{
    height: 50px;
    float:none;
    margin-top: 1vh;
}
.descMinMaxBtn {
    position: relative;
    left: 32%;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.descMinMaxBtn {
    position: relative;
    left: 9vw;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: .9rem;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 30%;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 34%;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 22vw;
    font-size: .9rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.schoolHeader {
    padding: 3%;
}
img {
    float:none;
}
.schoolHeader h2 {
    font-size: 1.1rem;
}
.descMinMaxBtn {
    position: relative;
    left: 10vw;
    font-size: .9rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.schoolHeader {
    padding: 3%;
}
img{
    height: 120px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.descMinMaxBtn {
    margin-right: 28%;
    margin-bottom: 1vh;
    line-height: 4px;  
    font-size: 1.6rem;
}
.descMinMaxBtn:active {
    box-shadow: 0px 0px 0px;
    margin-right:58px;
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.schoolHeader h3 {
    font-size: 1.3rem;
}
.schoolHeader p {
    font-size: 1.1rem;
}
p {
    font-size: 1rem;
}
h6 {
    font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
img {
    max-width:40%;
}
.descMinMaxBtn {
    left: 12vw;
    bottom: 1vh;
    line-height: 4px;
    font-size: 1.6rem;
}
h6 {
    font-size: 1.3rem;
}
p {
  font-size: 1.2rem;
}
}
@media all and (min-width: 1024px) and (max-width:1025px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.schoolHeader {
    padding: 3%;
}
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.descMinMaxBtn {
    margin-left: 11%;
    font-size: 1.7rem;
    line-height: 2px;
}
.schoolHeader h2 {
    font-size: 2rem;
}
.schoolHeader p {
    font-size: 1.8rem;
}
p {
    font-size: 1.5rem;
}
h6 {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1366px) and (max-width:1367px) and (min-height:1024px) and (max-height:1025px) { /* iPad Pro rotated*/
.companyHeader {
    padding:3%;
}
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.descMinMaxBtn {
    margin-left: 10%;
    line-height: 4px;
    font-size: 1.6rem;
}
.scoolHeader h3 {
    font-size: 1.6rem;
}
.scoolHeader p {
    font-size: 1.6rem;
}
p {
    font-size: 1.6rem;
    padding:2%;
}
h5 {
    font-size: 1.4rem;
}
h6 {
    font-size: 1.6rem;
}
}
</style>