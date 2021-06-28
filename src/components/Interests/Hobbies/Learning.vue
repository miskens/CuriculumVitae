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
    margin-left: 5%;
    background-image:linear-gradient(to right, rgb(255, 255, 255), rgb(254, 255, 211), rgb(255, 255, 255));
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