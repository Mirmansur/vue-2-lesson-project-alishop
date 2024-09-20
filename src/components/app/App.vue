<template>
  <div>
    <Header />
    <div v-if="$route.name === 'Home'">
      <Carusel />
    </div>
    <RouterView v-if="selectedMovie" :movie="selectedMovie" />
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
    RouterView,
    Footer,
  },
  data() {
    return {
      selectedMovie: {
        id: 1,
        title: "Sample Movie",
        description: "This is a sample movie",
      },
    };
  },
};
</script>

<style></style>
