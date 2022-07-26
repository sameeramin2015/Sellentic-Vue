<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <!--<img src="@/assets/logo.png" alt="" />-->
        <h1>Sellentic</h1>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'HomePagina' }"
            >Home</router-link
          >
        </li>
        <li>
          <div class="dropdown-container-div">
            <router-link class="link" :to="{ name: 'BlastPagina' }"
                ><span class="dropdown-button">BLAST</span></router-link
          >
            <div class="dropdown-content">
              <ul>
                <li><router-link :to="{ name: 'OnlineMarketplaces' }">Online Marketplaces</router-link></li>
                <li><router-link :to="{ name: 'WebshopsPagina' }">Webshops</router-link></li>
                <li><router-link :to="{ name: 'AdvertisingChannels' }">Advertising channels</router-link></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown-container-div">
            <router-link class="link" :to="{ name: 'ConnectPagina' }"
                ><span class="dropdown-button">CONNECT</span></router-link
          >
            <div class="dropdown-content">
              <ul>
                <li><router-link :to="{ name: 'OrderPagina' }">Orders</router-link></li>
                <li><router-link :to="{ name: 'StockPagina' }">Stock</router-link></li>
                <li><router-link :to="{ name: 'DispatchPagina' }">Dispatch</router-link></li>
                <li><router-link :to="{ name: 'FulfillmentPagina' }">Fulfillment</router-link></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown-container-div">
            <router-link class="link" :to="{ name: 'OptimizePagina' }"
                ><span class="dropdown-button">OPTIMIZE</span></router-link
          >
            <div class="dropdown-content">
              <ul>
                <li><router-link :to="{ name: 'AdvertisePagina' }">Advertise</router-link></li>
                <li><router-link :to="{ name: 'RepricingPagina' }">Repricing</router-link></li>
                <li><router-link :to="{ name: 'AccountingPagina' }">Accounting</router-link></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown-container-div">
            <router-link class="link" :to="{ name: 'TrainingPagina' }"
                ><span class="dropdown-button">TRAINING</span></router-link
          >
            <div class="dropdown-content">
              <ul>
                <li><router-link :to="{ name: 'WorkingPagina' }">Working with Sellentic</router-link></li>
                <li><router-link :to="{ name: 'SellingPagina' }">Selling on Marketplaces</router-link></li>
                <li><router-link :to="{ name: 'OptimizeM' }">Optimize Marketplaces</router-link></li>
               
              </ul>
            </div>
          </div>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'SupportPagina' }"
            >Support</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'JobsPagina' }"
            >Jobs</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'AboutusPagina' }"
            >About us</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'SignIn' }"
            ><button class="btn">Sign in</button></router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'SignUp' }"
            ><button class="btn">Sign up</button></router-link
          >
        </li>
        <div class="nav-wrapper">
          <div class="sl-nav">
            <ul>
              <li>
                <b class="link1">English</b>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
                <div class="triangle"></div>
                <ul>
                  <li>
                    <i class="sl-flag flag-usa"><div id="germany"></div></i>
                   <router-link :to="{ name: 'HomePagina' }"> <span class="active">English</span></router-link>
          
                  </li>
                  <li>
                    <i class="sl-flag flag-netherlands"><div id=""></div></i>
                    <router-link :to="{ name: 'HomeNL' }"> <span class="active">Nederlands</span></router-link>
                  </li>
                  <li>
                    <i class="sl-flag flag-frans"><div id=""></div></i>
                    <span>Français</span>
                  </li>
                  <li>
                    <i class="sl-flag flag-de"><div id="germany"></div></i>
                    <span >Deutsch</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
        <!-- Mobile menu icon-->
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li>
              <router-link class="link" :to="{ name: 'HomePagina' }"
                >Home</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'BlastPagina' }"
                >Blast</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'ConnectPagina' }"
                >Connect</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'OptimizePagina' }"
                >Optimize</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'TrainingPagina' }"
                >Training</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'SupportPagina' }"
                >Support</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'JobsPagina' }"
                >Jobs</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'AboutusPagina' }"
                >About us</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'SignIn' }"
                ><button class="btn">Sign in</button></router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'SignUp' }"
                ><button class="btn">Sign up</button></router-link
              >
            </li>
            <!-- Language dropdown menu -->
            <div class="nav-wrapper">
          <div class="sl-nav">
            <ul>
              <li>
                <b class="link1">English</b>
                <i class="arrow-icon fa fa-angle-down" aria-hidden="true"></i> <!-- down arrow ican-->
                <div class="triangle"></div>
                <ul>
                  <li>
                    <i class="sl-flag flag-usa"><div id="germany"></div></i>
                    <span class="active span-align">EN</span>
                  </li>
                  <li>
                    <i class="sl-flag flag-netherlands"><div id=""></div></i>
                    <span class="span-align">NL</span>
                  </li>
                  <li>
                    <i class="sl-flag flag-frans"><div id=""></div></i>
                    <span class="span-align">FR</span>
                  </li>
                  <li>
                    <i class="sl-flag flag-de"><div id="germany"></div></i>
                    <span class="span-align">DE</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
            <!-- End language dropdown menu -->
          </ul>
        </transition>
        <!-- transition tag is used for animating the nav elements-->
      </div>
    </nav>
  </header>
