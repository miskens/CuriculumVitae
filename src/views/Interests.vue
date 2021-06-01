<template>
    <div class="mainDiv page" id="maindiv" >
        <!-- <div class="worklifeDiv">
            <Workplaces title="Work experience" :companies="companies"/>
        </div> -->
        <div class="interestsDiv">
            <!-- <Studies title="Studies" :schools="studies" /> -->
            <Hobbies />
        </div>
        <!-- <div class="rightDiv">    
            <nav>
                <ul>
                    <li ><router-link class="rlink" to="/discgolf.vue">Discgolf</router-link></li>
                    <li><router-link class="rlink" to="/seriesmovies.vue">Series / Movies</router-link></li>
                    <li><router-link class="rlink" to="/dnd.vue">D&D</router-link></li>
                    <li><router-link class="rlink" to="/learning.vue">Learning</router-link></li>
                </ul>
            </nav>
        </div> -->
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
    width: 96vw;
    resize: both;
    float:left;
}
.rightDiv {   
    width:20vw;
    overflow: hidden;
    margin-top: 3vw;
    padding-right:2vw;
}
nav {
    height:auto;
    width:auto;
}
ul {
    float:left;
    list-style: none;
    overflow: hidden;
    padding-top: 3vh;
}
li {
    width: 14vw;
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
@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
nav {
    display: none;
}
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
}
@media all and (min-width: 540px) { /*Surface Duo*/
.interestsDiv {
    width: 80%;
    margin-left: 8%;
}
}
@media all and (min-width: 768px) { /*iPad*/
.interestsDiv {
    width: 78%;
    margin-left: 8%;
}
}
@media all and (min-width: 1024px) { /*iPad Pro*/
.interestsDiv {
    width: 76%;
    margin-left: 8%;
}
}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
.interestsDiv {
    width: 90%;
    margin-left: 2%;
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