<template>
  <div id="app">
    <Navbar/>
    <Body/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Body from './components/Body.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Navbar,
    Body
  }
}
</script>

<style>
body {
  background-color: #FAFAFA;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
