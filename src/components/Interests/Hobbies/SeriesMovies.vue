<template>
    <div class="hobbyDiv">
        <h2 class="hobbyHeader">A Series and Movies thing</h2>
        <div class="hobbyTextDiv">
            <p>I like series and movies, they just take you to another place for a while.
            </p>
            <p>
                I especially enjoy movies that make you think and leaves you with a feeling of wonder afterwards.
            </p>
            <p>
                Or just something that gives you a good laugh.
            </p>
            </div>
            <div><p>Examples of movies and Series that I enjoyed, for a quick feel of who I am</p></div>
                <div class="moviesDiv">
                    <h5>Movies</h5>
                    <ul>
                        <li><p>K-Pax</p></li>
                        <li><p>The man from earth</p></li>
                        <li><p>Dumb and dumber</p></li>
                        <li><p>Good will hunting</p></li>
                        <li><p>Lord of the rings</p></li>
                    </ul>
                </div>
                <div class="seriesDiv">
                    <h5>Series</h5>
                    <ul>
                        <li><p>Fringe</p></li>
                        <li><p>Futurama</p></li>
                        <li><p>Game of thrones</p></li>
                        <li><p>Stargate</p></li>
                        <li><p>House M.D</p></li>
                    </ul>
                </div>
                <div class="clearer"></div>
    </div>
</template>

<script>

export default {
    name: "SeriesMovies",
    props: {},
    components: {
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
h5 {
    width: 45%;
    margin-left: 30%;
    font-size: 1.3rem;
    color:darkcyan;
    border-bottom: solid;
    border-color: blueviolet;
    border-width: 1px;
}
@media all and (min-width: 50px) and (min-height:50px) {
.hobbyDiv {
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(231, 216, 231), rgb(255, 255, 255));
}
ul {
    width: 80%;
    margin-left:10%;
    height: auto;
    padding:0;
    list-style: none;
    }
li {
    width: 100%;
    margin-bottom:6px;
    padding: 4px;
    padding-left: 0;
    font-weight: 600;
    line-height: 1px
}
}
@media all and (min-width: 280px) and (max-width:281px) and (min-height:653px) and (max-height:654px){ /*Galaxy fold */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 100%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width:100%;
    overflow: none;
}
ul {
    width: 90%;
    margin-left:5%;
    }
li {
    line-height: 1px;
}
    
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px) { /* Galaxy fold rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    margin-left: 25%;
}
li {
    width:60%;
    height:8vh;
}
}
@media all and (min-width: 320px) and (max-width:321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    margin-left: 10%;
    }
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px)  and (max-height:321px) { /*iPhone 5/SE rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
h5 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
li {
    width:60%;
    margin-left: 20%;
    }
}
@media all and (min-width: 360px) and (max-width:361px) and (min-height:640px)  and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    margin-left: 20%;
}
li {
    width:90%;
    line-height: 1px;
    }
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    margin-left: 24%;
}
li {
    width: 70%;
    height:8vh;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px)  and (max-height:668px) { /*iPhone 6/7/8 */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    margin-left: 15%;
}
li {
    width: 84%;
    height:5vh;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    float:left;
    width:50%;
}
.seriesDiv {
    overflow: hidden;
    width:50%;
}
ul {
    margin-left: 1%;;
    width: 92%;
}
li {
    width: 100%;
    height:7vh;
    line-height: 2px;
}
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv h5 {
    font-size: 1rem;
}
.seriesDiv h5 {
    font-size: 1rem;
}
li {
    height:5vh;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 100%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width:100%;
    overflow: none;
}
li {
    width: 50%;
    height:7vh;
    margin-left: 25%;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 100%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width:100%;
    overflow: none;
}
li {
    height:5vh;
}
}
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px)  { /*iPhone X rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 100%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width:100%;
    overflow: none;
}
ul {
    margin-left: 28%;
    padding-bottom: 5%;
}
li {
    height:5vh;
    width: 60%;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.hobbyDiv {
    padding-bottom:38vh;
}
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
h5 {
    font-size: 1.1rem;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 90%;
    overflow: hidden;
}
.seriesDiv {
    width:90%;
    float: left;
    overflow: hidden;
}
ul {
    margin-left: 15%;
    padding-bottom: 5%;
}
li {
    height:3vh;
    line-height: 0px;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.hobbyDiv {
    padding-bottom:70vh;
}
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 50%;
    float:left;
}
.seriesDiv {
    width: 50%;
    float: left;
    overflow: hidden;
}
li {
    width: 80%;
    height:5vh;
    margin-left: 14%;
    line-height: 0px;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.hobbyDiv {
    padding-bottom: 38vh;
}
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 86%;
    overflow: hidden;
}
.seriesDiv {
    width: 86%;
    float: left;
    overflow: hidden;
}
li {
    width: 80%;
    margin-left: 18%;
    height:3vh;
    line-height: 0px;
}
}
@media all and (min-width: 823px) and (max-width: 824px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 44%;
    margin-left:10%;
    float: left;
}
.seriesDiv {
    width: 44%;
    overflow: hidden;
}
li {
    height:6vh;
    line-height: 0px;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px)  { /*Surface Duo*/
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 90%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width: 90%;
    overflow: none;
}
ul {
    margin-left: 14%;
}
li {
    height:5vh;
    line-height: 0px;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
.moviesDiv {
    width: 50%;
    float:left;
}
.seriesDiv {
    width: 50%;
    overflow: hidden;
}
li {
    height:auto;
    padding:0;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.hobbyHeader {
    font-size: 2rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1.8rem;
}
h5 {
    font-size: 1.7rem;
}
.moviesDiv {
    width: 50%;
    float:left;
}
.seriesDiv {
    width: 50%;
    overflow: hidden;
}
li {
    width: 100%;
    height:5vh;
}
li p {
    font-size: 1.2rem;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.hobbyHeader {
    font-size: 1.6rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1.4rem;
}
h5 {
    font-size: 1.4rem;
}
.moviesDiv {
    width: 50%;
    float:left;
}
.seriesDiv {
    width: 50%;
    overflow: hidden;
}
ul {
    margin-left: 10%;
}
li {
    height:5vh;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.hobbyHeader {
    font-size: 2rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1.8rem;
}
h5 {
    font-size: 1.7rem;
}
.moviesDiv {
    width: 50%;
    float:left;
}
.seriesDiv {
    width:50%;
    overflow: hidden;
}
ul {
    margin-left: 14%;
}
li {
    width:100%;
    line-height: 0px;
}
li p {
    font-size: 1.5rem;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro rotated */
.hobbyHeader {
    font-size: 2rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1.8rem;
}
h5 {
    font-size: 1.7rem;
}
.moviesDiv {
    width: 50%;
    float:left;
}
.seriesDiv {
    width:50%;
    overflow: hidden;
}
ul {
    margin-left: 10%;
}
li {
    line-height: 0px;
}
}
</style>