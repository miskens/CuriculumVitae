<template>
    <div class="mainDiv" id="maindiv" >
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
@media all and (min-width: 50px) and (min-height:50px) {
.worklifeDiv {
    position: relative;
    float:left;
    padding: 0;
    padding-left: 3vw;
    padding-bottom: 3vh;
    padding-right:0vw;
    padding-top: 4vh;
    width: 100vw;
    top:3vh;
}
.studiesDiv {
    position: relative;
    float:left;
    padding: 0;
    padding-top: 0vh;
    padding-left: 3vw;  
    padding-bottom: 13vh;
    width: 44vw;
    height: auto;
    top:3vh;
    right:0;
}
}
@media all and (min-width: 280px) and (max-width: 281px) and (min-height:653px) and (max-height:654px)  { /*Galaxy fold */
.worklifeDiv {
    width: 96%;
}
.studiesDiv {
    width: 96%;
    padding: 0;
    padding-left: 3vw;
    padding-right:0vw;
    padding-bottom: 13vh;
}
}
@media all and (min-width: 653px) and (max-width: 654px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.worklifeDiv {
    margin-left: 3%;
    width: 86%;
}
.studiesDiv {
    margin-left: 3%;
    padding: 0;
    padding-left: 3vw;
    padding-right:0vw;
    padding-bottom: 13vh;
    width: 86%;
}
}
@media all and (min-width: 320px) and (max-width: 321px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.worklifeDiv {
    width: 90%;
    margin-left: 2vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 568px) and (max-width: 569px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated */
.worklifeDiv {
    width: 90%;
    margin-left: 2vw;
}
.studiesDiv {
    width: 90%;
    margin-left: 4vw;
    margin-bottom: 6vh;
}
}
@media all and (min-width: 360px) and (max-width: 361px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.worklifeDiv {
    width: 95%;
    margin-left: 2vw;
}
.studiesDiv {
    width: 95%;
    margin-left: 4vw;
    margin-bottom: 6vh;
}
}
@media all and (min-width: 640px) and (max-width: 641px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
.worklifeDiv {
    width: 82%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 82%;
    margin-left: 4vw;
}
}
 @media all and (min-width: 375px) and (max-width: 376px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8  */
.worklifeDiv {
    width: 88%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 667px) and (max-width: 668px) and (min-height:375px)and (max-height:376px) { /*iPhone 6/7/8 rotated */
.worklifeDiv {
    width: 88%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 414px) and (max-width: 415px) and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
.worklifeDiv {
    width: 98%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 736px) and (max-width: 737px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.worklifeDiv {
    width: 82%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 92%;
    margin-left: 4vw;
}
}
@media all and (min-width: 375px) and (max-width: 376px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */
.worklifeDiv {
    width: 100%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 100%;
    margin-left: 4vw;
}
}
@media all and (min-width: 812px) and (max-width: 813px) and (min-height:375px) and (max-height:376px)  { /*iPhone X rotated */
.worklifeDiv {
    width: 70%;
    margin-left: 8vw;
}
.studiesDiv {
    width: 74%;
    margin-left: 4vw;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.worklifeDiv {
    width: 100%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 100%;
    margin-left: 4vw;
}
}
@media all and (min-width: 731px) and (max-width: 732px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
.worklifeDiv {
    width: 45%;
    padding:0;
    padding-left:3vw;
    margin-left: 0vw;
    margin-bottom: 6vh;
}
.studiesDiv {
    width: 45%;
    margin-left: 2vw;
}
}
@media all and (min-width: 411px) and (max-width: 412px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.worklifeDiv {
    width: 88%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 88%;
    margin-left: 4vw;
}
}
@media all and (min-width: 540px) and (max-width: 541px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.worklifeDiv {
    padding-left: 3vw;
    padding-bottom: 5vh;
    padding-right:2vw;
    width: 80%;
    overflow:hidden;
    top: 0;
}
.studiesDiv {
    padding: 0;
    padding-top: 0vh;
    padding-left: 5vw;  
    padding-bottom: 5vh;
    width: 90%;
}
}
@media all and (min-width: 720px) and (max-width: 721px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
.worklifeDiv {
    padding-left: 0vw;
    padding-right: 1vw;
    padding-top: 0;
    margin-left: 2%;
    width: 40%;
}
.studiesDiv {
    float:left;
    overflow:hidden;
    padding: 0;
    margin: 0;
    margin-left: 3vw;
    padding-right: 3vw;
    width: 40%;
}
}
@media all and (min-width: 768px) and (max-width: 769px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
.worklifeDiv {
    padding-top: 0;
    width: 44%;
}
.studiesDiv {
    float:left;
    overflow:hidden;
    padding: 0;
    margin: 0;
    margin-left: 3vw;
    padding-right: 3vw;
    width: 44%;
}
}
@media all and (min-width: 1024px) and (max-width: 1025px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
.worklifeDiv {
    padding-top: 0;
    width: 44%;
}
.studiesDiv {
    float:left;
    overflow:hidden;
    padding: 0;
    margin: 0;
    margin-left: 3vw;
    padding-right: 3vw;
    width: 44%;
}
}
@media all and (min-width: 1024px) and (max-width:1025px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
.worklifeDiv {
    padding-top: 0;
    width: 44%;
}
.studiesDiv {
    float:left;
    overflow:hidden;
    padding: 0;
    margin: 0;
    margin-left: 3vw;
    padding-right: 3vw;
    width: 44%;
}
}
@media all and (min-width: 1366px) and (max-width:1367px) and (min-height:1024px) and (max-height:1025px) { /* iPad Pro rotated*/
.worklifeDiv {
    padding-left: 3vw;
    padding-top: 0;
    width: 44%;
}
.studiesDiv {
    float:left;
    overflow:hidden;
    padding: 0;
    margin: 0;
    margin-left: 3vw;
    padding-right: 3vw;
    width: 44%;
}
}
</style>