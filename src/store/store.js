import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: null,
    produtos: {},
    meusProdutos: {},
    selectedProdutoId: "",
  },

  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
    setProdutos(state, produtos) {
      state.produtos = produtos;
    },
    setMeusProdutos(state, meusProdutos) {
      state.meusProdutos = meusProdutos;
    },
    addProduto(state, novoProduto) {
      state.produtos = { ...state.produtos, [novoProduto._id]: novoProduto };
    },

    deleteProduto(state, produtoId) {
      let copyProdutos = { ...state.meusProdutos };
      delete copyProdutos[produtoId];
      state.meusProdutos = copyProdutos;
    },
    setSelectedProdutoId(state, selectedProdutoId) {
      state.selectedProdutoId = selectedProdutoId;
    },
  },
});

export default store;
