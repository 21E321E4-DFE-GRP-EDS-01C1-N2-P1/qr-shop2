import axios from "./axios";

function getCharge(produtoId) {
  return axios.get(`/charge/${produtoId}`);
}

function getChargeInfo(chargeId) {
  return axios.get(`/charge/info/${chargeId}`);
}

const chargeService = {
  getCharge,
  getChargeInfo,
};

export default chargeService;
