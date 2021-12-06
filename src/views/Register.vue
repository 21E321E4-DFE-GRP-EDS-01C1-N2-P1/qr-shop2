<template>
  <b-container>
    <b-form @submit="handleCadastro" class="login_form">
      <h2 style="text-align: center;">Cadastro</h2>
      <b-form-group class="login_box">
        <b-form-input name="nome" required v-model="name" placeholder="Nome" class='form-input'/>
        <b-form-input name="cpf" required v-model="cpf" placeholder="CPF" class='form-input'/>
        <b-form-input name="email" required v-model="email" placeholder="Email" class='form-input'/>
        <b-form-input name="endereco" required v-model="endereco" placeholder="Endereço" class='form-input'/>
        <b-form-input
          name="password"
          required
          type="password"
          v-model="password"
          placeholder="Senha"
          class='form-input'
        />
        <b-form-input
          name="password2"
          required
          type="password"
          v-model="password2"
          placeholder="Confirmacao Senha"
          class='form-input'
        />
        <b-button type="submit" block variant='outline-primary'>Confirmar</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import authService from "../services/authService";

export default {
  data() {
    return {
      name: "",
      cpf: "",
      email: "",
      endereco: "",
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
        endereco: this.endereco,
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

<style></style>
