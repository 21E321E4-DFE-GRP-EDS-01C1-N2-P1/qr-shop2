<template>
  <div class="container">
    <h1 v-if="concluida">Pagamento concluido!</h1>
    <div class="text-center" v-else-if="loading">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <div class="card pagamentos-card" v-else>
      <img v-bind:src="produto.image" height="400px" width="400px" />
      <div class="card-detail">
        <h1>{{ produto.name }}</h1>
        <h2>R$ {{ produto.price }}</h2>
        <h6>{{ produto.description }}</h6>
        <div v-if="charge.produto">
          <img v-bind:src="charge.qrCode" height="250px" width="250px" />
        </div>
        <div v-else />
      </div>
    </div>
  </div>
</template>

<script>
import chargeService from "../services/chargeService";
import { getTokenLocalStorage } from "../localstorage/tokenStorage";

export default {
  data() {
    return {
      charge: {},
      produto:
        this.$store.state.produtos &&
        this.$store.state.selectedProdutoId &&
        this.$store.state.produtos[this.$store.state.selectedProdutoId],
      concluida: false,
      loading: false,
    };
  },
  methods: {
    getInfoChargeLoop() {
      console.log("4");
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
        console.log("1");
        console.log(selectedProdutoId);
        if (!selectedProdutoId) {
          return this.$router.push("/produtos");
        }
        const charge = await chargeService.getCharge(selectedProdutoId);
        console.log("charge", charge);
        this.charge = charge;
        console.log("this.charge", this.charge);
        this.loading = false;
        console.log("3");
        this.getInfoChargeLoop();
      } catch (e) {
        this.loading = false;
        alert(e.error || e);
        console.log("e", e);
      }
    },
  },
  beforeCreate() {
    if (!this.$store.state.produtos || !this.$store.state.selectedProdutoId) {
      return this.$router.push("/produtos");
    }
  },
  mounted() {
    const isLoggedIn = getTokenLocalStorage();
    if (isLoggedIn) {
      console.log("1");
      return this.getCharge();
    }
    return alert("IS NOT LOGGED IN");
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
