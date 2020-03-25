<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/aboutme">AboutMe</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/works">Works</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  width: 90%;
  margin: 0 auto;
  border-bottom: 3px solid #e4e7ed;
}

#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  display: inline-block;
  width: 25%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

</style>
