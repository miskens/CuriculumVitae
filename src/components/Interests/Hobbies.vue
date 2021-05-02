<template>
<div class="HobbiesDiv">
    <div>
    </div>
    <!-- <Button class="btn" text="the button" color="turquoise" @click="onClick"/> -->
    <DiscGolf />
  </div>
</template>

<script>
import Button from "../Shared/Button"
import DiscGolf from "../Interests/DiscGolf"

export default {
    inheritAttrs: false,
    name: "Hobbies",
    props:{},
    components: {
        Button,
        DiscGolf
    },
    methods: {
        onClick() {
            console.log("clicked")
        }
    },
    data(){return {}}
}
</script>

<style scoped>
.HobbiesDiv {
    width: 50vw;
    padding: 2vw 2vw 2vw 2vw;
}
.btn {
    margin-top: 5vh;
    float: right;
}
</style>