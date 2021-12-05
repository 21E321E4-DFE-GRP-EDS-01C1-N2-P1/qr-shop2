<template>
  <b-container>
    <b-input-group class="my-5 text-center" style="flex-direction: column;">
        <label for="filtro"><h5>Busca:</h5></label>
        <b-form-input placeholder="Buscar um produto" type="search" v-model="filtro" :id='filtro' style="width: 100%"></b-form-input>
    </b-input-group>

    <div v-if="filtro" align='center'>
      <b-card class="m-3" align="center" v-for="(item) in listaFiltrada" :key='item.id' style="max-width: 20%; max-height: 20%;">
        <template #header>
            <b-card-title class="text-center align-bottom">
                {{item.titulo}}
            </b-card-title>
        </template>
        <b-card-img :src='item.imagem' alt='Imagem' class="text-center" />

        <template #footer>
            <small class="text-muted">R${{item.preco}},00</small>
        </template>
      </b-card>
    </div>

    <slot v-else></slot>
  </b-container>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      filtro: ''
    }
  },
  props: [
    'produto', 'produtos'
  ],
  computed: {
    listaFiltrada() {
      return (
        this.produtos.filter((produto) => {
        const regex = new RegExp(this.filtro, "g")
        return regex.exec(produto.titulo) || regex.exec(produto.titulo.toLowerCase()) || regex.exec(produto.titulo.toUpperCase()) || regex.exec(produto.preco)
        })
      )
    }  
  }
}
</script>

<style>

</style>