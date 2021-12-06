<template>
  <b-container fluid>
    <b-button
      class="clickable m-3"
      @click="isCreatingProduct = true"
      v-if="!isCreatingProduct"
      size='lg'
      variant='outline-secondary'
    >
      Abrir Cadastro de Produtos
    </b-button>

    <CadastroProduto v-else>
    <b-button
      class="clickable m-3"
      @click="isCreatingProduct = false"
      v-if="isCreatingProduct"
      size='lg'
      variant='outline-danger'
    >
      Fechar Cadastro de Produtos
    </b-button>

    </CadastroProduto>
    <div class="text-center" v-if="loading">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>

    <b-container fluid v-else>

    <b-input-group class="my-5 text-center" style="flex-direction: column;">
        <label for="filtro"><h5>Busca:</h5></label>
        <b-form-input placeholder="Buscar um produto" type="search" v-model="filtro" :id='filtro' style="width: 100%"></b-form-input>
    </b-input-group>

      <b-row style="justify-content: space-evenly;" v-if="filtro">
        <ProdutoItem
          :produto="produto"
          v-for="(produto) in listaFiltrada"
          :key="produto.id"
        />
      </b-row>

      <b-row style="justify-content: space-evenly;" v-else>
        <ProdutoItem
          :produto="produto"
          v-for="produto in Object.values($store.state.produtos)"
          :key="produto.id"
        />
      </b-row>
    </b-container>
  </b-container>
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
      filtro: ''
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
  computed: {
    listaFiltrada() {
      let filterObject = {}
      let filterArray = Object.values(this.$store.state.produtos).filter((produto) => {
        const regex = new RegExp(this.filtro, "g")
        return regex.exec(produto.name) || regex.exec(produto.name.toLowerCase()) || regex.exec(produto.name.toUpperCase()) || regex.exec(produto.price)
      })
      filterArray.map(produto => filterObject[produto._id] = produto)
      return (
        filterObject
      )
    }  
    // listaFiltrada() {
    //   return (
    //     this.produtos.filter((produto) => {
    //     const regex = new RegExp(this.filtro, "g")
    //     return regex.exec(produto.titulo) || regex.exec(produto.titulo.toLowerCase()) || regex.exec(produto.titulo.toUpperCase()) || regex.exec(produto.preco)
    //     })
    //   )
    // }  
  },
  mounted() {
    this.carregar();
  },
};
</script>

<style>

</style>
