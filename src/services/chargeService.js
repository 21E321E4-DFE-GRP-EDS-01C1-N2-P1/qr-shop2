import axios from "./axios";

function getCharge(produtoId) {
  return axios.get(`/charge/${produtoId}`);
}

function getChargeUnkown(produtoId, unknownUser) {
  return axios.post(`/charge/${produtoId}`, unknownUser);
}

function getChargeInfo(chargeId) {
  return axios.get(`/charge/info/${chargeId}`);
}

const chargeService = {
  getCharge,
  getChargeUnkown,
  getChargeInfo,
};

export default chargeService;
