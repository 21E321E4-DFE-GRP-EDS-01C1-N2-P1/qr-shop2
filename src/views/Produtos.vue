<template>
  <div>
    <a
      class="clickable"
      @click="isCreatingProduct = true"
      v-if="!isCreatingProduct"
      >Cadastro produto</a
    >
    <CadastroProduto v-else />
    <div class="produtos-list">
      <ProdutoItem
        :produto="produto"
        v-for="produto in JSON.parse(JSON.stringify($store.state.produtos))"
        :key="produto.id"
      />
    </div>
  </div>
</template>

<script>
import ProdutoItem from "../components/Produtos/ProdutoItem.vue";
import produtoService from "../services/produtoService";
import CadastroProduto from "../components/Produtos/CadastroProduto";

export default {
  components: {
    ProdutoItem,
    CadastroProduto,
  },
  data() {
    return {
      isCreatingProduct: false,
    };
  },
  methods: {
    carregar() {
      return produtoService
        .getProdutos()
        .then((produtos) => {
          produtos = JSON.parse(JSON.stringify(produtos));
          this.$store.commit("setProdutos", produtos);
        })
        .catch((e) => alert(e));
    },
  },
  mounted() {
    this.carregar();
  },
};
</script>

<style>
.produtos-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
