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
</style>