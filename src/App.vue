<template>
  <div id="app">
    <Header />
    <Home>
      <ProdutoLista>
        <ProdutoItem
          :produto="produto"
          :produtos="produtos"
          v-for="produto in produtos"
          :key="produto.id"
        />
      </ProdutoLista>
    </Home>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/templates/header/Header.vue";
import Footer from "./components/templates/footer/Footer.vue";
import Home from "./components/home/Home.vue";
import ProdutoItem from "./components/Produtos/ProdutoItem.vue";
import ProdutoLista from "./components/Produtos/ProdutoLista.vue";
import produtoService from "./services/produtoService";

export default {
  components: {
    Header,
    Footer,
    Home,
    ProdutoItem,
    ProdutoLista,
  },
  data() {
    return {
      produtos: [],
      produto: {
        id: Number,
        name: String,
        description: String,
        price: String || Number,
        image: String,
      },
    };
  },
  methods: {
    carregar() {
      return produtoService
        .getProdutos()
        .then((produtos) => {
          this.produtos = JSON.parse(JSON.stringify(produtos));
        })
        .catch((e) => alert(e.error));
    },
  },
  mounted() {
    this.carregar();
  },
};
</script>

<style></style>
