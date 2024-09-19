<template>
  <div>
    <Header />
    <Carusel />
    <Home />
    <div class="mt-40">
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from "../header/Header.vue";
import Carusel from "../corusel/Carusel.vue";
import Home from "../home/Home.vue";
import Footer from "../footer/Footer.vue";

export default {
  components: {
    Header,
    Carusel,
    Home,
    Footer,
  },
};
</script>
<style></style>
