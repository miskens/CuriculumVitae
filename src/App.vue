<template>
  <div id="layout">
    <Header title="Mikael Puusaari - Curiculum Vitae" /><br>
    <div class="routerLinks">
    <router-link class="rlink" to="/">Home</router-link> 
    <router-link class="rlink" to="/experiences">Experience</router-link>
    <!-- <router-link to="/Hobbies">Hobbies/Interest</router-link> | 
    <router-link to="/Education">Education</router-link> |  -->
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
  }
}
</script>

<style>
.routerLinks {
    
  caret-color: transparent;
}
.rlink {
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
.rlink:hover {
    border-color:gold;
    font-weight: 700;
}
.mainDiv {
  overflow: hidden;
  position: relative;
  min-height: 600px;
  height:auto;
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
  padding: 30px;
  background-color:rgb(250, 255, 250);
}

#layout a {
  font-weight: bold;
  color: #2c3e50;
}

#layout a.router-link-exact-active {
  color: #42b983;
}
.spacer {
  height:6vh;
}
</style>
