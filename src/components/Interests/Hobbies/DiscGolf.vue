<template>
    <div class="hobbyDiv">
        <h2 class="hobbyHeader">Discgolf</h2>
        <img src="" alt="">
        <div class="hobbyTextDiv>">
            <p>Meet your friends, get a long nice walk in the nature, especially in the bushes, searching for your discs,
            practicing a fun skill and getting to throw stuff in high speed.
            </p>
            <p>
            What is there not to like?
            </p>
            <p>It is a very fun leisure hobby, if you like it, you love it.</p>
        </div>
    </div>
  <!-- <VideoEmbed /> -->
</template>

<script>
// import VideoEmbed from "../Shared/VideoEmbed"

export default {
    name: "DiscGolf",
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
@media all and (min-width: 1px) and (min-height:1px) {
.hobbyDiv {
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(222, 231, 216), rgb(255, 255, 255));
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
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px) { /* Galaxy fold rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height: 568) and (max-height: 569px) { /*iPhone 5/SE */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 568px) and (min-height:320px)  and (max-height:321px) { /*iPhone 5/SE rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
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
}
@media all and (min-width: 667px)and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
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
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
}
}
@media all and (min-width: 823px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
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
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.hobbyHeader {
    font-size: 1rem;
    padding-bottom: 4vh;
}
p {
    font-size: 1rem;
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
}
</style>