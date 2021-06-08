<template>
    <div class="hobbyDiv">
        <h2 class="hobbyheader">A Series and Movies thing</h2>
            <p>I like series and movies, they just take you to another place for a while.
            </p>
            <p>
                I especially enjoy movies that make you think and leaves you with a feeling of wonder afterwards.
            </p>
            <p>
                Or just something that gives you a good laugh.
            </p>
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
.hobbyHeader {
    font-size: 1rem;
    margin: 5px;
    padding-bottom: 2vh;
    margin-bottom: 5vh;
    border: 0;
    border-bottom: solid 2px green;
}
.hobbyDiv {
    width: 80%;
    resize: both;
    padding: 2vh 3vw 1vh;
    margin: 3vh 5vw;
    margin-bottom: 4vh;
    height: auto;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(255, 235, 213), rgb(255, 255, 255));
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
.moviesDiv {
    height:auto;
    width: 20vw;
    float:left;
    overflow: hidden;
}
.seriesDiv {
    height:auto;
    width:auto;
    overflow: hidden;
}
p {
    font-weight: 500;
    font-size: medium;
}
ul {
    display:block;
    width: 45%;
    margin:auto;
    list-style: none;
}
li {
    height: 4vh;
    width:100%;
    margin-bottom: 4px;
    line-height:35px;
    background-color:rgba(183, 217, 255, .3);
    transition: all .2s;
}
.clearer {
    height:0;
    width:0;
    clear: both;
}
h5 {
    font-size: .8rem;
}
@media all and (min-width: 280px) and (min-height:653px) and (max-height:654px) { /* Galaxy fold */
.hobbyheader {
    padding-bottom: 1vh;
    margin-bottom: 0vh;
    }
    p {
    font-weight: 300;
    font-size: x-small;
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
    width: 97%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    width:60%;
    margin-left: 20%;
    height:3vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px) { /* Galaxy fold rotated */
.hobbyheader {
    padding-bottom: 1vh;
    margin-bottom: 0vh;
    }
    p {
    font-size: .9rem;
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
    width: 97%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    width:45%;
    margin-left: 26%;
    height:8vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 320px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
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
    width:70%;
    margin-left: 15%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:5vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 568px) and (min-height:320px)  and (max-height:321px) { /*iPhone 5/SE rotated */
.hobbyDiv {
    width: 80%;
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
    width:70%;
    margin-left: 15%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:9vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 360px) and (min-height:640px)  and (max-height:641px) { /*Moto 4 & Galaxy S5 */
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
    width:60%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:5vh;
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
    width:46%;
    margin-left: 26%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:8vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-size: .8rem;
}
}
@media all and (min-width: 375px) and (min-height:667px)  and (max-height:668px) { /*iPhone 6/7/8 */
.hobbyDiv {
    margin-left:8%;
    width:78%; 
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
    width:60%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:5vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 667px)and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
.hobbyDiv {
    margin-left:8%;
    width:78%; 
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
    width:60%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:7vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.hobbyDiv {
    margin-left:8%;
    width:80%; 
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
    width:60%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:5vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.hobbyDiv {
    margin-left:8%;
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
    width:70%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:5vh;
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
.moviesDiv {
    width: 44%;
    overflow: hidden;
}
.seriesDiv {
    width: 44%;
    float: left;
    overflow: hidden;
}
ul {
    width:80%;
    /* margin-left: 20%; */
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
.moviesDiv {
    width: 44%;
    overflow: hidden;
}
.seriesDiv {
    width: 44%;
    float: left;
    overflow: hidden;
}
ul {
    width:80%;
    /* margin-left: 20%; */
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
@media all and (min-width: 823px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.hobbyDiv {
    margin-left:8%;
}
.moviesDiv {
    width: 44%;
    overflow: hidden;
}
.seriesDiv {
    width: 44%;
    float: left;
    overflow: hidden;
}
ul {
    width:80%;
    /* margin-left: 20%; */
    margin:none;
    padding:0;
    list-style: none;
}
h5 {
    font-size: 1rem;
}
li {
    height:6vh;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
.hobbyheader {
    font-size: 1.3rem;
    }
.moviesDiv {
    width: 100%;
    float:left;
    overflow: none;
}
.moviesDiv h5 {
    font-size: 1rem;
}
.seriesDiv {
    width:100%;
    overflow: none;
}
.seriesDiv h5 {
    font-size: 1rem;
}
ul {
    width:60%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:5vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.hobbyDiv {
    margin-left:8%;
    width:80%; 
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
    width:60%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:7vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /*Pixel 2 XL*/ 
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
    width:60%;
    margin-left: 20%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:5vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 540px)and (min-height:720px) and (max-height:721px)  { /*Surface Duo*/
.moviesDiv {
    width: 90%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width: 90%;
    overflow: none;
}
h5 {
    font-size: 1.2rem;
}
ul {
    width: 80%;
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
@media all and (min-width: 720px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.moviesDiv {
    width: 50%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width: 50%;
    overflow: none;
}
.hobbyheader {
    font-size: 1rem;
}
h5 {
    font-size: 1.2rem;
}
p {
    font-size: 1rem;
}
ul {
    width: 75%;
}
li {
    height:5vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
li p {
    font-size: 1rem;
}
}
@media all and (min-width: 768px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.moviesDiv {
    width: 50%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width: 50%;
    overflow: none;
}
h5 {
    font-size: 1.6rem;
}
ul {
    width: 80%;
}
li {
    height:5vh;
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
.moviesDiv {
    width: 50%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width: 50%;
    overflow: none;
}
h5 {
    font-size: 1.2rem;
}
p {
    font-size: 1.3rem;
}
ul {
    width: 75%;
}
li {
    height:5vh;
    line-height: 1px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
li p {
    font-size: 1.4rem;
}
}
@media all and (min-width: 1024px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.hobbyDiv {
    margin-left:10%;
    width:78%; 
}
.hobbyHeader {
    font-size: 1.8rem;
}
h5 {
    font-size: 1.8rem;
}
.moviesDiv {
    width: 50%;
    float:left;
    overflow: none;
}
.seriesDiv {
    width:50%;
    overflow: none;
}
ul {
    width:96%;
    margin-left: 0%;
    margin:none;
    padding:0;
    list-style: none;
}
li {
    margin: 2%;
    line-height: 0px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
p {
    font-size: 1.8rem;
}
}
@media all and (min-width: 1366px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad Pro*/
.hobbyDiv {
    margin-left:18%;
    width:60%;
}
}
@media all and (min-width: 400px) and (min-height:1368px) { /* For smaller window than smallest laptop screens */
.hobbyDiv {
    width: 90%;
    }
.hobbyHeader {
    font-size: 1.8rem;
}
h5 {
    font-size: 1.6rem;
}
.moviesDiv {
    height:auto;
    width: 100%;
}
.seriesDiv {
    height:auto;
    width:100%;
}
p {
    font-size: 1.8rem;
}
li {
    padding-top: .5vh;
    line-height: 3px;
}
}
@media all and (min-width: 1124px) and (min-height:1368px){ /*Smallest laptop screens*/
.hobbyDiv {
    width: 60%;
    }
    .hobbyHeader {
    font-size: 1.8rem;
}
h5 {
    font-size: 1.6rem;
}
.moviesDiv {
    height:auto;
    width: 50%;
}
.seriesDiv {
    height:auto;
    width:50%;
}
ul {
    width:80%;
}
li {
    height: 5vh;
    padding-top: .5vh;
}
}
</style>