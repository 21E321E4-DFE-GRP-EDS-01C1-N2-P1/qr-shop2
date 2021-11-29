<template>
  <b-container>
    <HomeBusca/>
    <slot></slot>
  </b-container>
</template>

<script>
import HomeBusca from "./HomeBusca.vue";
export default {
    name: "Home",
    components: { HomeBusca }
}
</script>

<style>

</style>