<template>
  <ProdutoLista>
    <ProdutoItem
      :produto="produto"
      :produtos="produtos"
      v-for="produto in produtos"
      :key="produto.id"
    />
  </ProdutoLista>
</template>

<script>
import ProdutoItem from "../components/Produtos/ProdutoItem.vue";
import ProdutoLista from "../components/Produtos/ProdutoLista.vue";
import produtoService from "../services/produtoService";

export default {
  components: {
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
