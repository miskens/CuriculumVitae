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
body {
  width: 100vw;
}
.routerLinks {
  width: 75%;
  height:1vh;
  margin-left: 8%;
  padding-bottom: 5vh;
}
.rlink {
    background-image:linear-gradient(to bottom, rgb(214, 111, 228), rgb(157, 107, 165), rgb(220, 113, 235));
    margin-right: 1vw;
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
.mainDiv {
  overflow: hidden;
  border-top: 8px double #1C6EA4;
  border-bottom: 3px solid #1C6EA4;
  border-radius: 0px 130px 0px 130px;
  background-image: url("./assets/swirlbckgrndbottom.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
  caret-color: transparent;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #496683;
}
#layout {
  width: 100%;
  padding: 0px;
  caret-color: transparent;
  overflow: hidden;
}
#layout a {
  font-size: 1.7rem;
  font-weight: bold;
  color:rgb(255, 255, 255);
}

#layout a.router-link-exact-active {
  color:rgb(255, 249, 159);
  
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
  height:6vh;
}

/* // RESPONSIVENESS // */
@media all and (min-width: 279px) and  (min-height:653px) and (max-height:654px) { /*Galaxy fold */
#app {
  width: 94%;
  overflow: hidden;
}
#layout a {
  font-weight: bold;
  font-size: x-small;
  color:rgb(255, 255, 255);
}
.mainDiv {
  width:100%;
  overflow: hidden;
}
.routerLinks {
  width: 100%;
  margin-left: 2%;
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
  font-weight: bold;
  font-size: x-small;
  color:rgb(255, 255, 255);
}
.routerLinks {
  width: 100%;
  margin-left: 0%;
  padding-bottom: 8vh;
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
}
@media all and (min-width: 320px) and (min-height:568px) and (max-height:569px)  { /*iPhone 5/SE*/
#app {
  width: 100%;
  overflow: hidden;
}
#layout a {
  font-weight:600;
  font-size: 1rem;
  color:rgb(255, 255, 255);
}
.mainDiv {
  width:100vw;
  overflow: hidden;
}
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
.rlink {
    padding: 1vh 2vh;
}
}
@media all and (min-width: 568px) and (min-height:320px) and (max-height:321px)  { /*iPhone 5/SE*/
#layout a {
  font-size: 1rem;
}
.routerLinks {
  padding-bottom: 4vh;
}
.rlink {
    padding: 1.8vh 6vh;
}
}
@media all and (min-width: 360px) and (min-height:640px) and (max-height:641px)  { /*Moto 4 & Galaxy S5 */
#layout a {
  font-size: .9rem;
}
.routerLinks {
  margin-left: 6%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .4rem 1.2rem;
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
@media all and (min-width: 375px)and (min-height:667px) and (max-height:668px)   { /*iPhone 6/7/8 */
#app {
  width: 100%;
  overflow: hidden;
}
#layout a {
  font-weight:600;
  font-size: 1.1rem;
  color:rgb(255, 255, 255);
}
.mainDiv {
  width:100vw;
  overflow: hidden;
}
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
.rlink {
    padding: 1vh 3.4vw;
}
}
@media all and (min-width: 667px)and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
#layout a {
  font-size: 1rem;
}
.routerLinks {
  padding-bottom: 3vh;
}
.rlink {
    padding: 1.8vh 4.8vw;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
#app {
  width: 100%;
  overflow: hidden;
}
#layout a {
  font-size: .9rem;
}
.mainDiv {
  width:100vw;
  overflow: hidden;
}
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .7rem 1.8rem;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
#layout a {
  font-weight:600;
  font-size: 1rem;
  color:rgb(255, 255, 255);
}
.routerLinks {
  padding-bottom: 2vh;
}
.rlink {
    padding: .4rem 2.6rem;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
#app {
  width: 100%;
  overflow: hidden;
}
#layout a {
  font-weight:600;
  font-size: 1.1rem;
}
.routerLinks {
  margin-left: 3%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .6rem 1.2rem;
}
} 
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
.rlink {
    padding: .4rem 1rem;
    display:inline;
}
#layout a {
  font-size: 1.2rem;
}
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.routerLinks {
  margin-left: 7%;
  padding-bottom: 2vh;
}
.rlink {
    padding: .4rem 1.8rem;
    display:inline;
}
#layout a {
  font-size: 1.1rem;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.routerLinks {
  margin-left: 5%;
  padding-bottom: 0vh;
}
  .rlink {
    padding: .5rem 1.1rem;
    display:inline;
  }
  #layout a {
  font-size: 1.2rem;
}
}
@media all and (min-width: 540px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
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
}
@media all and (min-width: 720px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.routerLinks {
  margin-left: 8%;
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
.rlink {
    margin-left: .5vw;
    padding: .6rem 2.6rem;
}
#layout a {
  font-size: 0.8rem;
}
}
@media all and (min-width: 768px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
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
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.routerLinks {
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
}
@media all and (min-width: 1024px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.routerLinks {
  margin-left: 7%;
  margin-bottom: 1vh;
  padding-bottom: 0vh;
}
#layout {
  margin-left: 10%;
  width: 80%;
}
.rlink {
    margin-right: 2vw;
    padding: 1rem 3.5rem;
}
#layout a {
  font-size: 1.5rem;
}
.mainDiv {
  width:100%;
}
}
@media all and (min-width: 1366px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro*/
.rlink {
    margin-right: 1vw;
    padding: 1.2rem 5rem;
}
}
@media all and (min-width: 500px) and (min-height:1368px) { /* For smaller window than smallest laptop screens */
}
@media all and (min-width: 700px) and (min-height:1368px) { /* For smaller window than smallest laptop screens */
}
@media all and (min-width: 1124px) and (min-height:1368px){ /*Smallest laptop screens*/
}
@media all and (min-width: 1124px)  and (min-height:1368px){ /*Smallest laptop screens*/
#layout {
  margin-left: 10%;
  width: 75%;
}
.routerLinks {
  margin-left: 7%;
  margin-bottom: 0vh;
  padding-bottom: 0vh;
}
.rlink {
  padding: 1.2rem 5.5rem;
}
.mainDiv {
  width:100%;
}
}
@media all and (min-width: 1496px) and (min-height:1368px) { /*smaller-medium laptop screens*/
}
@media all and (min-width: 1660px) { /*medium laptop screens*/
}
@media all and (min-width: 18240px) { /*medium-larger laptop screens*/
}
@media all and (min-width: 1996px) { /*larger laptop screens*/
}
</style>
