<template>
  <div>
    <Header />
    <Carusel />
    <Home />
  </div>
</template>
<script>
import Header from "../header/Header.vue";
import Carusel from "../corusel/Carusel.vue";
import Home from "../home/Home.vue";

export default {
  components: {
    Header,
    Carusel,
    Home,
  },
};
</script>
<style></style>
