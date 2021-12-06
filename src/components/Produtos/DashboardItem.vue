<template>
  <tr>
    <td>{{ produto.name }}</td>
    <td>{{ produto.price }}</td>
    <td>{{ produto.sold ? "SIM" : "NÃO" }}</td>
    <td>{{ produto.buyerUser && produto.buyerUser.name }}</td>
    <td>{{ produto.buyerUser && produto.buyerUser.endereco }}</td>

    <td align="right">
      <button
        type="button"
        class="btn btn-success"
        @click="handleDeliver(produto._id)"
        v-if="!produto.delivered && produto.sold"
      >
        Confirmar Entrega
      </button>
      <p v-else-if="produto.delivered">Entregue</p>
    </td>
    <td align="right">
      <button
        type="button"
        class="btn btn-danger"
        @click="handleDelete(produto._id)"
        v-if="!produto.sold"
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

  methods: {
    handleDelete(produtoId) {
      produtoService
        .deleteProduto(produtoId)
        .then(() => {
          this.$store.commit("deleteProduto", produtoId);
        })
        .catch((e) => alert(e.error || e));
    },
    handleDeliver(produtoId) {
      produtoService
        .deliverProduto(produtoId)
        .then((produto) => {
          this.$store.commit("setMeuProduto", produto);
        })
        .catch((e) => alert(e.error || e));
    },
  },
};
</script>

<style scoped></style>
