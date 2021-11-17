<template>
  <div id="app">
    <layout>
      <template slot="products">
        <products-list></products-list>
      </template>
      <template slot="cart">
        <h1>Carrito</h1>
      </template>
    </layout>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import ProductsList from '@/components/ProductsList.vue'

export default {
  name: 'App',
  components: {
    'layout': BaseLayout, ProductsList
  }
}
</script>
