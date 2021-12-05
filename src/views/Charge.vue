<template>
  <div class="container">
    <h1 v-if="concluida">Pagamento concluido!</h1>
    <div class="text-center" v-else-if="loading || !charge.produto">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <div class="card pagamentos-card" v-else>
      <img v-bind:src="charge.qrCode" height="400px" width="400px" />
      <div class="card-detail">
        <h1>{{ charge.produto.name }}</h1>
        <h2>R$ {{ charge.produto.price }}</h2>
        <h6>{{ charge.produto.description }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import chargeService from "../services/chargeService";

export default {
  data() {
    return {
      charge: {},
      concluida: false,
      loading: false,
    };
  },
  methods: {
    getInfoChargeLoop() {
      this.interval = setInterval(async () => {
        try {
          let info = await chargeService.getChargeInfo(this.charge._id);
          if (info.status === "CONCLUIDA") {
            this.concluida = true;
            clearInterval(this.interval);
          }
        } catch (e) {
          console.log("e", e);
          alert("error", e);
        }
      }, 5000);
    },
    async getCharge() {
      this.loading = true;
      const selectedProdutoId = this.$store.state.selectedProdutoId;

      try {
        if (!selectedProdutoId) {
          return this.$router.push("produtos");
        }
        this.charge = await chargeService.getCharge(selectedProdutoId);
        this.getInfoChargeLoop();
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
