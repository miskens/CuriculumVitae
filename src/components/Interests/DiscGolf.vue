<template>
    <div class="hobbyDiv">
        <h2 class="hobbyheader">Discgolf</h2>
        <img src="" alt="">
        <div class="leftHobbyDiv>">
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

<style>
.hobbyDiv {
    resize: both;
    padding: 2vh 3vw 1vh;
    margin: 3vh 5vw;
    margin-bottom: 4vh;
    height: auto;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(222, 231, 216), rgb(255, 255, 255));
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
.hobbyheader {
    margin: 5px;
    padding-top: 2vh;
    padding-bottom: 2vh;
    margin-bottom: 5vh;
    border: 0;
    border-bottom: solid 2px green;
}
p {
    font-weight: 500;
    font-size: medium;
}
@media all and (min-width: 768px) /*iPad*/ {
    p {
    font-weight: 500;
    font-size: large;
}
}
</style>