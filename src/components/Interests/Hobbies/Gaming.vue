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
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(223, 220, 255), rgb(255, 255, 255));
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
p {
    font-weight: 500;
    font-size: medium;
}
</style>