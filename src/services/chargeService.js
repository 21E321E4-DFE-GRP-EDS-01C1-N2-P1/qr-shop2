import axios from "./axios";

function getCharge(produtoId) {
  return axios.get(`/charge/${produtoId}`);
}

const chargeService = {
  getCharge,
};

export default chargeService;
