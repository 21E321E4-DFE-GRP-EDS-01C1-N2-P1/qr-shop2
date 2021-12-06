<template>
  <div class="container">
    <h1 v-if="concluida">Pagamento concluido!</h1>

    <div class="card pagamentos-card" v-else>
      <img v-bind:src="produto.image" height="400px" width="400px" />
      <div class="card-detail">
        <h1>{{ produto.name }}</h1>
        <h2>R$ {{ produto.price }}</h2>
        <h6>{{ produto.description }}</h6>
        <div class="text-center" v-if="loading" style="margin-top: 80px">
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>
        <div v-else>
          <div v-if="charge.produto">
            <img v-bind:src="charge.qrCode" height="250px" width="250px" />
          </div>
          <div v-else>
            <b-form @submit="handleGetQrCode">
              <b-form-group>
                <b-form-input
                  name="name"
                  placeholder="Nome"
                  required
                  v-model="unknownUser.name"
                />
                <b-form-input
                  name="cpf"
                  placeholder="CPF"
                  required
                  v-model="unknownUser.cpf"
                />
                <b-form-input
                  name="endereco"
                  required
                  placeholder="Endereco"
                  v-model="unknownUser.endereco"
                />
                <div style="display: flex">
                  <b-button
                    block
                    variant="outline-secondary"
                    style="margin-top: 0; margin-left: 5px"
                    class="clickable"
                    type="submit"
                    >Pegar QRCode</b-button
                  >
                </div>
              </b-form-group>
            </b-form>
          </div>
        </div>
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
      unknownUser: {},
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
        if (!selectedProdutoId) {
          return this.$router.push("/produtos");
        }
        const charge = await chargeService.getCharge(selectedProdutoId);
        this.charge = charge;
        this.loading = false;
        this.getInfoChargeLoop();
      } catch (e) {
        this.loading = false;
        alert(e.error || e);
      }
    },
    async handleGetQrCode(e) {
      e.preventDefault();
      this.loading = true;
      try {
        const charge = await chargeService.getChargeUnkown(
          this.$store.state.selectedProdutoId,
          this.unknownUser
        );
        this.charge = charge;
        this.loading = false;
        this.getInfoChargeLoop();
      } catch (e) {
        this.loading = false;
        alert(e.error || e);
      }
    },
  },
  beforeCreate() {
    if (!this.$store.state.produtos || !this.$store.state.selectedProdutoId) {
      return this.$router.push("/produtos");
    }
  },

  unmounted() {
    clearInterval(this.interval);
  },
  mounted() {
    const isLoggedIn = getTokenLocalStorage();
    if (isLoggedIn) {
      return this.getCharge();
    }
    return;
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
