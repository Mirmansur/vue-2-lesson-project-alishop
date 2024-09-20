<template>
  <div>
    <Header />

    <div v-if="$route.name === 'Home'">
      <Carusel />
      <Home />
    </div>

    <RouterView />

    <div class="mt-40">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../header/Header.vue";
import Carusel from "../corusel/Carusel.vue";
import Home from "../home/Home.vue";
import { RouterView } from "vue-router";
import Footer from "../footer/Footer.vue";

export default {
  components: {
    Header,
    Carusel,
    Home,
    RouterView,
    Footer,
  },
};
</script>

<style></style>
