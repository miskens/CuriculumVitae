<template>
    <div class="hobbyDiv">
        <h2 class="hobbyheader">Learning</h2>
            <p>Kind of a weird thing to add to your CV, I know. The world is a very interesting place, so learning a bit of
                everything around us is just fun.
            </p>
            <p>
                I guess I just love learning about various things, and it is a hobby that will never seize to offer you something new.
            </p>
            <div><p>Some of the things I love(even if there´s never enough time to learn enough):</p>
                <ul>
                    <li><p>Science</p></li>
                    <li><p>Languages</p></li>
                    <li><p>Cultures</p></li>
                    <li><p>History</p></li>
                    <li><p>The IT world</p></li>
                </ul>
            </div>
    </div>
  <!-- <VideoEmbed /> -->
</template>

<script>
// import VideoEmbed from "../Shared/VideoEmbed"

export default {
    name: "Learning",
    props: {},
    components: {
        // VideoEmbed
    },
    data() {
        return {

        }
    },
    methods: {
    },
    created() {}
}
</script>

<style scoped>
.hobbyheader {
    font-size: 1rem;
    margin: 5px;
    padding-bottom: 2vh;
    margin-bottom: 5vh;
    border: 0;
    border-bottom: solid 2px green;
}
.hobbyDiv {
    width:80%;
    height: auto;
    resize: both;
    padding: 2vh 3vw 1vh;
    margin: 3vh 5vw;
    margin-bottom: 4vh;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(255, 213, 229), rgb(255, 255, 255));
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
p {
    font-weight: 500;
    font-size: medium;
}
ul {
    width: 30vw;
    list-style: none;
    
}
li {
    background-color: rgb(231, 231, 231);
    width: 20vw;
    margin-bottom:6px;
    padding: 4px;
    padding-left: 0;
    font-weight: 600;
}
@media all and (max-width: 280px) and (min-height:653px) and (max-height:654px){ /*Galaxy fold */
.hobbyheader {
    padding-bottom: 1vh;
    margin-bottom: 0vh;
    }
    p {
    font-weight: 300;
    font-size: x-small;
}
ul {
    width: 97%;
    height: auto;
    padding:0;
    list-style: none;
}
li {
    width:60%;
    margin-left: 20%;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.hobbyheader {
    padding-bottom: 1vh;
    margin-bottom: 0vh;
    }
    p {
    font-size: x-small;
}
ul {
    width: 97%;
    height: auto;
    padding:0;
    list-style: none;
}
li {
    width:45%;
    margin-left: 26%;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 320px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
ul {
    width: 45%;
    margin-left: 27.5%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:4vh;
    width: 96%;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 300;
    font-size: smaller;
}
}
@media all and (min-width: 568px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE*/
ul {
    width: 45%;
    margin-left: 27.5%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:6vh;
    width: 96%;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 300;
    font-size: smaller;
}
}
@media all and (min-width: 360px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
ul {
    width: 56%;
    margin-left: 26%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:4vh;
    width: 96%;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-size: .8rem;
}
}
@media all and (min-width: 640px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
ul {
    width: 46%;
    margin-left: 26%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:5vh;
    width: 96%;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-size: .8rem;
}
}
@media all and (min-width: 375px) and (min-height:667px) and (max-height:668px) { /* iPhone 6/7/8 */
ul {
    width: 45%;
    margin-left: 27.5%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:4vh;
    width: 96%;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 300;
    font-size: smaller;
}
}
@media all and (min-width: 667px) and (min-height:375px) and (max-height:376px) { /* iPhone 6/7/8 rotated */
ul {
    width: 45%;
    margin-left: 27.5%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:5vh;
    width: 80%;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 300;
    font-size: smaller;
}
}
@media all and (min-width: 411px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
ul {
    width: 45%;
    margin-left: 27.5%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:4vh;
    width: 96%;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 300;
    font-size: smaller;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus*/
ul {
    width: 45%;
    margin-left: 27.5%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:4vh;
    width: 96%;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 300;
    font-size: smaller;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px) { /* iPhone X*/
.hobbyDiv {
    margin-left:8%;
}
ul {
    width: 45%;
    margin-left: 30%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:4vh;
    width: 80%;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 300;
    font-size: smaller;
}
}
@media all and (min-width: 812px) and (min-height:375px) and (max-height:376px) { /* iPhone rotated X*/
.hobbyDiv {
    margin-left:8%;
}
ul {
    width: 45%;
    margin-left: 27.5%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:7vh;
    width: 96%;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 300;
    font-size: .8rem;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.hobbyDiv {
    margin-left:8%;
}
ul {
    width:80%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:5vh;
    width:60%;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.hobbyDiv {
    margin-left:8%;
}
ul {
    width:60%;
    margin-left: 26%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:6vh;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.hobbyDiv {
    margin-left:8%;
}
ul {
    width:80%;
    margin-left: 22%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    width:70%;
    height:4vh;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 823px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.hobbyDiv {
    margin-left:8%;
}
ul {
    width:80%;
    margin-left: 32%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    width:80%;
    height:6vh;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 540px)and (min-height:720px) and (max-height:721px)  { /*Surface Duo*/
h5 {
    font-size: 1.6rem;
}
ul {
    width: 80%;
    margin-left: 10%;
}
li {
    width:70%;
    height:4vh;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 500;
    font-size: 1.4rem;
}
}
@media all and (min-width: 720px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
ul {
    margin-left: 22%;
    width: 45%;
}
li {
    height:6vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 768px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.hobbyDiv {
    margin-left:6%;
}
ul {
    margin-left: 25%;
    width: 37%;
}
li {
    height:6vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 500;
    font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
p {
    font-weight: 500;
    font-size: 1.3rem;
}
ul {
    margin-left: 25%;
    width: 37%;
}
li {
    height:6vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-weight: 500;
    font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.hobbyDiv {
    margin-left:10%;
}
.hobbyheader {
    font-size: 1.8rem;
}
ul {
    margin-left: 22%;
    width:36%;
}
li {
    height:6vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1366px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro rotated */
.hobbyDiv {
    margin-left:18%;
    width:60%;
}
ul {
    margin-left: 24%;
    width:45%;
}
li {
    height:6vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
li p {
    font-size: 1.7rem;
}
}
@media all and (min-width: 400px) and (min-height:1368px) { /* For smaller window than smallest laptop screens */
.hobbyheader {
    font-size: 1.8rem;
}
p {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1124px) and (min-height:1368px){ /*Smallest laptop screens*/
}
</style>