<template>
  <tr>
    <td>{{ produto.name }}</td>
    <td>{{ produto.price }}</td>
    <td>{{ produto.sold }}</td>
    <td>
      <button
        type="button"
        class="btn btn-danger"
        @click="handleDelete(produto._id)"
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
  },
};
</script>

<style scoped></style>
