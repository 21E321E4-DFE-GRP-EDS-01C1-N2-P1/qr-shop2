<template>
  <tr>
    <td>{{ produto.name }}</td>
    <td>{{ produto.price }}</td>
    <td>{{ produto.sold ? "SIM" : "NÃO" }}</td>
    <td>{{ produto.buyerUser && produto.buyerUser.name }}</td>
    <td>{{ produto.buyerUser && produto.buyerUser.endereco }}</td>

    <td align="right">
      <div class="text-center" style="max-width: 155px" v-if="loading">
        <b-spinner label="Spinning"></b-spinner>
      </div>
      <button
        type="button"
        class="btn btn-success"
        @click="handleDeliver(produto._id)"
        v-else-if="!produto.delivered && produto.sold"
        style="min-width: 155px"
      >
        Entregar Produto
      </button>
      <p v-else-if="produto.delivered">Entregue</p>
      <button
        type="button"
        class="btn btn-danger"
        @click="handleDelete(produto._id)"
        v-else
        style="min-width: 155px"
      >
        Deletar
      </button>
    </td>
  </tr>
</template>

<script>
import produtoService from "../../services/produtoService";

export default {
  name: "DashboardItem",
  props: ["produto"],

  data() {
    return { loading: false };
  },
  methods: {
    handleDelete(produtoId) {
      this.loading = true;
      produtoService
        .deleteProduto(produtoId)
        .then(() => {
          this.$store.commit("deleteProduto", produtoId);
        })
        .catch((e) => alert(e.error || e))
        .finally(() => (this.loading = false));
    },
    handleDeliver(produtoId) {
      this.loading = true;

      produtoService
        .deliverProduto(produtoId)
        .then((produto) => {
          this.$store.commit("setMeuProduto", produto);
        })
        .catch((e) => alert(e.error || e))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped></style>
