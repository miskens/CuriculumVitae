<template>
<div class="HobbiesDiv">
    I got one of those..
  <Button class="btn" text="Secrets" color="turquoise" @click="onClick"/>
  </div>
</template>

<script>
import Button from "../Shared/Button"

export default {
    inheritAttrs: false,
    name: "Hobbies",
    props:{},
    components: {
        Button
    },
    methods: {
        onClick() {
            console.log("clicked")
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style>
.HobbiesDiv {
    width: 90vw;
    padding: 2vw 2vw 2vw 2vw;
}
.btn {
    margin-top: 5vh;
    float: right;
}
</style>