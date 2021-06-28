<template>
  <img class="thePic" :id="id" @click="$emit('img-click')" :alt="alt" :src="src" />
</template>

<script>
export default {
    name: "Picture",
    components: { 
    },
    props: {
        id: String,
        src: String,
        alt: String,
    },
    methods: {
    }
}
</script>
<style scoped>
.thePic {
    height: 220px;
    width: auto;
    border-style: solid;
    border-width: 5px;
    border-color:rgb(126, 170, 126);
    border-radius: 50%;
    margin-bottom: 1rem;
    image-orientation: from-image;
    caret-color: transparent;
}:hover {
    opacity: 0.92;
    cursor: pointer;
    }
</style>>
