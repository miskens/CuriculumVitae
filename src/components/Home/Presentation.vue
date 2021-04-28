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
      <div style="height:600px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta impedit ad placeat in facilis tenetur, cumque saepe dolores expedita voluptas eaque voluptatem amet veritatis, similique neque repellat labore! Nihil at tempora maiores molestiae sapiente animi, distinctio iusto ullam aperiam dolorem optio quo nobis, id sint saepe excepturi. Labore et cupiditate sequi rem doloribus optio amet tenetur. Quidem voluptatem officia ipsum! Dolorem, labore enim temporibus veniam, quam ducimus reiciendis dignissimos dolor placeat nostrum nihil molestias! Asperiores nulla molestiae praesentium voluptate explicabo dignissimos consequatur beatae dolor perferendis. Magnam aliquid placeat molestias rem minima dolor, aspernatur adipisci numquam aut ipsa assumenda beatae minus perferendis dolorum quisquam a soluta sapiente, in hic sequi fugiat. Illo, ipsum! Placeat, iusto quae ipsam ullam sunt consequuntur at labore officiis non! Sed quis autem provident cum sit, ea assumenda dolorum unde debitis pariatur eaque consequatur repellat molestias temporibus dicta culpa quaerat iusto aliquam totam doloremque voluptatum facilis? Ipsum in et reiciendis, ab omnis temporibus dolorum quos asperiores! Fugit nisi maiores esse, dolore doloremque impedit recusandae praesentium modi facere officiis voluptate nobis beatae odio sit at quae sed quasi totam earum molestiae obcaecati ea consequuntur! Porro aspernatur quidem, fuga optio officia in quam accusamus asperiores ea laudantium, ipsam suscipit voluptas, necessitatibus ipsa autem. Impedit sed, eaque delectus veniam debitis iusto odit similique, voluptatem necessitatibus molestias harum cupiditate at fugit, ipsam dolores numquam quibusdam recusandae? Et magni placeat, totam sed corrupti exercitationem assumenda suscipit odio. Et dolores alias voluptas molestiae voluptates asperiores eius modi dolorum saepe quas. Magni voluptas consequuntur maiores illo illum ipsum, necessitatibus aut at ea neque. Excepturi nam quae tenetur voluptas vitae assumenda autem porro odio laborum, sunt ex debitis, vel a soluta necessitatibus minima sint! Est, tenetur. Nostrum cupiditate quas dolorum explicabo, eum voluptatem dolor culpa! Magni nihil ducimus, pariatur rerum fugiat ad autem et dolor.</div>
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