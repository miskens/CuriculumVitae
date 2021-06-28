<template>
<div class="HobbiesDiv">
    <DiscGolf />
    <Gaming/>
    <SeriesMovies />
    <Learning />
</div>

</template>

<script>
import DiscGolf from "../Interests/Hobbies/DiscGolf"
import Gaming from "../Interests/Hobbies/Gaming"
import SeriesMovies from "../Interests/Hobbies/SeriesMovies"
import Learning from "../Interests/Hobbies/Learning"

export default {
    inheritAttrs: false,
    name: "Hobbies",
    props:{
    },
    components: {
        DiscGolf,
        Gaming,
        SeriesMovies,
        Learning,
    },
    methods: {
    },
    data(){return {}}
}
</script>

<style>
@media all and (min-width: 1px) and (min-height:1px) {
.HobbiesDiv {
    width: 100%;
    float:left;
    padding-top: 4vh;
    padding-bottom: 4vh;
}
.hobbyDiv {
    resize: both;
    padding: 10vh 3vw 1vh;
    margin-bottom: 4vh;
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189); 
}
.hobbyHeader {
    font-size: 1.2rem;
    margin: 5px;
    padding-top: 2vh;
    padding-bottom: 2vh;
    margin-bottom: 5vh;
    border: 0;
    border-bottom: solid 2px green;
}
ul {
    width: 30vw;
    list-style: none;
    
}
li {
    width:90%;
    margin-bottom:6px;
    padding: 4px;
    padding-left: 0;
    font-weight: 600;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: 1rem;
}
}
</style>