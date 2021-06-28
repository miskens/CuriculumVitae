<template>
  <div id="layout">
    <Header id="header" title="Curiculum Vitae"/><br>
      <div class="routerLinks">
      <router-link class="rlink" to="/">Home</router-link> 
      <router-link class="rlink" to="/experiences">Experience</router-link>
      <router-link class="rlink" to="/interests">Hobbies</router-link>
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
  height:100%;
}
#layout a {
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color:rgb(255, 255, 255);
}
#layout a.router-link-exact-active {
  color:rgb(255, 249, 159);
}
.routerLinks {
  width: 100%;
  padding-bottom: vh;
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
  width:96%;
  margin-left: 1%;
  overflow: hidden;
  border-top: 8px double #1C6EA4;
  border-bottom: 3px solid #1C6EA4;
  border-radius: 0px 130px 0px 130px;
  background-image: url("./assets/swirlbckgrndbottom.png");
  background-repeat: no-repeat;
  background-size: 100% 5000px;
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
  width:25% !important;
  margin-right: 1%;
}
}
@media all and (min-width: 400px) and (min-height:1px) {
.rlink {
  position: relative;
  width: 25% !important;
  right: 1%;
}
}
@media all and (min-width: 500px) and (min-height:1px) {
  #layout {
  width: 98%;
  margin-left: 1%;
}
.routerLinks {
  width:85%;
  margin-left: 7.5%;
}
.rlink {
  position:static;
  padding: .4rem .5rem;
  width: 24% !important;
}
}
@media all and (min-width: 600px) and (min-height:1px) {
  #layout {
  width: 90%;
  margin-left: 5%;
}
.routerLinks {
  width: 80%;
  margin-left: 10%;
}
.rlink {
  padding: .5rem .5rem;
}
}
@media all and (min-width: 800px) and (min-height:1px) {
#layout {
  width: 80%;
  margin-left: 10%;
}
.rlink {
  padding: .6rem .8rem;
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
</style>
