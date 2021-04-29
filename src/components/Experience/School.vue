<template>
      <h2>{{school.Name}}</h2>
      <h3>{{school.Course}}</h3>
      <p>{{school.When}}</p>
      <p>{{school.Desc}}</p>
</template>

<script>
export default {
    name: 'School',
    props: {
        school: Object
    }
}
</script>

<style>

.schoolDiv h2 {
    padding-bottom: 2vh;
     /* border:0;
     border-color:cadetblue;
     border-style: solid;
     border-bottom-width: 2px; */
    
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