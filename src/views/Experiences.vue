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
  width:94%;
  margin-left: 3%;
  height:auto;
}
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
    padding-left: 1vw;  
    padding-bottom: 13vh;
    width: 44vw;
    height: auto;
    top:3vh;
    right:0;
}
@media all and (max-width: 280px) and (min-height:653px) and (max-height:654px)  { /*Galaxy fold */
.worklifeDiv {
    width: 86%;
}
.studiesDiv {
    padding: 0;
    padding-left: 3vw;
    padding-right:0vw;
    padding-bottom: 13vh;
    width: 86%;
}
}
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
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
@media all and (min-width: 320px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.worklifeDiv {
    width: 90%;
    margin-left: 2vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 568px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated */
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
@media all and (min-width: 360px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
.worklifeDiv {
    width: 82%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 640px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
.worklifeDiv {
    width: 82%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 82%;
    margin-left: 4vw;
}
}
 @media all and (min-width: 375px) and (min-height:667px) and (max-height:668px) { /*iPhone 6/7/8  */
.worklifeDiv {
    width: 88%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 667px)and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
.worklifeDiv {
    width: 88%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
.worklifeDiv {
    width: 82%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 82%;
    margin-left: 4vw;
}
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
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
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
.worklifeDiv {
    width: 82%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px)  { /*iPhone 6/7/8 Plus */
.worklifeDiv {
    width: 82%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
.worklifeDiv {
    width: 82%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 82%;
    margin-left: 4vw;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px)  { /*iPhone X */

.worklifeDiv {
    width: 84%;
    margin-left: 0vw;
}
.studiesDiv {
    width: 98%;
    margin-left: 4vw;
}
} 
@media all and (min-width: 540px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.worklifeDiv {
    padding-left: 12vw;
    padding-bottom: 5vh;
    width: 80%;
    overflow:hidden;
    top: 0;
}
.studiesDiv {
    padding: 0;
    padding-top: 0vh;
    padding-left: 5vw;  
    padding-bottom: 5vh;
    width: 80%;
}
}
@media all and (min-width: 720px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
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
@media all and (min-width: 768px) and (min-height: 1024px)  and (max-height: 1025px) { /*iPad*/
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
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
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
@media all and (min-width: 1024px) and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
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
@media all and (min-width: 1366px) and (min-height:1024px) and (max-height:1025px) { /* iPad Pro rotated*/
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
@media all and (min-width: 500px) and (min-height: 1368px) { /*Smallest laptop screens*/
.worklifeDiv {
    padding-top: 0;
    margin-left: 10%;
    width: 80%;
}
.studiesDiv {
    float:left;
    overflow:hidden;
    height:auto;
    padding: 0;
    margin: 0;
    margin-left: 3vw;
    padding-right: 3vw;
    width: 80%;
}
}
@media all and (min-width: 1256px) and (min-height: 1368px) { /*Smaller laptop screens*/
.worklifeDiv {
    padding-left: 12vw;
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
@media all and (min-width: 1340px) and (min-height: 1368px) { /*smaller-medium laptop screens*/
.worklifeDiv {
    width: 42%;
}
.studiesDiv {
    width: 42%;
}
}
@media all and (min-width: 1496px) and (min-height: 1368px) { /*smaller-medium laptop screens*/
}
@media all and (min-width: 1660px) and (min-height: 1368px) { /*medium laptop screens*/
}
@media all and (min-width: 18240px) and (min-height: 1368px) { /*medium-larger laptop screens*/
}
@media all and (min-width: 1996px) and (min-height: 1368px) { /*larger laptop screens*/
}
</style>