<template>
  <b-container>
    <b-row id='row'>
      <b-col class='bg-light text-dark mx-3'>
        <h3>Sobre</h3>
        <p>Aplicação em VueJS feita por Rodrigo Gomes e Thyago Teles.
          <br/>Tecnologias: Vue Router, VueX, MongoDB, NodeJS, ExpressJS</p>
      </b-col>
      <b-col class='bg-light text-dark mx-3'>
        <h3>Acompanhe nossas novidades</h3>
        <b-form>
          <b-input placeholder="Nome" class="my-2"></b-input>
          <b-input placeholder="E-mail"></b-input>
          <b-button class="my-2">Assinar</b-button>
        </b-form>
      </b-col>
      <b-col class='bg-light text-dark mx-3'>
        <h3>Links Rápidos</h3>
        <ul>
          <li>Sobre nós</li>
          <li>Entre em contato</li>
          <li>Contribua</li>
          <li>Política de Privacidade</li>
        </ul>  
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
@media (max-width: 770px){
.row {
  display: flex;
  flex-direction: column;
}
}

</style>