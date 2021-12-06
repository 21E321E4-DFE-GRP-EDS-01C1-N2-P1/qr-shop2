<template>
  <b-container fluid class="bg-dark">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand to="/">QrShop</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/produtos">Produtos</b-nav-item>
          <b-nav-item to="/dashboard" v-if="$store.state.auth"
            >Dashboard</b-nav-item
          >
          <b-nav-item to="login" v-if="!$store.state.auth">Login</b-nav-item>
          <b-nav-item @click="handleLogout" v-else>Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import authService from "../../../services/authService";
import { clearLocalStorage } from "../../../localstorage/tokenStorage";
import Router from "../../../router";

export default {
  name: "Header",
  mounted() {
    authService
      .getAuthFromToken()
      .then((auth) => {
        console.log("setting auth", auth);
        this.$store.commit("setAuth", auth);
      })
      .catch((e) => console.log("e", e));
  },
  methods: {
    handleLogout() {
      this.$store.commit("setAuth", null);
      clearLocalStorage();
      Router.push("/login");
    },
  },
};
</script>

<style scoped></style>
