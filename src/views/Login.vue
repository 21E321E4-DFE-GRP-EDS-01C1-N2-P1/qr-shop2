<template>
  <div id="app">
    <form @submit="handleLogin" class="login_form">
      <div class="login_box">
        <input name="name" required v-model="email" />
        <input name="password" required type="password" v-model="password" />
        <button>Login</button>
      </div>
    </form>
  </div>
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
          this.$router.push("produtos");
        })
        .catch((e) => alert(e.error));
    },
  },
};
</script>

<style>
.login_form {
  display: flex;
  margin-top: 230px;
  justify-content: center;
}

.login_box {
  display: flex;
  width: 300px;
  flex-direction: column;
}
</style>
