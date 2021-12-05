<template>
  <div class="container">
    <div class="text-center" v-if="loading">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <div class="card pagamentos-card" v-else>
      <img v-bind:src="qrCode" height="400px" width="400px" />
      <div class="card-detail">
        <h1>{{ produto.name }}</h1>
        <h2>R$ {{ produto.price }}</h2>
        <h6>{{ produto.description }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import chargeService from "../services/chargeService";

export default {
  data() {
    return {
      qrCode: null,
      produto: {},
      loading: false,
    };
  },
  methods: {
    async getCharge() {
      this.loading = true;
      const selectedProdutoId = this.$store.state.selectedProdutoId;

      try {
        if (!selectedProdutoId) {
          throw { error: "Id nao selecionado" };
        }
        let charge = await chargeService.getCharge(selectedProdutoId);
        this.produto = charge.produto;
        this.qrCode = charge.qrCode;
      } catch (e) {
        alert(e.error || e);
        console.log("e", e);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    console.log("charges");
    this.getCharge();
  },
};
</script>

<style>
.pagamentos-card {
  display: flex;
  flex-direction: row;
}

.card-detail {
  padding: 12px;
}
</style>
