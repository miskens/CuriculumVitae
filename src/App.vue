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
.routerLinks {
  caret-color: transparent;
  z-index: 1;
}
.rlink {
    background-image:linear-gradient(to bottom, rgb(214, 111, 228), rgb(157, 107, 165), rgb(220, 113, 235));
    margin-right: 1vw;
    padding: 1rem 2rem 1rem 2rem;
    list-style-type: none;
    display: inline;
    cursor: pointer;
    transition: all .3s;
    border: solid;
    border-width: 2px;
    border-color: rgb(124, 124, 124);
}
.mainDiv {
  position: relative;
  padding-bottom: 10vh;
  width:100%;
  height:700px;
  overflow-y: hidden;
  border-top: 8px double #1C6EA4;
  border-bottom: 3px solid #1C6EA4;
  border-radius: 0px 130px 0px 130px;
  background-image: url("./assets/swirlbckgrndbottom.png");
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
  padding: 35px;
  padding-bottom: 30vh;
  padding-top: 10px;
  caret-color: transparent;
}

#layout a {
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

@media all and (max-width: 300px) { /*Galaxy fold: maxwidth due to interference towards higher*/
#app {
  width: 100%;
  overflow: hidden;
}
#layout {
  width: 100%;
  overflow: hidden;
  padding: 0px;
}
.mainDiv {
  width:100%;
  overflow: hidden;
}
.rlink {
    width: 32vw;
    padding: 1vh 2vw;
    list-style-type: none;
    display:inline-table;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all .3s;
}
.presentationDiv {
  max-width: 0;
  padding:0px;
  margin: 0;
  padding-top: 3vh;
}
.textDiv {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
    padding: 0;
}
p {
  /* text-indent: 30px; */
  text-align: justify;
  letter-spacing: 0;
  padding: 0px 2vw;
}
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
#app {
  width: 100%;
  overflow: hidden;
}
#layout {
  width: 100%;
  overflow: hidden;
  padding: 0px;
}
.mainDiv {
  width:100vw;
  overflow: hidden;
}
.rlink {
    padding: 1vh 2vw;
    list-style-type: none;
    display:inline;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: all .3s;
}
.presentationDiv {
  max-width: 0;
  padding:0px;
  margin: 0;
  padding-top: 3vh;
}
.textDiv {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
    padding: 0;
}
p {
  /* text-indent: 30px; */
  text-align: justify;
  letter-spacing: 0;
  padding: 0px 2vw;
}
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
}
@media all and (min-width: 540px) { /*Surface Duo*/
.rlink {
    margin-right: 2vw;
    padding: 1rem 2.6rem 1rem 2.6rem;
}
#layout a {
  font-size: 0.8rem;
}
}
@media all and (min-width: 768px) { /*iPad*/
.rlink {
    margin-right: 2vw;
    padding: 1.1rem 3rem;
}
#layout a {
  font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) { /*iPad Pro*/
.rlink {
    margin-right: 2vw;
    padding: 1.4rem 5rem;
}
#layout a {
  font-size: 1.5rem;
}
}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
#layout {
  margin-left: 10%;
  width: 80%;
}
.mainDiv {
  width:100%;
}
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