</template>

<script setup>
// dorpdown menu

// end dropdown menu
import { onBeforeUnmount, onMounted, ref } from "vue";

const scrolledNav = ref(null);
const mobile = ref(true);
const mobileNav = ref(null);
const windowWidth = ref(null);

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value; // toggle mobile icon in navbar
}

function updateScroll() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    scrolledNav.value = true;
    return;
  }
  scrolledNav.value = false;
}

function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
}

onMounted(() => {
  window.addEventListener("resize", checkScreen);
  window.addEventListener("scroll", updateScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScroll);
  window.removeEventListener("resize", checkScreen);
});

checkScreen();

(function () {
  ".selectpicker".selectpicker();
});
</script>

<style lang="scss" scoped>
//dropdown menue
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
/*1. style button*/

.dropdown-button {
  font-size: 14px;
  background-color: black;
  color: white;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  &:hover {
    color: #00afea;
    border-color: #00afea;
  }
}
/*2. style dropdown container div*/

.dropdown-container-div {
  display: inline-block;
  position: relative;
  
}

/*3. style hidden dropdown content items*/

.dropdown-content {
  display: none;
  position: fixed;
  z-index: 1;
  background-color: #000;
  width: 250px;
  border-radius: 10px;
  padding-top: 20px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 1);
  /*do not add padding here, it will affect appearance of hover*/
}

/*4. Style links in dropdown content why don't you*/
.dropdown-content a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 10px 10px;
  font-size: 13px;
}

/*5. style links in dropdown content when you hover over them*/
.dropdown-content a:hover {
  background-color: #00afea;
  border-radius: 3PX;
}

/*6. display dropdown content when you hover over the dropdown div*/

.dropdown-container-div:hover .dropdown-content {
  display: block;
}

/*7. Change color of dropdown button when you display the dropdown content*/

.dropdown-container-div:hover .dropdown-button {
}
// end dropdown menu

header {
  background-color: #000;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
  h1 {
    font-size: 35px;
    font-weight: bold;
  }
  .btn {
    background-color: gray;
    border-radius: 10px;
    width: 90px;
    height: 30px;
    color: white;
    cursor: pointer;
  }
  .btn:hover {
    background-color: black;
    color: #00afea;
    signinfont-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border: 1px #00afea solid;
  }
  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    height: 80px;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140;
    }
    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
      
    }
    li {
      text-transform: uppercase;
      padding: 15px;
      
    }
    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }
    .link1 {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }
    .branding {
      display: flex;
      align-items: center;
      img {
        width: 80px;
        transform: 0.5s ease all;
      }
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end; // move navbar to the right side
    }
    .icon {
      display: flex;
      position: absolute;
      align-items: center;
      top: 0;
      right: 15px;
      height: 100%;
      i {
        // mobile icon
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }
    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: black;
      top: 0;
      left: 0;
      
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-enter-to {
      transform: translateX(-250px);
    }
    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  nav {
    padding: 8px 0;
    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}
// language dropdown menue style
@import url("https://fonts.googleapis.com/css?family=Muli");
body {
  font-family: Arial;
  font-family: "Muli", sans-serif;
}
.nav-wrapper {
  width: 100px;
  text-align: center;
}
.sl-nav {
  display: inline;
}

.sl-nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
}

