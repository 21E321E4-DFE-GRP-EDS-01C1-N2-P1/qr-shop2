<template>
  <div class="container">
    <h1 v-if="concluida">Pagamento concluido!</h1>

    <b-card no-body class="overflow-hidden my-5" v-else>
      <b-row no-gutters>
      <b-col md="6">
        <b-img v-bind:src="produto.image" alt="Image" fluid center/>
      </b-col>
      <b-col md="6" >
        <b-card-body>
          <b-card-title>{{ produto.name }}</b-card-title>
          <b-card-sub-title>R$ {{ produto.price }}</b-card-sub-title>
          <b-card-text>{{ produto.description }}</b-card-text>
        </b-card-body>
        <div class="text-center" v-if="loading" style="margin-top: 80px">
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>

        <b-container v-else>
          <div v-if="charge.produto">
            <b-img v-bind:src="charge.qrCode" fluid center/>
          </div>
          <div v-else>
            <b-form @submit="handleGetQrCode">
              <b-form-group>
                <b-form-input
                  name="name"
                  placeholder="Nome"
                  required
                  v-model="unknownUser.name"
                  class='form-input'
                />
                <b-form-input
                  name="cpf"
                  placeholder="CPF"
                  required
                  v-model="unknownUser.cpf"
                  class='form-input'
                />
                <b-form-input
                  name="endereco"
                  required
                  placeholder="Endereco"
                  v-model="unknownUser.endereco"
                  class='form-input'
                />
                <div style="display: flex">
                  <b-button
                    block
                    variant="outline-secondary"
                    class="clickable"
                    type="submit"
                  >
                    Pegar QRCode
                  </b-button>
                </div>
              </b-form-group>
            </b-form>
          </div>
        </b-container>
      </b-col>
      </b-row>
    </b-card>
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

</style>
