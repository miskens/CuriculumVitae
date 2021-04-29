<template>
        <h2>{{company.Name}} <img alt="pic" :src="company.Picture" /></h2>
            <h4>When: {{company.When}}</h4>
            <h4>Assignment: {{company.Assignment}}</h4>
            <h4>Boss: {{company.Boss}}</h4>
        <div class="tech" :key="tech.id" v-for="tech in company.tech">
            <h5 :tech="tech"></h5>
        </div>
        
  <!-- <div class="schoolDiv"> -->
      <!-- <h2>{{school.Name}}</h2>
      <h3>{{school.Course}}</h3>
      <p>{{school.When}}</p>
      <p>{{school.Desc}}</p> -->
  <!-- </div> -->
</template>

<script>
export default {
    name: 'Company',
    props: {
        company: Object,
        src: String
    }
}
</script>

<style>
.companyDiv h2 {
    padding-bottom: 2vh;
    /* border:0;
    border-color:cadetblue;
    border-style: solid;
    border-bottom-width: 2px; */
    
}
.companyDiv h3 {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.companyDiv p {
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