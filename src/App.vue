<template>
  <div class="app-div">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/templates/header/Header.vue";
import Footer from "./components/templates/footer/Footer.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: { Header, Footer },
};
</script>
<style>
.app-div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 800px;
}
</style>
