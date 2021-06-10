<template>
    <div class="mainDiv" id="maindiv" >
        <div class="interestsDiv">
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
@media all and (min-width: 50px) and (min-height:50px) {
.interestsDiv {
    width: 90%;
    margin-left: 2%;
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
}
@media all and (max-width: 280px) and (max-height:654px) { /*Galaxy fold */
}
@media all and (min-width: 320px)  and (max-height:570px){ /*iPhone 5/SE*/
nav {
    display: none;
}
}
@media all and (min-width: 360px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) and (max-height:669px) { /*iPhone 6/7/8 */
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px)and (max-height:376px) { /*iPhone 6/7/8 */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL */
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px) { /*  iPhone 6/7/8 Plus*/
.interestsDiv {
    width: 80%;
    margin-left: 8%;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.interestsDiv {
    width: 86%;
    margin-left: 3%;
}
} 
@media all and (min-width: 540px) and (max-height:721px) { /*Surface Duo*/
.interestsDiv {
    width: 80%;
    margin-left: 8%;
}
}
@media all and (min-width: 768px) and (max-height: 1024px) { /*iPad*/
.interestsDiv {
    width: 78%;
    margin-left: 8%;
}
}
@media all and (min-width: 1024px) and (max-height: 1365px) { /*iPad Pro*/
.interestsDiv {
    width: 76%;
    margin-left: 8%;
}
}
</style>