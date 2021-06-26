<template>
    <div id="learningScrollpoint" class="hobbyDiv">
        <img class="hobbyImg" src="./assets/knowl.png" alt="">
        <div class="hobbyTextDiv">
            <p>I love learning about various things. It is a something that will never seize to offer you something new.
            </p>
            <div><p>Some of the things I love.</p>
                <table>
                    <thead>
                        <th class="fieldTh">Field</th>
                        <th class="whyTh">Why?</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Science</td>
                            <td>Everything that we know about how our world functions? I can´t imagine how it can´t be interesting :)</td>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td>Languages are guttural noise changed through our throats and fine tuned with our tongues
                                to create specific sounds that we use to understand each other. <br/><br/>Every language has evolved with time,
                                it is quite amazing.
                            </td>
                        </tr>
                        <tr>
                            <td>Culture</td>
                            <td>All over the world the different cultures has lead to different behaviour, choices, building styles, art
                                and which side of the road we drive our cars.
                            </td>
                        </tr>
                        <tr>
                            <td>History</td>
                            <td>"History teaches us nothing.", it should and if we truly embrace history, it can teach us so much and lead to
                                us making better choices and create a better world together.
                            </td>
                        </tr>
                        <tr>
                            <td>The IT world</td>
                            <td>How amazing is it that only 100 years ago the only way we could imagine contacting friends in other countries was
                                to send a piece of paper with a person and wait a couple of months for a reply?
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Remember, it is ok to be a little bit crazy.</p>
            </div>
    </div>
</template>

<script>
export default {
    name: "Learning",
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
@media all and (min-width: 1px) and (min-height:1px) {
    .fieldTh {
        width: 30%;
    }
    .whyTh {
        width: 70%;
    }
    th {
        background-color:#ebffc7;
        padding: 1vh;
        border:solid;
        border-width: 1px;
        border-color: rgb(158, 166, 238);
    }
    tr:nth-child(even) {
    background-color:#f1fff0;
    }
    tr:nth-child(odd) {
    background-color:#dceeda;
    }
    td {
        padding: 1vh;
        padding-left: 2vw;
        padding-right: 2vw;
        border:solid;
        border-width: 1px;
        border-color: rgb(158, 166, 238);
    }
.hobbyDiv {
    width: 95%;
    margin-left: 2%;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(254, 255, 211), rgb(255, 255, 255));
}
.hobbyImg {
    height: 20vh;
}
}
@media all and (min-width: 300px) and (min-height:1px) {
    .hobbyDiv {
    width: 90%;
    margin-left: 3%;

    }
}
@media all and (min-width: 340px) and (min-height:1px) {
    .hobbyDiv {
    width: 85%;
    margin-left: 5%;

    }
}
@media all and (min-width: 400px) and (min-height:1px) {
    .hobbyDiv {
    width: 80%;
    margin-left: 8%;

    }
}
@media all and (min-width: 500px) and (min-height:1px) {
    .hobbyDiv {
    width: 70%;
    margin-left: 12%;

    }
}
@media all and (min-width: 600px) and (min-height:1px) {
    .hobbyDiv {
    width: 60%;
    margin-left: 15%;

    }
}
@media all and (min-width: 800px) and (min-height:1px) {
    .hobbyDiv {
    width: 65%;
    margin-left: 15%;

    }
}
@media all and (min-width: 1100px) and (min-height:1px) {
    .hobbyDiv {
    width: 55%;
    margin-left: 18%;

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
ul {
    margin-left: 20%;
}
    li {
    width:60%;
    }
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    margin-left: 26%;
}
li {
    width:45%;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /* iPhone 5/SE*/
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width: 80%;
    margin-left: 20%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:4vh;
    width: 80%;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /* iPhone 5/SE rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width: 45%;
    margin-left: 26%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:6vh;
    width: 96%;
    line-height: 0px;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width: 56%;
    margin-left: 22%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:4vh;
    width: 96%;
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
    width: 80%;
    margin-left: 26%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:5vh;
    width: 56%;
    line-height: 0px;
}
p {
    font-size: .8rem;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px) and (max-height:668px) { /* iPhone 6/7/8 */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width: 85%;
    margin-left: 22%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:4vh;
    width: 66%;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px) and (max-height:376px) { /* iPhone 6/7/8 rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width: 45%;
    margin-left: 30%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:5vh;
    width: 80%;
    line-height: 0px;
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
ul {
    width: 45%;
    margin-left: 27.5%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:4vh;
    width: 96%;
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
ul {
    width: 45%;
    margin-left: 30%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:5vh;
    width: 96%;
    line-height: 0px;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px) { /* iPhone X*/
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width: 90%;
    margin-left: 18%;
    padding-top: 6vw;
}
li {
    height:4vh;
    width: 70%;
}
}
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px) { /* iPhone X rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width: 45%;
    margin-left: 30%;
    margin:none;
    padding-top: 6vw;
}
li {
    height:7vh;
    width: 96%;
    line-height: 0px;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width:80%;
    margin-left: 24%;
    margin:none;
}
li {
    height:3vh;
    width:60%;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width:60%;
    margin-left: 18%;
    margin:none;
}
li {
    height:5vh;
    line-height: 0px;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
ul {
    width:80%;
    margin-left: 22%;
    margin:none;
}
li {
    width:70%;
    height:4vh;
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
ul {
    width:80%;
    margin-left: 32%;
}
li {
    width:50%;
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
ul {
    width: 80%;
    margin-left: 10%;
}
li {
    width:70%;
    margin-left: 12%;
    height:4vh;
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
ul {
    margin-left: 36%;
    width: 45%;
}
li {
    height:4vh;
    line-height: 0px;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
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
ul {
    margin-left: 34%;
    width: 42%;
}
li {
    height:5vh;
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
ul {
    margin-left: 36%;
    width: 37%;
}
li {
    height:6vh;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1367px) { /* iPad Pro */
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
ul {
    margin-left: 22%;
    width:46%;
}
li {
    width: 100%;
    height:4vh;
    margin-left: 10%;
}
}
@media all and (min-width: 1366px) and (max-width: 1367px) and (min-height: 1024px) and (max-height: 1025px) { /* iPad Pro rotated */
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
ul {
    margin-left: 36%;
    width:50%;
}
li {
    width:60%;
    height:4vh;
    margin-left: 4%;
}
}
</style>