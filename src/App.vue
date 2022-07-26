<template>
  <div class="app">
    <!--<NavigationPagina />-->
   
    <router-view />
     <!--<FooterPagina />-->
  </div>
</template>

<script>
//import NavigationPagina from "./components/NavigationPagina.vue";
//import FooterPagina from "./components/FooterPagina.vue";

export default {
  name: "App",
  components: {
    //NavigationPagina,
    //FooterPagina
},

};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
