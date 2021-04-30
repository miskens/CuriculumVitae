<template>
    <div class="companyHeader">
        <h2>{{company.Name}} <img alt="pic" :src="company.Picture" /></h2>
        <h3>{{company.Assignment}}</h3>
            <p>When: {{company.When}}</p>
            <p>Boss: {{company.Boss}}</p>
            <btn class="techMinMax" @click="showHideTech"><span>More</span></btn>
    </div>
     <div id="tech" class="tech">
     <!-- Add vue transition -->
        <div class="moreInfoDiv" :hidden="techHidden ? true : false">
            <div class="descDiv">{{company.Desc}}</div>
            <ul class="techListDiv" :key="t.id" v-for="t in company.Tech">
                <li>{{t.Name}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Company',
    props: {
        company: Object,
        src: String,
        techHidden: Boolean
    },
    data() {
        return {
            techHidden: true
        }
    },
    methods: {
        async showHideTech() {
            this.techHidden = !this.techHidden
        }
    },
    async created() {
    },
    async mounted() {
    }
}
</script>

<style scoped>
.companyHeader {
    height:210px;
    width:100%;
    padding-bottom: 4vh;
}
.companyDiv h2 {
    padding-bottom: 2vh;
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
.techMinMax {
    display: inline-block;
    width: 120px;
    min-width: 120px;
    max-width: 120px;
    height:22px;
    background-image:linear-gradient(to right, rgb(245, 245, 245), rgb(224, 224, 224), rgb(245, 245, 245));
    padding-top: 10px;
    padding: 10px 20px;
    margin-left:360px;
    border-radius: 5px;
    box-shadow: 3px 3px 4px;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;
    transition: ease-in-out, 0.05s;
}
.techMinMax:hover {
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.techMinMax:active {
    box-shadow: 1px 1px 1px;
    margin-right:-6px;
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.tech {
    width:100%;
    position:relative;
    left: 0vw;
    bottom:5vh; 
    overflow:hidden;
    transition: all 2s ease-in-out;
}

.descDiv {
    width:320px;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 5vh;
}
.techListDiv {
    width:auto;
    height: auto;
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
ul {
    display: inline-block;
    list-style-type: none;
    margin: 0;
    margin-right: 1vw;
    padding: 0;
    overflow: hidden;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(117, 172, 172, 0.8);
    background-color: rgba(240, 240, 240, 0.8);
}
li {
    text-align: center;
    max-width: 250px;
    padding: 16px;
    text-decoration: none;
}
</style>