<template>
  <b-card 
    class="m-3 clickable" 
    align="center" 
    @click="handleClickProduto"
  >
    <template #header>
      <b-card-title class="text-center align-bottom">
        {{ produto.name }}
      </b-card-title>
    </template>
    <b-card-img
      :src="produto.image"
      alt="Imagem"
      class="text-center"
      style="max-width: 50%; max-height: 100%"
    />

    <template #footer>
      <small class="text-muted">R${{ produto.price }}</small>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "ProdutoItem",
  props: ["produto"],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    handleClickProduto() {
      this.$store.commit("setSelectedProdutoId", this.produto._id);
      this.$router.push("/charge");
    },
  },
};
</script>

<style scoped>
image {
  max-width: 100%;
  max-height: 100%;
}

.clickable {
  cursor: pointer;
}
</style>
