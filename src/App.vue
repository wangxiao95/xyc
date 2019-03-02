<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 .container{position:absolute;width:100%;height:100%;top:0;left:0;overflow-y:auto;background-color:#fff}
	#app{
    background: #f4f4f4;
    font-family: "PingFang";
  }
  body{
    font-family: "PingFang";
  }
  a{
    color: #3f3f3f
  }
h1, h2, h3, h4, h5, h6 {
    line-height: 1;}
</style>
