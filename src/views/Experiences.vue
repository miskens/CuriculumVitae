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
    padding-bottom: 5vh;
    overflow-x: auto;
    width: 44vw;
    height: auto;
    top:3vh;
    border-radius: 0px 0px 0px 130px;
}
@media all and (max-width: 290px) { /*Galaxy fold: maxwidth due to interference towards higher*/
.worklifeDiv {
    padding: 0;
    padding-left: 7vw;
    padding-right:5vw;
    padding-bottom: 13vh;
    width: 98%;
}
.studiesDiv {
    padding: 0;
    padding-top: 0vh;
    padding-left: 1vw;  
    padding-bottom: 13vh;
    width: 98%;
}
}
@media all and (min-width: 320px) { /*iPhone 5/SE*/
.worklifeDiv {
    padding-left: 16vw;
    padding-bottom: 13vh;
    width: 75%;
    overflow:hidden;
    top: 0;
}
.studiesDiv {
    padding: 0;
    padding-top: 0vh;
    padding-left: 1vw;  
    padding-bottom: 13vh;
    width: 75%;
}
}
@media all and (min-width: 360px) { /*Moto 4 & Galaxy S5 */
}
@media all and (min-width: 375px) { /*iPhone 6/7/8/X */
}
@media all and (min-width: 411px) { /*Pixel 2, Pixel 2 XL*/ /*414px: iPhone 6/7/8 Plus*/
}
@media all and (min-width: 540px) { /*Surface Duo*/
.worklifeDiv {
    padding-left: 8vw;
    padding-bottom: 5vh;
    width: 96%;
    overflow:hidden;
    top: 0;
}
.studiesDiv {
    padding: 0;
    padding-top: 0vh;
    padding-left: 1vw;  
    padding-bottom: 5vh;
    width: 96%;
}
}
@media all and (min-width: 768px) { /*iPad*/
.worklifeDiv {
    padding-top: 0;
    width: 44%;
}
.studiesDiv {
    float:left;
    overflow:hidden;
    padding: 0;
    margin: 0;
    top:0;
    width: 44%;
}
}
@media all and (min-width: 1024px) { /*iPad Pro*/

}
@media all and (min-width: 1124px) { /*Smallest laptop screens*/
}
@media all and (min-width: 1256px) { /*Smaller laptop screens*/
}
@media all and (min-width: 1496px) { /*smaller-medium laptop screens*/
}
@media all and (min-width: 1660px) { /*medium laptop screens*/
}
@media all and (min-width: 18240px) { /*medium-larger laptop screens*/
}
@media all and (min-width: 1996px) { /*larger laptop screens*/
}
</style>