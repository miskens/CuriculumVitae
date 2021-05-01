<template>
<div class="HobbiesDiv">
    <nav>
        <ul>
            <div class="liDiv"><li ><router-link class="rlink" to="/discgolf.vue">Discgolf</router-link></li></div>
            <div class="liDiv"><li><router-link class="rlink" to="/seriesmovies.vue">Series / Movies</router-link></li></div>
            <div class="liDiv"><li><router-link class="rlink" to="/dnd.vue">D&D</router-link></li></div>
            <div class="liDiv"><li><router-link class="rlink" to="/learning.vue">Learning</router-link></li></div>
        </ul>
    </nav>
    I got one of those..
  <Button class="btn" text="Secrets" color="turquoise" @click="onClick"/>
  <DiscGolf />
  </div>
</template>

<script>
import Button from "../Shared/Button"
import DiscGolf from "../Interests/DiscGolf"

export default {
    inheritAttrs: false,
    name: "Hobbies",
    props:{},
    components: {
        Button,
        DiscGolf
    },
    methods: {
        onClick() {
            console.log("clicked")
        }
    },
    data(){return {}}
}
</script>

<style scoped>
.HobbiesDiv {
    width: 90vw;
    padding: 2vw 2vw 2vw 2vw;
}
nav {
    height:10vh;
}
.liDiv {
    width:auto;
    float: left;
    height:10vh;
    
}
.rlink {
    margin-right: 1vw;
    height: 10vh;
    list-style-type: none;
    display: inline;
    border-radius: 1rem;
    font-weight: 500;
    border-style: solid;
    border-width: 1px;
    border-bottom-width: 3px;
    cursor: pointer;
    transition: all .3s;
}
.rlink:hover {
    border-color: black;
}
ul {
    list-style: none;
    overflow: hidden;
    margin: 10px;
    padding: 0;
}
li {
    list-style: none;
    float:left;
    display: block;
    padding: 18px 0px 18px 0px;
}
li a {
  color: black;
  text-align: center;
}
li a:hover {
  background-color: #ded6eb;
}
.btn {
    margin-top: 5vh;
    float: right;
}
</style>