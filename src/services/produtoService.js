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

function deleteProduto(produtoId) {
  return axios.delete(`/produto/${produtoId}`);
}

const produtoService = {
  getProdutos,
  getMeusProdutos,
  createProduto,
  deleteProduto,
};

export default produtoService;
