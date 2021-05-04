<template>
    <div class="hobbyDiv">
        <h1 class="hobbyHeader">A Series and Movies thing</h1>
            <h4>I like series and movies, they just take you to another place for a while.
            </h4>
            <h4>
                I especially enjoy movies that make you think and leaves you with a feeling of wonder afterwards.
                </h4>
            <h4>
                Or just something that gives you a good laugh.
            </h4>
            <p>Examples of movies and Series that I enjoyed, for a quick feel of who I am</p>
                <div class="moviesDiv">
                    <h4>Movies</h4>
                    <ul>
                        <li>K-Pax</li>
                        <li>The man from earth</li>
                        <li>The Exam</li>
                        <li>Dumb and dumber</li>
                        <li>Seven</li>
                        <li>Good will hunting</li>
                        <li>Lord of the rings</li>
                    </ul>
                </div>
                <div class="seriesDiv">
                    <h4>Series</h4>
                    <ul>
                        <li>Fringe</li>
                        <li>Futurama</li>
                        <li>Blacklist</li>
                        <li>Californication</li>
                        <li>Game of thrones</li>
                        <li>Stargate</li>
                        <li>House M.D</li>
                    </ul>
                </div>
                <div class="clearer"></div>
    </div>
  <!-- <VideoEmbed /> -->
</template>

<script>
// import VideoEmbed from "../Shared/VideoEmbed"

export default {
    name: "SeriesMovies",
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
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(222, 231, 216), rgb(255, 255, 255));
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
ul {
    width: 30vw;
    margin:auto;
    list-style: none;
}
li {
    width: 14vw;
    height: 4vh;
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
</style>