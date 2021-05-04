<template>
    <div class="hobbyDiv">
        <h1 class="hobbyheader">Learning</h1>
            <h4>Kind of a weird thing to add to your CV, I know. The world is a very interesting place, so learning a bit of
                everything around us is just fun.
            </h4>
            <h4>
                I guess I just love learning about various things, and it is a hobby that will never seize to offer you something new.
            </h4>
            <p>Some of the things I love(even if there´s never enough time to learn enough):
                <ul>
                    <li>Behavioral science</li>
                    <li>Quantum Theory</li>
                    <li>Graphical design/editing</li>
                    <li>Languages</li>
                    <li>Cultures</li>
                    <li>History</li>
                    <li>The IT world</li>
                </ul>
            </p>
    </div>
  <!-- <VideoEmbed /> -->
</template>

<script>
// import VideoEmbed from "../Shared/VideoEmbed"

export default {
    name: "Learning",
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
ul {
    width: 30vw;
    margin:auto;
    list-style: none;
    
}
li {
    background-color: rgb(231, 231, 231);
    width: 20vw;
    margin-bottom:6px;
    padding: 4px;
    padding-left: 0;
    font-weight: 600;
}
</style>