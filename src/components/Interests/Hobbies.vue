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
    padding-bottom: 4vh;
}
.hobbyBtn {
    margin-top: 5vh;
    float: right;
}
@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
.HobbiesDiv {
    padding-top: 4vh;
}
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
}
@media all and (min-width: 540px) { /*Surface Duo*/
}
@media all and (min-width: 768px) { /*iPad*/
}
@media all and (min-width: 1024px) { /*iPad Pro*/
}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
}
@media all and (min-width: 1256px) { /*Smaller laptop screens*/
}
@media all and (min-width: 1496px) { /*smaller-medium laptop screens*/
}
@media all and (min-width: 1660px) { /*medium laptop screens*/
}
@media all and (min-width: 18240px) { /*medium-larger laptop screens*/
}
@media all and (min-width: 1996px) { /*larger laptop screens*/
}
</style>