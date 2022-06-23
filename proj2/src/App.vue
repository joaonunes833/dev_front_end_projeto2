<template>
  <nav>
    <div class="logo">
      <router-link to="/"><img src="@\assets\pearl.png"></router-link>
    </div>
    <div class="router">
      <router-link class="router-button" to="/atLogin">Login</router-link> 
      <router-link class="router-button" to="/artigos">Artigos</router-link> 
      <router-link class="router-button" to="/comentarios">Comentários</router-link> 
      <router-link class="router-button" to="/pesquisa">Pesquisa</router-link> 
      <router-link class="router-button" to="/carrinho">Carrinho</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  height: 50px;
  padding: 40px;
  align-content: center;
  margin-bottom: 10%;
}

.router-button {
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 5px 20px;
  border: 1px solid rgb(255, 255, 255);
  transition: 0.6s ease;
}
.router-button:hover{
  background-color:rgb(255, 255, 255);
  color: rgb(0, 0, 0);;
}

.router{
  float:right;
  margin-right: 1%;
}

.logo img{
    float:left;
    margin-left: 1%;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: rgb(78, 78, 245);
}

body{
  background-image: url('./assets/background1.jpg');
  background-size: cover;
}
</style>