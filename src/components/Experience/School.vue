<template>
<div class="schoolHeader">
      <h2>{{school.Name}} </h2>
      <img alt="pic" :src="school.Picture" />
      <h6>{{school.Course}}</h6>
      <p>{{school.When}}</p>
</div>
        <Button text="More" class="descMinMaxBtn" @click="showHideDesc"></Button>
      <transition-group  name="descTransition" mode="out-in" >
        <p v-if="!descHidden">{{school.Desc}}</p>
      </transition-group>
</template>

<script>
import Button from "../Shared/sharedAssets/Button"

export default {
    inheritAttrs: false,
    name: 'School',
    props: {
        school: Object,
        src: String
    },
    components: {
        Button
    },
    data() {
        return {
            descHidden: true
        }
    },
    methods: {
        async showHideDesc() {
            this.descHidden = !this.descHidden
        }
    }
}
</script>

<style scoped>
.schoolDiv p {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.schoolDiv h2 {
    padding-bottom: 2vh;
}
.schoolDiv h3 {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
.descMinMaxBtn {
    position: relative;
    background-image:linear-gradient(to right, rgb(245, 245, 245), rgb(224, 224, 224), rgb(245, 245, 245));
    padding: 10px 20px;
    left: 17vw;
    right:0vw;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px 2px;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;
    transition: ease-in-out, 0.02s;
}
.descMinMaxBtn:hover {
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.descMinMaxBtn:active {
    box-shadow: 0px 0px 0px;
    margin-right:-5px;
    background-image:linear-gradient(to right, rgb(240, 240, 240), rgb(218, 218, 218), rgb(240, 240, 240));
}
.descTransition-enter-active, .descTransition-leave-active {
    transition: opacity 1s ease-in-out;
}
.descTransition-enter-from, .descTransition-leave-to {
    opacity: 0;
    transition-duration: .3s;
}
.descTransition-leave-from, .descTransition-enter-to {
    opacity: 1;
    transition-duration: 1s;
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

@media all and (max-width: 280px) and (min-height:653px) and (max-height:654px){ /*Galaxy fold */
.schoolHeader h2 {
    display: none;
}
.schoolHeader h3 {
    padding-top: 1vh;
}
img{
    height: 50px;
    float:none;
}
.descMinMaxBtn {
    position: relative;
    left: 25vw;
    padding: .8rem .4rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}

.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
}
@media all and (min-width: 653px) and (min-height:280px) and (max-height:281px){ /*Galaxy fold rotated */
.companyHeader {
    padding-left: 6vw;
}
.companyHeader h2 {
    font-size: .8rem;
}
img{
    height: 50px;
    float:none;
    margin-top: 3vh;
    margin-left: 0vw;
}
.descMinMaxBtn {
    position: relative;
    left: 28vw;
    padding: .8rem .4rem;
    font-size: .8rem;
    line-height: 2px;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 30vw;
    width:39vw;
    height: auto;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 320px) and (min-height:568px) and (max-height:569px) { /*iPhone 5/SE*/
.schoolHeader h2 {
    display: none;
}
.schoolHeader h3 {
    padding-top: 1vh;
}
img{
    height: 50px;
    float:none;
    margin-top: 3vh;
    margin-left: 0vw;
}
.descMinMaxBtn {
    position: relative;
    left: 30vw;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
p {
    font-weight: 300;
    font-size: x-small;
}
}
@media all and (min-width: 568px) and (min-height:320px) and (max-height:321px) { /*iPhone 5/SE rotated */
.companyHeader h2 {
    font-size: 1.1rem;
}
.companyHeader h3 {
    padding-top: 2vh;
}
img {
    /* margin-top: 3vh; */
    max-width:100%;
    float:none;
}
.descMinMaxBtn {
    position: relative;
    left: 30vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
.descDiv {
    margin-top: 5vh;
    padding:0;
    width:100%;
    height: 100%;
    margin-right: 30px;
    margin-bottom: 4vh;
}
.tableWrapperForTransition {
    display:list-item;
    width:50vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
h6 {
    font-size: 1.1rem;
}
p {
    font-weight: 300;
    font-size: .9rem;
}
}
@media all and (min-width: 360px) and (min-height:640px) and (max-height:641px) { /*Moto 4 & Galaxy S5 */
img{
    height: 50px;
    float:none;
    margin-top: 1vh;
    margin-left: 0vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 28vw;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: x-small;
}
}
@media all and (min-width: 640px) and (min-height:360px) and (max-height:361px)  { /* Moto 4 & Galaxy S5 rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .8rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 28vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-weight: 300;
    font-size: .9rem;
}
}
@media all and (min-width: 375px) and (min-height: 667px) and (max-height:668px) { /*iPhone 6/7/8 */
img{
    height: 50px;
    float:none;
    margin-top: 1vh;
    margin-left: 0vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 28vw;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: x-small;
}
}
@media all and (min-width: 667px)and (min-height:375px) and (max-height:376px)   { /*iPhone 6/7/8 rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 34vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-size: .8rem;
}
h6 {
    font-size: 1rem;
}
}
@media all and (min-width: 414px) and (min-height:736px) and (max-height:737px) { /* iPhone 6/7/8 Plus*/
img{
    height: 50px;
    float:none;
    margin-top: 1vh;
    margin-left: 0vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 28vw;
    padding: .9rem 1.1rem;
    padding-right:3rem;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: x-small;
}
}
@media all and (min-width: 736px) and (min-height:414px) and (max-height:415px) { /* iPhone 6/7/8 Plus rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 28vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
h6 {
    font-size: 1rem;
}
p {
    font-size: .8rem;
}
}
@media all and (min-width: 375px) and (min-height:812px) and (max-height:813px) { /* iPhone X*/
img{
    height: 50px;
    float:none;
    margin-top: 1vh;
    margin-left: 0vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 28vw;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: x-small;
}
}
@media all and (min-width: 812px) and (min-height:375px) and (max-height:376px) { /* iPhone X rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.descMinMaxBtn {
    position: relative;
    left: 34vw;
    padding: .9rem 1.1rem;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-size: .9rem;
}
}
@media all and (min-width: 411px) and (min-height:731px) and (max-height:732px) { /*Pixel 2 */
img{
    height: 50px;
    float:none;
    margin-top: 1vh;
    margin-left: 0vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 23vw;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: x-small;
}
}
@media all and (min-width: 731px) and (min-height:411px) and (max-height:412px) { /*Pixel 2 rotated */
img {
    max-width:100%;
    float:none;
}
.companyHeader h2 {
    font-size: .9rem;
}
.techListTable {
    margin-left: 10vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 13vw;
    padding: .9rem 1rem;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: x-small;
}
}
@media all and (min-width: 411px) and (min-height:823px) and (max-height:824px) { /* Pixel 2 XL */
img{
    height: 50px;
    float:none;
    margin-top: 1vh;
    margin-left: 0vw;
}
.nameTd {
    display: inline-block;
    min-width: 0;
    width:39vw;
    margin-right: 0;
    text-align:left;
    padding: 10px;
    margin-bottom: 0.5vh;
}
.descMinMaxBtn {
    position: relative;
    left: 28vw;
    padding: .9rem 1.1rem;
    padding-right: 13vw;
    font-size: .8rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: x-small;
}
}
@media all and (min-width: 540px) and (min-height:720px) and (max-height:721px) { /*Surface Duo*/
.descMinMaxBtn {
    position: relative;
    left: 24vw;
    padding: 1rem 1.8rem;
    padding-right: 3.5rem;
    font-size: .9rem;
    line-height: 2px;
}
p {
    font-weight: 300;
    font-size: medium;
}
h6 {
    font-size: large;
}
}
@media all and (min-width: 720px) and (min-height:540px) and (max-height:541px) { /*Surface Duo rotated*/
img {
    max-width:40%;
}
.descMinMaxBtn {
    position: relative;
    left: 11vw;
    padding: 1rem 1.8rem;
    padding-right: 3.5rem;
    font-size: .9rem;
    line-height: 2px;
}
h6 {
    font-size: 1.1rem;
}
p {
  font-size: 1rem;
}
}
@media all and (min-width: 768px) and (min-height: 1024px) and (max-height: 1025px) { /*iPad*/
img{
    height: 110px;
    width: auto;
    max-width: 30vw;
    float:none;
}
.descMinMaxBtn {
    left: 9vw;
    padding: 2vh 12vw 2vh 6vw; 
    line-height: 4px;  
    font-size: 1.6rem;
}
.schoolHeader h3 {
    font-size: xx-large;
}
.schoolHeader p {
    font-size: x-large;
}
p {
    font-weight: 300;
    font-size: large;
}
h6 {
    font-size: large;
}
}
@media all and (min-width: 1024px) and (min-height:768px) and (max-height:769px) { /* iPad rotated*/
img {
    max-width:40%;
}
.descMinMaxBtn {
    position: relative;
    left: 12vw;
    padding: 1.2rem 2.5rem;
    padding-right: 4.5rem;
    font-size: 1.2rem;
    line-height: 2px;
}
h6 {
    font-size: 1.3rem;
}
p {
  font-size: 1.2rem;
}
}
@media all and (min-width: 1024px)and (min-height: 1366px) and (max-height: 1367px) { /*iPad Pro*/
img{
    height: 110px;
    max-width: 90%;
    width: auto;
    float:none;
}
.descMinMaxBtn {
    left: 8vw;
    padding: 2vh 8vw 2vh 4vw;
    font-size: 1.6rem;
    line-height: 2px;
}
.schoolHeader h2 {
    font-size: 1.6rem;
}
.schoolHeader p {
    font-size: 1.4rem;
}
p {
    font-weight: 300;
    font-size: 1.4rem;
}
h6 {
    font-size: 1.4rem;
}
}
@media all and (min-width: 1366px) and (min-height:1024px) and (max-height:1025px) { /* iPad rotated*/
img {
    max-width:40%;
}
.descMinMaxBtn {
    position: relative;
    left: 11vw;
    padding: 1.2rem 2.5rem;
    padding-right: 4.5rem;
    font-size: 1.2rem;
    line-height: 2px;
}
h6 {
    font-size: 1.3rem;
}
p {
  font-size: 1.2rem;
}
}
@media all and (min-width: 500px)  and (min-height:1368px){ /*Smallest laptop screens*/
img{
    height: 170px;
    max-width: 50%;
    width: auto;
    float:none;
}
.descMinMaxBtn {
    left: 6vw;
    font-size: 2rem;
    padding: 5% 20% 5% 10%;
    line-height: 2px;
}
h6 {
    font-size: 1.8rem;
}
p {
    font-weight: 300;
    font-size: large;
}
}
@media all and (min-width: 800px) and (min-height:1368px) { /*Smaller laptop screens*/
.descMinMaxBtn {
    left: 20vw;
    padding: 5% 20% 5% 10%;
}
}
@media all and (min-width: 900px) and (min-height:1368px) { /*Smaller laptop screens*/
.descMinMaxBtn {
    left: 20vw;
    padding: 6% 24% 6% 11%;
}
}
@media all and (min-width: 1000px) and (min-height:1368px) { /*Smaller laptop screens*/
.descMinMaxBtn {
    left: 20vw;
    padding: 6% 22% 6% 10%;
}
}
@media all and (min-width: 1124px) and (min-height:1368px) { /*Smaller laptop screens*/
.descMinMaxBtn {
    left: 16vw;
    padding: 6% 20% 6% 9%;
}
}
@media all and (min-width: 1256px) and (min-height:1368px) { /*Smaller laptop screens*/
.descMinMaxBtn {
    left: 4vw;
    padding: 9% 40% 9% 20%;
}
}
@media all and (min-width: 1396px) and (min-height:1368px) { /*smaller-medium laptop screens*/
.descMinMaxBtn {
    left: 5vw;
    padding: 8% 37% 8% 18%;
}
}
@media all and (min-width: 1460px) and (min-height:1368px) { /*medium laptop screens*/
}
@media all and (min-width: 15240px) and (min-height:1368px) { /*medium-larger laptop screens*/
}
@media all and (min-width: 1696px) and (min-height:1368px) { /*larger laptop screens*/
}
</style>