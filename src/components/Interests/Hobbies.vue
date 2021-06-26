<template>
<div class="HobbiesDiv">
    <DiscGolf />
    <Gaming/>
    <SeriesMovies />
    <Learning />
</div>

</template>

<script>
import DiscGolf from "../Interests/Hobbies/DiscGolf"
import Gaming from "../Interests/Hobbies/Gaming"
import SeriesMovies from "../Interests/Hobbies/SeriesMovies"
import Learning from "../Interests/Hobbies/Learning"

export default {
    inheritAttrs: false,
    name: "Hobbies",
    props:{
    },
    components: {
        DiscGolf,
        Gaming,
        SeriesMovies,
        Learning,
    },
    methods: {
    },
    data(){return {}}
}
</script>

<style>
@media all and (min-width: 1px) and (min-height:1px) {
.HobbiesDiv {
    width: 100%;
    float:left;
    padding-top: 4vh;
    padding-bottom: 4vh;
}
.hobbyDiv {
    resize: both;
    padding: 10vh 3vw 1vh;
    margin-bottom: 4vh;
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
.hobbyHeader {
    font-size: 1.2rem;
    margin: 5px;
    padding-top: 2vh;
    padding-bottom: 2vh;
    margin-bottom: 5vh;
    border: 0;
    border-bottom: solid 2px green;
}
ul {
    width: 30vw;
    list-style: none;
    
}
li {
    width:90%;
    margin-bottom:6px;
    padding: 4px;
    padding-left: 0;
    font-weight: 600;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 280px) and (max-width:281px) and (min-height:653px) and (max-height:654px){ /*Galaxy fold */
.HobbiesDiv {
    padding-top: 4vh;
}
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px) { /* Galaxy fold rotated */
.hobbyheader {
    padding-bottom: 1vh;
    margin-bottom: 0vh;
    }
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height: 568) and (max-height: 569px) { /*iPhone 5/SE */
.hobbyHeader {
    padding-bottom: 1vh;
    margin-bottom: 0vh;
    }
.hobbyDiv {
    width: 80%;
}
}
@media all and (min-width: 568px) and (min-height:320px)  and (max-height:321px) { /*iPhone 5/SE rotated */
.hobbyDiv {
    margin-left: 15%;
    width: 70%;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px)  and (max-height:668px) { /*iPhone 6/7/8 */
.hobbyDiv {
    margin-left:8%;
    width:78%; 
}
}
@media all and (min-width: 667px)and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
.hobbyDiv {
    margin-left:8%;
    width:78%; 
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
.hobbyheader {
    font-size: 1.1rem;
    }
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.hobbyDiv {
    margin-left:8%;
    width:80%; 
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.hobbyDiv {
    width:90%;
    margin-left:8%;
}
.hobbyHeader {
    margin-bottom: 1vh;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.hobbyDiv {
    margin-left:8%;
}
.hobbyHeader {
    margin-bottom: 1vh;
}
}
@media all and (min-width: 823px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px)  { /*Surface Duo*/
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.hobbyheader {
    font-size: 1rem;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.hobbyDiv {
    width:90%;
    margin-left:3%;
}
.hobbyheader {
    font-size: 1rem;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.hobbyDiv {
    width:96%;
    margin-left:3%;
}
.hobbyheader {
    font-size: 1rem;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro rotated */

}
</style>