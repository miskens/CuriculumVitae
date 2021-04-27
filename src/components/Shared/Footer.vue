<template>
  <div class="footer">
    <div class="leftFooter">
      <ul>
        <h3>Vue.Js by Mikael Puusaari, hosted on Azure</h3><br/>
        <p>Mobil:		072-568 22 79</p>
        <p>Mail:		Miskens@hotmail.com</p>
      </ul>
      </div>
      <div class="rightFooter">
        <h4><a href="http://www.linkedin.com/pub/mikael-puusaari/59/369/57" target="blank">LinkedIn</a></h4>
        <h4><a href="https://www.facebook.com/mikael.puusaari/" target="blank">Facebook</a></h4>
        <h4><a href="https://stackoverflow.com/users/6094057/mikael-puusaari" target="blank">StackOverflow</a></h4>
        <h4>Github</h4>
      </div>
  </div>
</template>

<script>
</script>

<style  scoped>
.footer {
  margin-top: 2vh;
  padding: 20px;
  padding-left: 10vw;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  background-color: rgb(241, 241, 241);
  caret-color: transparent;
}
.leftFooter {
  display:inline-block;
  min-height: 200px;
  width: 550px;
}
.rightFooter {
  width:200px;
  padding-right: 200px;
  top: 0;
  float:right;
  overflow: auto;
  border-left: double;
  border-color:black;
  border-width: 6px;
}
a {
  color:mediumturquoise;
}
</style>