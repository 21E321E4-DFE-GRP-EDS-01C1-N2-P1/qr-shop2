import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: null,
    produtos: {},
    selectedProdutoId: "",
    produto: {
      id: Number,
      name: String,
      description: String,
      price: String || Number,
      image: String,
    },
  },

  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
    setProdutos(state, produtos) {
      state.produtos = produtos;
    },
    addProduto(state, novoProduto) {
      state.produtos = [...state.produtos, novoProduto];
    },
    setSelectedProdutoId(state, selectedProdutoId) {
      state.selectedProdutoId = selectedProdutoId;
    },
  },
});

export default store;