.sl-nav li {
  cursor: pointer;
  padding-bottom: 10px;
  
}
.span-align {
  display: flex;
  justify-content: center;
  margin-left: 50px;
}
.arrow-icon{
  font-size: 1px;
  
}
.sl-nav li ul {
  display: none;
  
}
.sl-nav li:hover ul {
  position: absolute;
  top: 60px;
  right: 0px;
  display: block;
  background: #000;
  width: 180px;
  padding-top: 0px;
  z-index: 1;
  color: #00afea;
  border-radius: 5px;
  text-align: center;
}
.sl-nav li:hover .triangle {
  position: absolute;
  top: 15px;
  right: -10px;
  z-index: 10;
  height: 10px;
  overflow: hidden;
  width: 30px;
  background: transparent;
  transition: 4s ease all;
  
 
}
.sl-nav li:hover .triangle:after {
  content: "";
  display: block;
  z-index: 20;
  width: 15px;
  transform: rotate(45deg) translateY(0px) translateX(10px);
  height: 15px;
  background: #146c78;
}
.sl-nav li ul li {
  position: relative;
  text-align: left;
  padding: 15px 15px;
  padding-bottom: 0;
  z-index: 2;
  font-size: 15px;
  color: #fff;
}
.sl-nav li ul li:last-of-type {
  padding-bottom: 15px;
}
.sl-nav li ul li span {
  padding-left: 5px;
}
.sl-nav li ul li span:hover,
.sl-nav li ul li span.active {
  color: #146c78;
  transition: 0s ease all;
}
.sl-flag {
  display: inline-block;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  width: 15px;
  height: 15px;
  background: #aaa;
  border-radius: 50%;
  position: relative;
  top: 2px;
  overflow: hidden;
}
.flag-de {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAAAPUlEQVQ4T+3HMQ0AIBTE0NOHM8x9B7hgh71bIWGieUvze1m7kHGBr/AVvsJX+EpmP5dV5/gKX+ErfIUvVDYcX2NMxQC8PAAAAABJRU5ErkJggg==");
  background-size: cover;
  background-position: center center;
}
.flag-usa {
  background-size: cover;
  background-position: center center;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAABhUlEQVQ4T2Ows82PjGixsc4LD2tysC/09Kjw8622tyuICG8u0w/cpGSCBzF4e1VmZkzw9anOzOj38a4KCW4IC22ECHYk1l9tn4gHMeTlTnZxLikvm+XiUpKW2hvgX+vnV5OVOQEoOGfOtv94AYOzU3Fd7XxHh6Lq6rlurqUx0W0J8Z1AnbW18yotonaYuOJBDBXls4A+bGpaBCTz86YEBtQCvVBSPAPIbY0oP1/aiAcxABU1Ny+2tclvbFjo5FgUF9uenNwNDLnmpkWEnV1TPRcY1O1tS4H6i4umA/0MDK2K8tlAwRqHpP1uoXgQKKraWpcClTY3LQZaCLQ5NaUX5OaWJY3++SeTC/AgBmA4AXUClUJs9ver8fKsAAYEUJCws4G21dXNB1oFdD/Qz8DQTk4C+bm2dn6DZ9bRiDQ8iAEYt8CoBpK5YBIYw0AEEZwSXX4oMB4PYoC6gCzAcDqrjGzEsMfen2xEmbMv1rSTjRi26dqRjShz9o2+6WQjBrSShQSkZAIADvW/HLrLY6cAAAAASUVORK5CYII=");
}
.flag-netherlands {
  background-size: cover;
  background-position: center center;
  background: url("../assets/nl.svg");
}
.flag-frans {
  background-size: cover;
  background-position: center center;
  background: url("../assets/fr.svg");
}
</style>
