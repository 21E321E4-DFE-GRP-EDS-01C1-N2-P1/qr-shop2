import axios from "./axios";

function getProdutos() {
  return axios.get("/produto");
}

function getMeusProdutos() {
  return axios.get("/produto/meus");
}

function createProduto(produto) {
  return axios.post("/produto", produto);
}

const produtoService = {
  getProdutos,
  getMeusProdutos,
  createProduto,
};

export default produtoService;
