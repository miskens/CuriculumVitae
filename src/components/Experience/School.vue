<template>
      <h2>{{school.Name}} <img alt="pic" :src="school.Picture" /></h2>
      <h3>{{school.Course}}</h3>
      <p>{{school.When}}</p>
        <button class="descMinMaxBtn" @click="showHideDesc"><span>More</span></button>
      <transition-group  name="descTransition" mode="out-in" >
        <p v-if="!descHidden">{{school.Desc}}</p>
      </transition-group>
</template>

<script>
export default {
    inheritAttrs: false,
    name: 'School',
    props: {
        school: Object,
        src: String
    },
    data() {
        return {
            descHidden: true
        }
    },
    methods: {
        async showHideDesc() {
            this.descHidden = !this.descHidden
        }
    }
}
</script>

<style scoped>
.schoolDiv h2 {
    padding-bottom: 2vh;
}
.schoolDiv h3 {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.schoolDiv p {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.descMinMaxBtn {
    position: relative;
    width: 120px;
    background-image:linear-gradient(to right, rgb(245, 245, 245), rgb(224, 224, 224), rgb(245, 245, 245));
    padding: 10px 20px;
    left: 12vw;
    right:0vw;
    border-radius: 5px;
    box-shadow: 3px 3px 4px;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;
    transition: ease-in-out, 0.1s;
}
.descMinMaxBtn:hover {
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.descMinMaxBtn:active {
    box-shadow: 1px 1px 1px;
    margin-right:-6px;
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.descTransition-enter-active, .descTransition-leave-active {
    transition: opacity 1s ease-in-out;
}
.descTransition-enter-from, .descTransition-leave-to {
    opacity: 0;
    transition-duration: .3s;
}
.descTransition-leave-from, .descTransition-enter-to {
    opacity: 1;
    transition-duration: 1s;
}
img{
    height: 80px;
    width: auto;
    float:right;
    border-style: solid;
    border-radius: 10%;
    border-width: 1px;
    border-color:mediumturquoise;
    cursor:pointer;
}
</style>