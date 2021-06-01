<template>
    <div class="hobbyDiv"> 
        <h1 class="hobbyheader">Dungeons & Dragons</h1>
        <div class="secHobbyDiv>">
            <h4>I play online with friends around the world, specifically England, Brazil, Canada and Taiwan.
            </h4>
            <h4>
                Use your imagination, experience a world with magic, politics, weird creatures and people.
            </h4>
            <h4>
                Go on an adventure together with friends and explore a world that always offers new experiences and have more
                laughs than you would imagine.
            </h4>
            <p>Be crazy online!</p>
        </div>
    </div>
  <!-- <VideoEmbed /> -->
</template>

<script>
// import VideoEmbed from "../Shared/VideoEmbed"

export default {
    name: "DnD",
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
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(222, 231, 216), rgb(255, 255, 255));
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
</style>