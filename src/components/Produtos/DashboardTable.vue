<template>
  <div class="text-center" v-if="loading">
    <b-spinner variant="success" label="Spinning"></b-spinner>
  </div>
  <table class="table table-responsive" v-else>
    <thead class="thead-dark">
      <tr>
        <th scope="col">Produto</th>
        <th scope="col">Preco</th>
        <th scope="col">Vendido</th>
        <th scope="col">Comprador</th>
        <th scope="col">Endereco</th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody v-if="Object.keys($store.state.meusProdutos).length">
      <DashboardItem
        :produto="produto"
        v-for="produto in Object.values($store.state.meusProdutos)"
        :key="produto.id"
      />
    </tbody>
    <tbody v-else>
      <tr>
        <td colSpan="4" align="center" height="283">
          <h4 style="margin-top: 80px">Sem Produtos</h4>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import DashboardItem from "./DashboardItem.vue";
import produtoService from "../../services/produtoService";
import { getTokenLocalStorage } from "../../localstorage/tokenStorage";

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
      const isLogged = getTokenLocalStorage();
      console.log("isLogged", isLogged);
      if (!isLogged) {
        return this.$router.push("/produtos");
      }
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
