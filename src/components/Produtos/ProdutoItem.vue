<template>
  <b-card class="m-3" align="center" style="max-width: 20%;">
    <template #header>
        <b-card-title class="text-center align-bottom">
            {{produto.titulo}}
        </b-card-title>
    </template>
    <b-card-img :src='produto.imagem' alt='Imagem' />

    <template #footer>
        <small class="text-muted">R${{produto.preco}},00</small>
    </template>
  </b-card>
</template>

<script>
export default {
    name: "ProdutoItem",
    props: {
      produtos: Array,
      produto: Object
    }
}
</script>

<style scoped>
image {
    max-width:100%;
    max-height:100%;
}

</style>