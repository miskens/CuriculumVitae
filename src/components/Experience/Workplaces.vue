<template>
  <h1>{{title}}</h1>
  <div :key="company.id" v-for="company in companies" class="companyDiv">
      <Company :company="company" />
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
        companies: Array
    },
    components: {
        Company,
    }
}
</script>

<style>
.companyDiv {
    /* background:linen; */
    background-image:linear-gradient(to right, rgb(219, 219, 219), rgb(255, 230, 230), rgb(255, 240, 226));
    border: 1px solid;
    box-shadow: -12px 12px 10px 1px rgb(211, 200, 189);
    margin:5px;
    margin-left: 7vw;
    padding:10px 20px;
    width:72%;
    margin-bottom: 3vh;
}
</style>