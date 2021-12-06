<template>
<b-container>
  <div v-if="isLogged">
    <h4 class="titulo">Olá! {{this.$store.state.auth && this.$store.state.auth.name}}</h4>
    <h2 class="titulo">Bem Vindo ao QR-Shop!</h2>
  </div>
  <div v-else>
    <h2 class="titulo">Bem Vindo ao QR-Shop!</h2>
    <h4 class="titulo">Para mais opções, faça login</h4>
  </div>
</b-container>
</template>

<script>
import { getTokenLocalStorage } from "../localstorage/tokenStorage";

export default {
  name: "Home",
  data() {
    return {
      isLogged: getTokenLocalStorage()
    }
  },
};
</script>

<style>
.titulo {
  text-align: center
}
</style>
