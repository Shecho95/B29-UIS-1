<template>
  <div id="app">
    <layout>
      <template slot="products">
        <products-list></products-list>
      </template>
      <template slot="cart">
        <cart></cart>
      </template>
    </layout>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import ProductsList from '@/components/ProductsList.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'App',
  components: {
    'layout': BaseLayout, ProductsList, Cart
  }
}
</script>
