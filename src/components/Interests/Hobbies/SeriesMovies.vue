<template>
    <div id="movserScrollpoint" class="hobbyDiv">
        <img class="hobbyImg" src="./assets/movie.png" alt="">
        <div class="hobbyTextDiv">
            <p>I like series and movies, they just take you to another place for a while and I especially enjoy movies that make you think and leaves you with a feeling of wonder afterwards.
            </p>
            <p>
                Or just something that gives you a good laugh.
            </p>
            </div>
            <div><p>Examples of movies and Series that I enjoyed, for a quick feel of who I am</p></div>
                <div class="moviesDiv">
                    <h5>Movies</h5>
                    <ul>
                        <li><p>K-Pax</p></li>
                        <li><p>The man from earth</p></li>
                        <li><p>Deadpool</p></li>
                        <li><p>Good will hunting</p></li>
                        <li><p>Lord of the rings</p></li>
                    </ul>
                </div>
                <div class="seriesDiv">
                    <h5>Series</h5>
                    <ul>
                        <li><p>Fringe</p></li>
                        <li><p>Futurama</p></li>
                        <li><p>Game of thrones</p></li>
                        <li><p>Stargate</p></li>
                        <li><p>House M.D</p></li>
                    </ul>
                </div>
                <div class="clearer"></div>
    </div>
</template>

<script>

export default {
    name: "SeriesMovies",
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
h5 {
    width: 45%;
    margin-left: 30%;
    font-size: 1.3rem;
    color:darkcyan;
    border-bottom: solid;
    border-color: blueviolet;
    border-width: 1px;
    text-align: left;
}
@media all and (min-width: 1px) and (min-height:1px) {
.hobbyDiv {
    margin-left: 5%;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(231, 216, 231), rgb(255, 255, 255));
}
.hobbyImg {
    height: 20vh;
}
ul {
    width: 80%;
    margin-left:10%;
    height: auto;
    padding:0;
    list-style: none;
    text-align: left;
    }
li {
    width: 100%;
    margin-bottom:6px;
    margin-left: 20%;
    padding: 4px;
    padding-left: 0;
    font-weight: 600;
    line-height: 1px;
    text-align: left;
    background: linear-gradient(to right, rgb(244, 209, 255), transparent, transparent);
}
li p {
    margin-left: 4%;
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
@media all and (min-width: 1000px) and (min-height:1px) {
    .moviesDiv {
        width: 50%;
        float:left;
    }
    .seriesDiv {
        width: 50%;
        overflow:hidden;
    }
    ul {
        width: 100%;
    }
}
</style>