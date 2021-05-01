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
    background-color:rgb(180, 255, 236, 0.8);
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
.rlink:hover {
    border-color:gold;
    font-weight: 700;
}
.mainDiv {
  position: relative;
  padding-bottom: 10vh;
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
  color: #2c3e50;
}

#layout {
  padding: 35px;
  padding-top: 10px;
  background-color:rgb(250, 250, 255);
  caret-color: transparent;
}

#layout a {
  font-weight: bold;
  color:slategray;
}

#layout a.router-link-exact-active {
  color:navy;
  
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
</style>
