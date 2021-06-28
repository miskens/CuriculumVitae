<template>
    <div class="mainDiv" id="maindiv" >
        <div class="worklifeDiv expDiv">
            <Workplaces title="Work experience" :companies="companies"/>
        </div>
        <div class="studiesDiv expDiv">
            <Studies title="Studies" :schools="studies" />
        </div>
  </div>
</template>

<script>
import Studies from '../components/Experience/Studies.vue'
import Workplaces from '../components/Experience/Workplaces.vue'
import NonworkExperience from '../components/Experience/NonworkExperience.vue'

export default {
    name: 'Experiences',
    props: {},
    components: {
        Studies,
        Workplaces,
        NonworkExperience
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

        // console.log(data)

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
@media all and (min-width: 1px) and (min-height:1px) {
.expDiv {
    width: 80%;
    float:left;
    padding: 0;
    margin-left: 1%;
    padding-top: 4vh;
}
.worklifeDiv {
    padding-left: 1%;
}
.studiesDiv {
    margin-bottom:14%;
}
}
@media all and (min-width: 300px) and (min-height:1px) {
.expDiv {
    padding-left: 3%;
}
}
@media all and (min-width: 340px) and (min-height:1px) {
.expDiv {
    width: 76%;
    padding-left: 5%;
}
}
@media all and (min-width: 400px) and (min-height:1px) {
.expDiv {
    width: 74%;
    padding-left: 8%;
}
}
@media all and (min-width: 500px) and (max-width:799px) and (min-height:1px) {
.expDiv {
    width: 86%; 
    padding-left: 0;
    margin-left: 2%;
}
}
@media all and (min-width: 800px) and (min-height:1px) {
.expDiv {
    width: 40%;
    padding-left: 2%;
 }
.worklifeDiv {
    padding-bottom: 3vh;
    margin-left: 1%;
}
.studiesDiv {
    margin-left: 5%;
}
}
</style>