<template>
  <div class="SellingPagina">
    <NavigationPagina />
    <section class="hero">
      <div class="hero-text container">
        <h4> </h4>

        <h2>
          Selling on Marketplaces Page!
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
  name: "SellingPagina",
  components: {
    NavigationPagina,
    FooterPagina,
  },

};
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

  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
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
