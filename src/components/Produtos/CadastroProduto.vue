<template>
  <b-container class="cadastro-produto-div">
    <b-form @submit="handleLogin">
      <h3 class='text-center mb-4'>Cadastre Seu Produto</h3>
      <b-form-group>
          <b-form-input
            name="name"
            required
            v-model="name"
            placeholder="Nome do produto"
            class='form-input'
          />

          <b-form-input
            name="description"
            required
            type="text"
            v-model="description"
            placeholder="Descricao do produto"
            class='form-input'
          />

          <b-form-input
            name="price"
            required
            type="text"
            v-model="price"
            placeholder="Preco"
            class='form-input'
          />
          
          <b-form-input
            name="image"
            required
            type="text"
            v-model="image"
            placeholder="Imagem do Produto"
            class='form-input'
          />
          
          <div style="display: flex; margin-top: 10px;">
            <b-button style="margin-right: 5px" block variant='outline-dark' type="submit">Cadastrar</b-button>
            <b-button block type="reset" variant="outline-danger" style="margin-top: 0; margin-left: 5px">Reset</b-button>
          </div>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import produtoService from "../../services/produtoService";

export default {
  data() {
    return {
      name: "",
      price: "",
      description: "",
      image: "",
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();

      const produto = {
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
      };

      return produtoService
        .createProduto(produto)
        .then((novoProduto) => {
          alert("Produto cadastrado com sucesso");
          this.$store.commit("addProduto", novoProduto);
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
.cadastro-produto-div {
  margin-top: 60px;
}
.form-input {
  margin: 5px 0 10px 0;
}
</style>
