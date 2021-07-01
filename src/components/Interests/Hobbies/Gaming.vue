<template>
    <div id="gamingScrollpoint" class="hobbyDiv"> 
        <img class="hobbyImg" src=".//assets/dice.png" alt="">
        <div class="hobbyTextDiv>">
            <p>I´ve played many different team games online. When I was younger I would enjoy playing by myself or with just a friend, and
                I enjoyed it but by chance I was introduced to team playing and I loved the fact that you need to accomplish
                things together.
            </p>
            <p>
                I play online with friends all around the world. I have played with people in most countries in the world through the years.
            </p>
            <p>
                In 2001 I started a multinational clan that through a lot of practice became the nr.1 clan in the world in a mod of a game
                called Quake 3 Arena.
            </p>
            <p>
                In 2006-2010 I was the leader of a very successful European guild of 80+ players in World of warcraft. We were players
                from about 10 different countries in Europe.
            </p>
            <p>Nowadays gaming is just a leisure hobby that I do when I find the time.</p>
            <p>
                I also play roleplaying tabletop games with friends around the world each week. 
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Gaming",
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
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(216, 218, 231), rgb(255, 255, 255));
}
.hobbyImg {
    height: 20vh;
    max-width: 80%;
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