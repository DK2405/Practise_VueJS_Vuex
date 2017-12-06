<template>
   <div id="app">
     <img src="./assets/logo.png">
     <div>
      <ul>
         <p><router-link to="/">Home</router-link></p>
         <p><router-link to="/listfirst">List One</router-link></p>
         <p><router-link to="/listsecond">List Two</router-link></p>
         <p><router-link to="/firstroute/Steven">Calculator</router-link></p>
         <p><router-link to="/firstroute/Steven/child">FirstRouteChild</router-link></p>
      </ul>
     </div>
     <router-view></router-view>
   </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
