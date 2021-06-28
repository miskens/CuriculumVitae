<template>
  <h2>{{title}}</h2>
  <div :key="company.id" v-for="company in companies" class="companyDiv">
      <Company :company="company" :techHidden="techHidden" />
  </div>
</template>

<script>
import Company from "./Company"

export default {
    name: 'Workplaces',
    props: {
        title: {
            type: String,
            default: 'defaultTitle'
        },
        techHidden: {
            type: Boolean,
            default: true
        },
        companies: Array
    },
    components: {
        Company,
    },
    data() {
        return {
        }
    }
}
</script>

<style>
@media all and (min-width: 1px) and (min-height:1px) {
.companyDiv {
    width:100%;
    background: linear-gradient(to right, rgb(198, 206, 240), transparent);
    border: 1px solid;
    border-radius: 10px;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189);
    margin:5px;
    margin-bottom: 3vh;
    padding:5%;
}
.worklifeDiv h2 {
    font-size: 1.2rem;
}
}
@media all and (min-width: 500px) and (max-width:799px) and (min-height:1px) {
.companyDiv {
    max-height: 30%;
    margin-left: 8%;
    max-width: 80%;
}
}
@media all and (min-width: 800px) and (min-height:1px) {
.companyDiv {
    width: 98%;
}
}
</style>