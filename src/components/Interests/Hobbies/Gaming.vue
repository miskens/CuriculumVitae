<template>
    <div class="hobbyDiv"> 
        <h2 class="hobbyheader">Gaming</h2>
        <div class="secHobbyDiv>">
            <p>I play different team games online. When I was younger I would enjoy playing by myself or with just a friend, and
                I enjoyed it but by chance I was introduced to team playing and I loved the fact that you need to try win(or accopmplish
                things) together as a group of players.

            </p>
            <p>
                I play online with friends around the world, specifically England, Brazil, Canada and Taiwan, but I have played with
                people in almost all countries in the world through the years.
            </p>
            <p>
                In 2001-2002 I started a clan that through a lot of practice became the nr.1 clan in the world in a mod of a game
                called Quake 3 Arena.
            </p>
            <p>
                In 2006-2010 I was the leader of a very successful guild of 80+ players in World of warcraft.
                Nowadays it is just a leisure hobby that I do when I find the time and also as stress relief.
            </p>
            <p>Be crazy online!</p>
        </div>
    </div>
  <!-- <VideoEmbed /> -->
</template>

<script>
// import VideoEmbed from "../Shared/VideoEmbed"

export default {
    name: "Gaming",
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
    resize: both;
    padding: 2vh 3vw 1vh;
    margin: 3vh 5vw;
    margin-bottom: 4vh;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(223, 220, 255), rgb(255, 255, 255));
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
p {
    font-weight: 500;
    font-size: medium;
}
@media all and (max-width: 280px)  and (min-height:653px)  and (max-height:654px){ /*Galaxy fold */
    .hobbyheader {
        padding-bottom: 1vh;
        margin-bottom: 0vh;
    }
    p {
    font-size: .9rem;
}
}
@media all and (min-width: 320px) and (min-height:570px) and (max-height:571px) { /*iPhone 5/SE*/
p {
    font-weight: 300;
    font-size: smaller;
}
}
@media all and (min-width: 360px) and (min-height:640px) and (max-height:641px)  { /*Moto 4 & Galaxy S5 */
p {
    font-size: .8rem;
}
}
@media all and (min-width: 640px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
p {
    font-size: .8rem;
}
}
@media all and (min-width: 375px) and (max-height:669px)  { /*iPhone 6/7/8 */
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px) { /* iPhone X*/
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 812px) and (min-height:375px) and (max-height:376px) { /* iPhone X*/
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 823px) and (min-height:411px) and (max-height:412px) { /* Pixel 2 XL rotated */
.hobbyDiv {
    margin-left:8%;
}
}
@media all and (min-width: 540px) and (min-height:720px)  and (max-height:721px)  { /*Surface Duo*/
p {
    font-size: 1rem;
}
}
@media all and (min-width: 720px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
p {
    font-size: 1rem;
}
}
@media all and (min-width: 768px) and (max-height: 1024px) /*iPad*/ {
    p {
    font-weight: 500;
    font-size: large;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
p {
    font-weight: 500;
    font-size: 1.3rem;
}
}
@media all and (min-width: 1024px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.hobbyDiv {
    margin-left:10%;
}
.hobbyheader {
    font-size: 1.8rem;
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