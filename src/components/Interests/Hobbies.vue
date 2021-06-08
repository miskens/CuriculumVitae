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
    props:{},
    components: {
        DiscGolf,
        Gaming,
        SeriesMovies,
        Learning
    },
    methods: {
    },
    data(){return {}}
}
</script>

<style>
.HobbiesDiv {
    width: 100%;
    float:left;
    padding-top: 4vh;
    padding-bottom: 4vh;
}
.hobbyBtn {
    margin-top: 5vh;
    float: right;
}
@media all and (max-width: 280px)  and (max-height:654px){ /*Galaxy fold: maxwidth due to interference towards higher*/
.HobbiesDiv {
    padding-top: 4vh;
}
}
@media all and (min-width: 400px) and (min-height:900px) { /* For smaller window than smallest laptop screens */
.HobbiesDiv {
    width: 100%;
    float:left;
    padding-top: 4vh;
    padding-bottom: 4vh;
}
}
</style>