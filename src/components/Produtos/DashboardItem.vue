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
export default {
  name: "DashboardItem",
  props: ["produto"],

  methods: {
    handleDelete(produtoId) {
      console.log("produtoId", produtoId);
    },
  },
};
</script>

<style scoped></style>
