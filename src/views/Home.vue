<template>
  <div>
    <Header/>

    <Footer/>
  </div>
</template>

<script>
import Header from "../components/templates/header/Header.vue";
import Footer from "../components/templates/footer/Footer.vue";

// @ is an alias to /src


export default {
    name: "Home",
    components: { Header, Footer}
}
</script>
