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

function deliverProduto(produtoId) {
  return axios.put(`/produto/deliver/${produtoId}`);
}

const produtoService = {
  getProdutos,
  getMeusProdutos,
  createProduto,
  deleteProduto,
  deliverProduto,
};

export default produtoService;
