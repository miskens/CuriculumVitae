<template>
    <div class="hobbyDiv">
        <h2 class="hobbyHeader">A Series and Movies thing</h2>
            <p>I like series and movies, they just take you to another place for a while.
            </p>
            <p>
                I especially enjoy movies that make you think and leaves you with a feeling of wonder afterwards.
            </p>
            <p>
                Or just something that gives you a good laugh.
            </p>
            <div>Examples of movies and Series that I enjoyed, for a quick feel of who I am</div>
                <div class="moviesDiv">
                    <h4>Movies</h4>
                    <ul>
                        <li>K-Pax</li>
                        <li>The man from earth</li>
                        <li>Dumb and dumber</li>
                        <li>Good will hunting</li>
                        <li>Lord of the rings</li>
                    </ul>
                </div>
                <div class="seriesDiv">
                    <h4>Series</h4>
                    <ul>
                        <li>Fringe</li>
                        <li>Futurama</li>
                        <li>Game of thrones</li>
                        <li>Stargate</li>
                        <li>House M.D</li>
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
    margin: 5px;
    padding-bottom: 2vh;
    margin-bottom: 5vh;
    border: 0;
    border-bottom: solid 2px green;
}
.hobbyDiv {
    resize: both;
    padding: 2vh 3vw 1vh;
    margin: 3vh 5vw;
    margin-bottom: 4vh;
    height: auto;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(255, 214, 237), rgb(255, 255, 255));
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
@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
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
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:auto;
    line-height: 22px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
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
    margin:none;
    padding:0;
    list-style: none;
}
li {
    height:auto;
    line-height: 22px;
    border: solid;
    border-color: blueviolet;
    border-width: 1px;
}
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
}
@media all and (min-width: 540px) { /*Surface Duo*/
ul {
    width: 38%;
}
}
@media all and (min-width: 768px) { /*iPad*/
ul {
    width: 37%;
}
}
@media all and (min-width: 1024px) { /*iPad Pro*/
ul {
    width: 36%;
}
}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
ul {
    width: 45%;
}
}
@media all and (min-width: 1256px) { /*Smaller laptop screens*/
ul {
    width: 43%;
}
}
@media all and (min-width: 1496px) { /*smaller-medium laptop screens*/
ul {
    width: 41%;
}
}
@media all and (min-width: 1660px) { /*medium laptop screens*/
ul {
    width: 39%;
}
}
@media all and (min-width: 18240px) { /*medium-larger laptop screens*/
ul {
    width: 37;
}
}
@media all and (min-width: 1996px) { /*larger laptop screens*/
ul {
    width:35%;
}
}
</style>