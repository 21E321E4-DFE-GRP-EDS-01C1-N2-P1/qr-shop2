<template>
  <div id="app">
    <Header/>
    <Home>
      
      <ProdutoLista>
        <ProdutoItem :produto='produto' :produtos='produtos' v-for="produto in produtos" :key="produto.id"/>
      </ProdutoLista>
      
    </Home>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/templates/header/Header.vue";
import Footer from "./components/templates/footer/Footer.vue";
import Home from "./components/home/Home.vue";
import ProdutoItem from "./components/Produtos/ProdutoItem.vue";
import ProdutoLista from "./components/Produtos/ProdutoLista.vue";

export default {
  components: {
    Header,
    Footer,
    Home,
    ProdutoItem,
    ProdutoLista
},
  data() {
    return {
      produtos: [],
      produto: {
        id: Number,
        titulo: String,
        descricao: String,
        preco: String,
        imagem: Number
      }
    }
  },
  methods: {
    carregar () {
      fetch('http://21.vps-kinghost.net:1339/produto')
      .then(res => res.json())
      .then(data => this.produtos = data)
    }
  },
  mounted() {
    this.carregar()
  }
}

</script>

<style>
</style>