<template>
    <div id="discgolfScrollpoint" class="hobbyDiv">
        <img class="hobbyImg" src="./assets/basket.png" alt="">
        <div class="hobbyTextDiv>">
            <p>Meet your friends, get a long nice walk in the nature, especially in the bushes, searching for your discs,
            practicing a fun skill and getting to throw stuff in high speed.
            </p>
            <p>
            What is there not to like?
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DiscGolf",
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
.hobbyDiv {
    margin-left: 5%;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(222, 231, 216), rgb(255, 255, 255));
}
.hobbyImg {
    height: 20vh;
}
}
@media all and (min-width: 600px) and (min-height:1px) {
.hobbyDiv {
    margin-left: 10%;
}
}
@media all and (min-width: 800px) and (min-height:1px) {
.hobbyDiv {
    margin-left: 18%;
}
}
</style>