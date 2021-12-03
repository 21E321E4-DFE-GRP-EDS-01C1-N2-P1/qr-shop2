import axios from "./axios";

function getProdutos() {
  return axios.get("/produto");
}

function createProduto(produto) {
  return axios.post("/produto", produto);
}

const produtoService = {
  getProdutos,
  createProduto,
};

export default produtoService;
