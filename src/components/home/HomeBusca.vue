<template>
    <b-input-group class="my-5 text-center" style="flex-direction: column;">
        <label for="filtro"><h5>Busca:</h5></label>
        <b-form-input placeholder="Buscar um produto" type="search" v-model="filtro" :id='filtro' style="width: 100%"></b-form-input>
    </b-input-group>
</template>
<script>
export default {
    name: 'HomeBusca',
    data() {
      return {
        filtro: ''
      }
    },
    methods: {
        filtrar(){
            
        }
    }
}
</script>
<style scoped>
    
</style>