<template>
  <div class="text-center" v-if="loading">
    <b-spinner variant="success" label="Spinning"></b-spinner>
  </div>
  <table class="table" v-else>
    <thead class="thead-dark">
      <tr>
        <th scope="col">Produto</th>
        <th scope="col">Preco</th>
        <th scope="col">Sold</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <DashboardItem
        :produto="produto"
        v-for="produto in Object.values($store.state.meusProdutos)"
        :key="produto.id"
      />
    </tbody>
  </table>
</template>

<script>
import DashboardItem from "./DashboardItem.vue";
import produtoService from "../../services/produtoService";

export default {
  components: {
    DashboardItem,
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
        .getMeusProdutos()
        .then((meusProdutos) => {
          this.$store.commit("setMeusProdutos", meusProdutos);
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

<style></style>
