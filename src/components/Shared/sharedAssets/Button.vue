<template>
  <button :style="{background:color, width:width, height:height}">
      {{text}}
  </button>
</template>

<script>
export default {
    name: "Button",
    props:{
        text: String,
        color: String,
        width: {
            type: String,
            default: "12vw"
        },
        height: {
            type: String,
            default: "3vw"
        }
    },
    components: {
    },
    data(){
        return {

        }
    }
}
</script>

<style>

</style>