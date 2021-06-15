<template>
  <div id="layout">
    <Header title="Curiculum Vitae"/><br>
      <div class="routerLinks">
      <router-link class="rlink" to="/">Home</router-link> 
      <router-link class="rlink" to="/experiences">Experience</router-link>
      <router-link class="rlink" to="/interests">Interest</router-link>
      </div>
    <div class="spacer"></div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {
  },
  async mounted() {
  }
}
</script>

<style>
@media all and (min-width: 1px) and (min-height:1px) {
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #496683;
}
body {
  width: 100vw;
}
#layout {
  width: 100%;
  overflow: hidden;
}
#layout a {
  font-size: 1rem;
  font-weight: bold;
  color:rgb(255, 255, 255);
}
#layout a.router-link-exact-active {
  color:rgb(255, 249, 159);
}
.routerLinks {
  width: 100%;
  padding-bottom: 2vh;
  margin-left: 0%;
  
}
.rlink {
  background-image:linear-gradient(to bottom, rgb(178, 176, 255), rgb(121, 122, 185), rgb(178, 176, 255));
    margin-right: 1%;
    width: 30% !important;
    height: 25% !important;
    max-width: 200px;
    padding: .4rem 0rem;
    list-style-type: none;
    display: inline-block;
    cursor: pointer;
    transition: all .3s;
    border-radius: 0.6rem;
    overflow-x:hidden;
}
.mainDiv {
  width:86%;
  margin-left: 1%;
  padding: 3vw;
  overflow: hidden;
  border-top: 8px double #1C6EA4;
  border-bottom: 3px solid #1C6EA4;
  border-radius: 0px 130px 0px 130px;
  background-image: url("./assets/swirlbckgrndbottom.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  caret-color: transparent;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  min-width: 120px;
  max-width: 120px;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.spacer {
  height:0vh;
}
}
@media all and (min-width: 300px) and (min-height:1px) {
.routerLinks {
  position: relative;
  right:3%;
}
.rlink {
  width:27% !important;
  margin-right: 1%;
}
}
@media all and (min-width: 400px) and (min-height:1px) {
.rlink {
  position: relative;
  width: 25% !important;
  right: 3%;
}
}
@media all and (min-width: 500px) and (min-height:1px) {
  #layout {
  width: 90%;
  margin-left: 5%;
}
.routerLinks {
  width:90%;
  margin-left: 3%;
}
.rlink {
  position:static;
  width: 24% !important;
}
}
@media all and (min-width: 600px) and (min-height:1px) {
  #layout {
  width: 80%;
  margin-left: 10%;
}
.routerLinks {
  width: 80%;
  margin-left: 10%;
}
}
@media all and (min-width: 800px) and (min-height:1px) {
#layout {
  width: 70%;
  margin-left: 15%;
}
}
@media all and (min-width: 1000px) and (min-height:1px) {
#layout {
  width: 65%;
  margin-left: 17.5%;
}
.rlink {
  width: 20% !important;
}
}
@media all and (min-width: 1200px) and (min-height:1px) {
.rlink {
  width: 18% !important;
}
}
@media all and (min-width: 1400px) and (min-height:1px) {
.rlink {
  width: 15% !important;
}
}
/* // RESPONSIVENESS // */
@media all and (min-width: 280px) and (max-width: 281px) and  (min-height:653px) and (max-height:654px) { /*Galaxy fold */
#layout {
  width:100%;
  padding:0;
  margin:0;
}
#layout a {
  font-size: .6rem;
}
.routerLinks {
  padding-bottom: 1vh;
}
.mainDiv {
  width: 91%;
}
.rlink {
    width: 24w;
    list-style-type: none;
    display:inline-table;
    padding: 3% 0%;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all .3s;
    border-radius: 0.6rem;
}
}
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
#layout {
  width: 100%;
  margin-left:0%;
}
#layout a {
  font-size: .8rem;
}
.routerLinks {
  padding-bottom: 0vh;
}
.rlink {
    width: 24w;
    list-style-type: none;
    display:inline-table;
    padding: 1% 0%;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all .3s;
    border-radius: 0.6rem;
}
.mainDiv {
  width: 91%;
}
.spacer {
  height:2vh;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px)  { /*iPhone 5/SE*/
#layout a {
  font-size: .9rem;
}
.routerLinks {
  margin-left: 2%;
}
.mainDiv {
  width: 90%;
  margin-left: 0%;
}
}
@media all and (min-width: 568px) and (max-width:569px) and (min-height:320px) and (max-height:321px)  { /*iPhone 5/SE rotated */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: .9rem;
}
.routerLinks {
  padding-bottom: 4vh;
}
.mainDiv {
  width: 90%;
  margin-left: 2%;
}
}
@media all and (min-width: 360px) and (max-width:361px) and (min-height:640px) and (max-height:641px)  { /*Moto 4 & Galaxy S5 */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: .9rem;
}
.mainDiv {
  width: 90%;
}
}
@media all and (min-width: 640px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1rem;
}
.routerLinks {
  padding-bottom: 4vh;
}
.mainDiv {
  width: 90%;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px) and (max-height:668px)   { /*iPhone 6/7/8 */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-weight:600;
  font-size: 1rem;
}
.routerLinks {
  
  padding-bottom: 0vh;
}
.mainDiv {
  width: 90%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1rem;
}
.routerLinks {
  padding-bottom: 3vh;
}
.mainDiv {
  width: 91%;
}
}
@media all and (min-width: 414px) and (max-width: 415px)  and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: .9rem;
}
.routerLinks {
  padding-bottom: 0vh;
}
.rlink {
  margin-right: 0;
  margin-left: 1%;
  padding: 2% 0%;
}
.mainDiv {
    width: 90%;
    margin-left: 0%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-weight:600;
  font-size: 1rem;
}
.routerLinks {
  padding-bottom: 2vh;
}
.mainDiv {
    width: 91%;
    margin-left: 0%;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1rem;
}
.routerLinks {
  
  padding-bottom: 0vh;
}
.rlink {
  margin-right: 0;
  margin-left: 1%;
    padding: 2.5% 1%;
}
.mainDiv {
    margin-left: 1%;
    padding-right: 5vw;
}
.spacer {
  height: 1vh;
}
} 
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px)  { /*iPhone X rotated */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1rem;
}
.routerLinks {
  
  padding-bottom: 0vh;
}
.rlink {
    
    margin-left: 1%;
}
.mainDiv {
    width: 91%;
    margin-left: 1%;
}
.spacer {
  height: 2vh;
}
} 
@media all and (min-width: 411px) and (max-width:412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
#layout {
  width: 100%;
  margin-left: 0;
}
.routerLinks {
  
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 0;
    margin-left: 1%;
}
#layout a {
  font-size: 1rem;
}
.mainDiv {
  width: 91%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.1rem;
}
.routerLinks {
  
  margin-top: 1%;
  padding-bottom: 2vh;
}
.mainDiv {
  width: 91%;
  margin-left: 0%;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.1rem;
}
.routerLinks {
  
  padding-bottom: 0vh;
}
.rlink {
  padding: 2% 0%;
}
.mainDiv {
  width: 90%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.1rem;
}
.routerLinks {
  
  padding-bottom: 0vh;
}
.mainDiv {
  width: 91%;
}
.spacer {
  height: 2vh;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.1rem;
}
.routerLinks {
  
  margin-bottom: 0vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-left: 1vw;
    
}
.mainDiv {
  width: 92%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.1rem;
}
.routerLinks {
  
  margin-bottom: 0vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-left: .5vw;
    
}
.mainDiv {
  width: 91%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.2rem;
}
.routerLinks {
  
  margin-bottom: 0vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 1%;
    padding: 2% 1%;
}
.mainDiv {
  width: 91%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.1rem;
}
.routerLinks {
  
  margin-bottom: 0vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-left: 0vw;
    padding: 1.5% 1%;
}
.mainDiv {
  width:91%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 1024px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.5rem;
}
.routerLinks {
  
  margin-bottom: 0vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 2vw;
    padding: 1.5% 2%;
}
.mainDiv {
  width: 92%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro rotated */
#layout {
  width: 100%;
  margin-left: 0;
}
#layout a {
  font-size: 1.6rem;
}
.routerLinks {
  margin-top: 3vh;
  
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 1vw;
    padding: 1% .5%;
}
.mainDiv {
  width: 91%;
}
}
@media all and (min-width: 1080px) and (max-width:1081px) and (min-height:2160px) and (max-height:2161px) { /* Asus Zenfone Max Pro */
#layout {
  width: 98%;
  margin-left: 1%;
}
#layout a {
  font-size: 1.1rem;
}
.routerLinks {
  margin-top: 1vh;
  
  margin-bottom: 0vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 1%;
    
}
.mainDiv {
  width: 92%;
}
.spacer {
  height: 1vh;
}
}
@media all and (min-width: 1536px) and (max-width:1537px) and (min-height:2048px) and (max-height:2049px) { /* Galaxy S3 */
#layout {
  width: 98%;
  margin-left: 1%;
}
#layout a {
  font-size: 1rem;
}
.routerLinks {
  margin-top: 3vh;
  
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 1vw;
    
}
.mainDiv {
  width: 95%;
}
.spacer {
  height: 3vh;
}
}
@media all and (min-width: 1536px) and (max-width:1537px) and (min-height:2048px) and (max-height:2049px) { /* Galaxy S3 Pro rotated*/
#layout {
  width: 98%;
  margin-left: 1%;
}
#layout a {
  font-size: 1rem;
}
.routerLinks {
  margin-top: 3vh;
  
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 1vw;
    
}
.mainDiv {
  width: 95%;
}
.spacer {
  height: 3vh;
}
}
@media all and (min-width: 1440px) and (max-width:1441px) and (min-height:3168px) and (max-height:3169px) { /* Galaxy S3 Pro rotated*/
#layout {
  width: 98%;
  margin-left: 1%;
}
#layout a {
  font-size: 1rem;
}
.routerLinks {
  margin-top: 3vh;
  
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 1vw;
    
}
.mainDiv {
  width: 95%;
}
.spacer {
  height: 3vh;
}
}
</style>
