<template>
    <div class="mainDiv page" id="maindiv" >
        <div class="worklifeDiv">
            <Workplaces title="Work experience" :companies="companies"/>
        </div>
        <div class="studiesDiv">
            <Studies title="Studies" :schools="studies" />
        </div>
  </div>
</template>

<script>
import Studies from '../components/Experience/Studies.vue'
import Workplaces from '../components/Experience/Workplaces.vue'

export default {
    name: 'Experiences',
    props: {},
    components: {
        Studies,
        Workplaces
    },
    data() {
        return {
            studies: [],
            companies: []
        }
    },
    methods: {
        async fetchSchools(){
        const resp = await fetch ("https://csb1003bffd9e4e9a13.blob.core.windows.net/azapi/Schools.json", {
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await resp.json()

        return data.school
        },
        async fetchCompanies(){
        const resp = await fetch ("https://csb1003bffd9e4e9a13.blob.core.windows.net/azapi/Companies.json", {
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await resp.json()

        console.log(data)

        return data.company
    }
    },
    async created() {
        this.studies = await this.fetchSchools()
        this.companies = await this.fetchCompanies()
    },
    mounted() {
    }
}
</script>

<style scoped>
.mainDiv {
  resize: both;
  position:relative;
  height:auto;
  overflow-y: hidden;
}
.studiesDiv {
    position: relative;
    float:left;
    padding-top: 4vh;
    padding-left: 1vw;
    width: 44vw;
    height: auto;
    top:3vh;
    right:0;
}
.worklifeDiv {
    position: relative;
    float:left;
    padding-top: 4vh;
    padding-right: 1vw;
    overflow-x: auto;
    width: 44vw;
    height: auto;
    top:3vh;
    border-radius: 0px 0px 0px 130px;
}
</style>