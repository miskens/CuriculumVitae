<template>
  <h1>{{title}}</h1>
  <div :key="school.id" v-for="school in schools" class="schoolDiv">
      <School :school="school" :descHidden="descHidden" />
  </div>
</template>

<script>
import School from "./School"

export default {
    name: 'Studies',
    props: {
        title: {
            type: String,
            default: 'defaultTitle'
        },
        descHidden: {
            type: Boolean,
            default: true
        },
        schools: Array
    },
    components: {
        School,
    }
}
</script>

<style>
.schoolDiv {
    background-image:linear-gradient(to right, rgb(255, 240, 226), rgb(255, 230, 230), rgb(219, 219, 219));
    border: 1px solid;
    border-radius: 10px;
    box-shadow: 12px 12px 10px rgb(211, 200, 189);
    margin:5px;
    margin-left: 3vw;
    padding:10px 20px;
    width:72%;
    margin-bottom: 3vh;
}
</style>