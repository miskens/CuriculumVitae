<template>
    <div class="mainDiv page" id="maindiv" >
        <!-- <div class="worklifeDiv">
            <Workplaces title="Work experience" :companies="companies"/>
        </div> -->
        <div class="interestsDiv">
            <!-- <Studies title="Studies" :schools="studies" /> -->
            <Hobbies />
        </div>
        <div class="rightDiv">    
            <nav>
                <ul>
                    <li ><router-link class="rlink" to="/discgolf.vue">Discgolf</router-link></li>
                    <li><router-link class="rlink" to="/seriesmovies.vue">Series / Movies</router-link></li>
                    <li><router-link class="rlink" to="/dnd.vue">D&D</router-link></li>
                    <li><router-link class="rlink" to="/learning.vue">Learning</router-link></li>
                </ul>
            </nav>
        </div>
  </div>
</template>

<script>
 import Hobbies from '../components/Interests/Hobbies.vue'

export default {
  name: 'Interests',
  components: {
    Hobbies,
}
}
</script>

<style scoped>
.mainDiv {
  resize: both;
  overflow: hidden;
  position:relative;
  height:auto;
  overflow-y: hidden;
}
.interestsDiv {
    resize: both;
    width:auto;
    float:left;
}
.rightDiv {
    width:auto;
    overflow: hidden;
    padding-right:2vw;
}
nav {
    height:auto;
    width:auto;
}
ul {
    float:right;
    list-style: none;
    overflow: hidden;
    margin: 4vw 4vh;
    padding-top: 3vh;
}
li {
    width: 14vw;
    margin-right: 4vw;
    height: 6vh;
    background-color:rgba(216, 216, 216, 0);
    transition: all .2s;
}
li:hover {
    background-color:rgba(216, 216, 216, 0.4);
}
.rlink {
    text-align: center;
    line-height:50px;
    background-color:rgb(180, 255, 236, 0);
    border-radius: 2rem;
    font-weight: 500;
    border-style: none;
    cursor: pointer;
    transition: all .3s;
}
.rlink:hover {
    border-color: black;
    border-radius: 0;
}
#layout a {
    color:rgb(154, 66, 255);
}
#layout a:hover {
    color:rgb(54, 0, 116);
}
</style>