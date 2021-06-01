<template>
    <div class="hobbyDiv">
        <h2 class="hobbyheader">Learning</h2>
            <p>Kind of a weird thing to add to your CV, I know. The world is a very interesting place, so learning a bit of
                everything around us is just fun.
            </p>
            <p>
                I guess I just love learning about various things, and it is a hobby that will never seize to offer you something new.
            </p>
            <div>Some of the things I love(even if there´s never enough time to learn enough):
                <ul>
                    <li>Science</li>
                    <li>Graphical design/editing</li>
                    <li>Languages</li>
                    <li>Cultures</li>
                    <li>History</li>
                    <li>The IT world</li>
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
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(255, 235, 213), rgb(255, 255, 255));
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
p {
    font-weight: 500;
    font-size: medium;
}
ul {
    width: 30vw;
    margin:auto;
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
    width: 100%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:auto;
    width: 96%;
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
    width: 45%;
    margin:none;
    padding:0;
    padding-top: 6vw;
    list-style: none;
}
li {
    height:auto;
    width: 96%;
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
    width: 35%;
}
}
@media all and (min-width: 1256px) { /*Smaller laptop screens*/
ul {
    width: 34%;
}
}
@media all and (min-width: 1496px) { /*smaller-medium laptop screens*/
ul {
    width: 33%;
}
}
@media all and (min-width: 1660px) { /*medium laptop screens*/
ul {
    width: 32%;
}
}
@media all and (min-width: 18240px) { /*medium-larger laptop screens*/
ul {
    width: 31%;
}
}
@media all and (min-width: 1996px) { /*larger laptop screens*/
ul {
    width: 30%;
}
}
</style>