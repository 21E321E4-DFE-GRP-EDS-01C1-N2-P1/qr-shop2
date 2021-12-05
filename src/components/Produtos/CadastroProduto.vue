<template>
  <form @submit="handleLogin">
    <div id="app" class="cadastro-produto-div">
      <div class="login_box">
        <input
          name="name"
          required
          v-model="name"
          placeholder="Nome do produto"
        />
        <input
          name="description"
          required
          type="text"
          v-model="description"
          placeholder="Descricao do produto"
        />

        <input
          name="price"
          required
          type="text"
          v-model="price"
          placeholder="Preco"
        />
        <input
          name="image"
          required
          type="text"
          v-model="image"
          placeholder="Imagem do Produto"
        />
        <button>Cadastrar</button>
      </div>
    </div>
  </form>
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
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
</style>
