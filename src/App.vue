<template>
  <div id="layout">
    <Header title="Mikael Puusaari - Curiculum Vitae" /><br>
      <div class="routerLinks">
      <router-link class="rlink" to="/">Home</router-link> 
      <router-link class="rlink" to="/experiences">Experience</router-link>
      <router-link class="rlink" to="/interests">Interest</router-link>
      <!--<router-link to="/Education">Education</router-link> |  -->
      <!-- <router-link to="/contact">Contact</router-link> -->
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
/* defaultish */
@media all and (min-width: 50px) and (min-height:50px) { /* RESPONSIVE Defaultish */
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
  width: 98%;
  margin-left: 1%;
  width: 100%;
  padding: 0px;
  padding-right: 1.5vw;
  caret-color: transparent;
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
.mainDiv {
  width:88%;
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
.routerLinks {
  width: 65%;
  padding-bottom: 0;
  margin-left: 17%;
}
.rlink {
  background-image:linear-gradient(to bottom, rgb(214, 111, 228), rgb(157, 107, 165), rgb(220, 113, 235));
    margin-right: 2%;;
    padding: 0.5rem 2rem;
    list-style-type: none;
    display: inline;
    cursor: pointer;
    transition: all .3s;
    border: solid;
    border-width: 2px;
    border-radius: 0.6rem;
    border-color: rgb(124, 124, 124);
}
#layout a {
  font-size: 1.5rem;
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
  height:2vh;
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
  width: 96%;
  margin-left: 0%;
  padding-bottom: 0vh;
}
.rlink {
    width: 24w;
    padding: .6rem 1.2rem;
    list-style-type: none;
    display:inline-table;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all .3s;
    border-radius: 0.6rem;
}
}
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
#layout a {
  font-size: .6rem;
}
.routerLinks {
  width: 100%;
  margin-left: 0%;
}
.rlink {
    width: 24w;
    padding: .6rem 2.1rem;
    list-style-type: none;
    display:inline-table;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all .3s;
    border-radius: 0.6rem;
}
.spacer {
  height:6vh;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px)  { /*iPhone 5/SE*/
#layout a {
  font-size: .9rem;
}
.routerLinks {
  margin-left: 2%;
}
.rlink {
    padding: .8vh 2.8vh;
    margin-left: 1%;
}
.spacer {
  height:4vh;
}
}
@media all and (min-width: 568px) and (max-width:569px) and (min-height:320px) and (max-height:321px)  { /*iPhone 5/SE*/
#layout a {
  font-size: .9rem;
}
.routerLinks {
  padding-bottom: 4vh;
}
.rlink {
    padding: 1.8vh 6.5vh;
}
.spacer {
  height:2vh;
}
}
@media all and (min-width: 360px) and (max-width:361px) and (min-height:640px) and (max-height:641px)  { /*Moto 4 & Galaxy S5 */
#layout a {
  font-size: .9rem;
}
.routerLinks {
  margin-left: 6%;
}
.rlink {
    padding: .4rem 1.2rem;
}
.spacer {
  height:3vh;
}
}
@media all and (min-width: 640px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
#layout a {
  font-size: 1rem;
}
.routerLinks {
  padding-bottom: 4vh;
}
.rlink {
    padding: .4rem 1.6rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px) and (max-height:668px)   { /*iPhone 6/7/8 */
#layout a {
  font-weight:600;
  font-size: 1rem;
}
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .2rem 1rem;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
#layout a {
  font-size: 1rem;
}
.routerLinks {
  padding-bottom: 3vh;
}
.rlink {
    padding: 1.8vh 4.8vw;
}
.mainDiv {
    padding-right: 7vw;
}
}
@media all and (min-width: 414px) and (max-width: 415px)  and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
#layout a {
  font-size: .9rem;
}
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .4rem 1.8rem;
}
.mainDiv {
    margin-left: 1%;
    padding-right: 7vw;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
#layout a {
  font-weight:600;
  font-size: 1rem;
}
.routerLinks {
  padding-bottom: 2vh;
}
.rlink {
    padding: .4rem 2.6rem;
}
.mainDiv {
    margin-left: 2%;
    padding-right: 4vw;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
#layout a {
  font-size: 1rem;
}
.routerLinks {
  margin-left: 3%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .4rem 1.4rem;
}
.mainDiv {
    margin-left: 1%;
    padding-right: 5vw;
}
} 
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px)  { /*iPhone X rotated */
#layout a {
  font-size: 1rem;
}
.routerLinks {
  margin-left: 10%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .4rem 1.8rem;
    margin-right: 1vw;
}
.mainDiv {
  width: 87%;
  margin-left: 0%;
}
.spacer {
  height: 5vh;
}
} 
@media all and (min-width: 411px) and (max-width:412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .3rem 1.1rem;
    display:inline;
}
#layout a {
  font-size: 1.1rem;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.routerLinks {
  margin-left: 14%;
  padding-bottom: 2vh;
}
.rlink {
    padding: .3rem 1.8rem;
    display:inline;
}
#layout a {
  font-size: 1.1rem;
}
.mainDiv {
  width: 90%;
  margin-left: 0%;
}
.spacer {
  height: 5vh;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
  .rlink {
    padding: .4rem 1.3rem;
    display:inline;
  }
  #layout a {
  font-size: 1rem;
}
.mainDiv {
  width: 90%;
}
.spacer {
  height: 2vh;
}
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.routerLinks {
  margin-left: 12%;
  padding-bottom: 0vh;
}
  .rlink {
    padding: .5rem 2rem;
    display:inline;
  }
  #layout a {
  font-size: 1rem;
}
.mainDiv {
  width: 90%;
}
.spacer {
  height: 5vh;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.routerLinks {
  margin-left: 8%;
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-left: 2vw;
    padding: .8rem 2.6rem;
}
#layout a {
  font-size: 0.8rem;
}
.mainDiv {
  width: 92%;
}
.spacer {
  height: 3vh;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.routerLinks {
  margin-left: 12%;
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-left: .5vw;
    padding: .5rem 2.6rem;
}
#layout a {
  font-size: 0.8rem;
}
.mainDiv {
  width: 91%;
}
.spacer {
  height: 4vh;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.routerLinks {
  margin-left: 8%;
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 2vw;
    padding: 1.1rem 3rem;
}
#layout a {
  font-size: 1.4rem;
}
.mainDiv {
  width: 94%;
}
.spacer {
  height: 3vh;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.routerLinks {
  margin-left:15%;
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-left: .5vw;
    padding: .9rem 4rem;
}
#layout a {
  font-size: 1.2rem;
}
.spacer {
  height: 4vh;
}
}
@media all and (min-width: 1024px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.routerLinks {
  margin-left: 14%;
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-right: 2vw;
    padding: 1.1rem 3rem;
}
#layout a {
  font-size: 1.6rem;
}
.mainDiv {
  width: 90%;
}
.spacer {
  height: 3vh;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro*/
.rlink {
    margin-right: 1vw;
    padding: 1.2rem 5rem;
}
}
</style>
