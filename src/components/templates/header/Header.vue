<template>
  <b-container fluid class='bg-dark'>
    <b-navbar toggleable='sm' type='dark' variant='dark'>
      <b-navbar-brand to="/">QrShop</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav> 
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>