<template>
  <b-container>
    <b-form @submit="handleLogin">
      <h3 class='text-center mb-4'>Faça Seu Login ou Cadastre-se</h3>
      <b-form-group>
        <b-form-input name="name" required v-model="email" class='form-input'/>
        <b-form-input name="password" required type="password" v-model="password" class='form-input'/>
        <div style="display: flex;">
          <b-button block variant='outline-primary' style="margin-right: 5px" type="submit">Login</b-button>
          <b-button block variant='outline-secondary' style="margin-top: 0; margin-left: 5px" @click="goToCadastro" class="clickable">Cadastre-se</b-button>
        </div>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import authService from "../services/authService";
import { setTokenLocalStorage } from "../localstorage/tokenStorage";

export default {
  data() {
    return {
      email: "rodrigo@gmail.com",
      password: "123456",
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();

      return authService
        .login(this.email, this.password)
        .then((resposta) => {
          setTokenLocalStorage(resposta.token);
          this.$store.commit("setAuth", resposta);
          this.$router.push("produtos");
        })
        .catch((e) => alert(e.error || e));
    },
    goToCadastro() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>

</style>
