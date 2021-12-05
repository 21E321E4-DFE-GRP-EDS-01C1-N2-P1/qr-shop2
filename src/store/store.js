import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    produtos: [],
    produto: {
      id: Number,
      name: String,
      description: String,
      price: String || Number,
      image: String,
    },
  },

  mutations: {
    setProdutos(state, produtos) {
      state.produtos = produtos;
    },
  },
});

export default store;
