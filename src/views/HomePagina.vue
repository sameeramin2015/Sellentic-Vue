<template>
  <div class="HomePagina">
    <NavigationPagina />
    <section class="hero">
      <div class="hero-text container">
        <nav id="navbar">
          <ul>
            <li>
              <a href="#" ><i class="fab fa-facebook-f"></i><span>Facebook</span></a>
            </li>
            <li>
              <a href="#" ><i class="fab fa-instagram"></i><span>Instagram</span></a>
            </li>
            <li>
              <a href="#" ><i class="fab fa-youtube"></i><span>YouTube</span></a>
            </li>
            <li>
              <a href="#" ><i class="fab fa-linkedin"></i><span>LinkedIn</span></a>
            </li>
          </ul>
        </nav>
        
        <h2>
          Welcome to home Page!
        </h2>
       
      </div>
    </section>
    <router-view />
    <FooterPagina />
 </div>
</template>

<script>
// @ is an alias to /src
import NavigationPagina from "../components/NavigationPagina.vue";
import FooterPagina from "../components/FooterPagina.vue";
export default {
 name: "HomePagina",
  components: {
    NavigationPagina,
    FooterPagina,
  },

};
/*
window.onscroll = function (){
  scroll();
};
function scroll(){
  if(document.body.scroll > 20 || document.documentElement.scrollTop >20 ) {
    document.getElementById('navbar').style.top ="0";
  }else {
    document.getElementById('navbar').style.top ="-320px";
  }
}
*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-480px";
  }
  prevScrollpos = currentScrollPos;
}
</script>

<style lang="scss" scoped>
.hero {
 background-image: url("../assets/hero-bg.png");
 background-attachment: fixed;
 position: relative;
 height: 100vh;

 img {
   object-fit: cover;
   height: 100%;
   width: 100%;
 }
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
nav {
  position: fixed;
  width: 45px;
  margin-top: 150px;
  box-shadow: 2px 2px 8px 0 rgba(0,0,0,.4);
  margin-top:250px
}
  nav li {
    height: 55px;
    position: relative;
  }
  nav li a {
    color: white;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 60px;
    padding-left: 20%;
    border-bottom: 1px solid rgba(0,0,0,.4);
    transition: all .3s linear;
  }
  nav li:nth-child(1)a {
    background: #4267B2;
  }
  nav li:nth-child(2)a {
    background: #E1306C;
  }
  nav li:nth-child(4)a {
    background: #2867B2;
  }
  nav li:nth-child(3)a {
    background: #ff0000;
  }
  nav li a i{
    position: absolute;
    top:17px;
    left: 10px;
    font-size: 23px;
  }
  nav li a span {
    font-width: bold;
    letter-spacing: 1px;
    display: none;
  }
  a:hover {
    z-index: 1;
    width: 200px;
    border-bottom: 1px solid rgba(0,0,0,.5);
    box-shadow: 0 0 1px 1px rgba(0,0,0,.3);
  }
  ul li a:hover span {
    display: block;
    padding-left: 30%;
  }
  @media (min-height: 450px) {
   nave li a span {
     display: none;
   }

}
  .hero-text {
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: #fff;



   h2 {
     font-size: 50px;
     @media (min-width: 550px) {
       font-size: 80px;
       text-align: center;
     }
   }

   hr:nth-child(2) {
     max-width: 365px;
     margin-bottom: 16px;
   }
   hr:nth-child(4) {
     height: 6px;
     background-color: #fff;
     border: none;
     max-width: 85px;
     margin-top: 16px;
   }
 }
}
</style>
