<template>
  <div>
    <b-button
      class="clickable m-3"
      @click="isCreatingProduct = true"
      v-if="!isCreatingProduct"
      size='lg'
      variant='outline-secondary'
    >
      Cadastro de Produtos
    </b-button>

    <CadastroProduto v-else />
    <div class="text-center" v-if="loading">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <div class="produtos-list" v-else>
      <ProdutoItem
        :produto="produto"
        v-for="produto in Object.values($store.state.produtos)"
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
      loading: false,
    };
  },
  methods: {
    carregar() {
      this.loading = true;
      return produtoService
        .getProdutos()
        .then((produtos) => {
          this.$store.commit("setProdutos", produtos);
        })
        .catch((e) => alert(e))
        .finally(() => (this.loading = false));
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
