<template>
  <div id="app">
    <form @submit="handleCadastro" class="login_form">
      <div class="login_box">
        <h2>Cadastro</h2>
        <input name="nome" required v-model="name" placeholder="Nome" />
        <input name="cpf" required v-model="cpf" placeholder="CPF" />
        <input name="email" required v-model="email" placeholder="Email" />
        <input
          name="password"
          required
          type="password"
          v-model="password"
          placeholder="Senha"
        />
        <input
          name="password2"
          required
          type="password"
          v-model="password2"
          placeholder="Confirmacao Senha"
        />
        <button>Confirmar</button>
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../services/authService";

export default {
  data() {
    return {
      name: "",
      cpf: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    handleCadastro(e) {
      e.preventDefault();

      if (this.password !== this.password2) {
        return alert("Senhas nao sao iguais");
      }

      const user = {
        email: this.email,
        password: this.password,
        name: this.name,
        cpf: this.cpf,
      };
      return authService
        .register(user)
        .then(() => {
          alert("Usuario cadastrado com sucesso");
          this.$router.push("/login");
        })
        .catch((e) => alert(e.error || e));
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
