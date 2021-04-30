<template>
      <h2>{{school.Name}} <img alt="pic" :src="school.Picture" /></h2>
      <h3>{{school.Course}}</h3>
      <p>{{school.When}}</p>
      <p>{{school.Desc}}</p>
</template>

<script>
export default {
    name: 'School',
    props: {
        school: Object,
        src: String,
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