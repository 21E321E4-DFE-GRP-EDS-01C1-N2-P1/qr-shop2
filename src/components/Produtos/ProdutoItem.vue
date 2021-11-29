<template>
  <b-card class="m-3">
    <b-card-img-lazy :src='produto.imagem' alt='Imagem' style="max-height: 20em;" class="text-center"/>
    <b-card-title class="text-center">
        {{produto.titulo}}
    </b-card-title>
    <b-card-sub-title class="text-center">
      R${{produto.preco}},00
    </b-card-sub-title>
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

<style>

</style>