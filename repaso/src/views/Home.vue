<template>
  <div class="home">
    <banner :textTitle="'Esto es el titulo'"
            :subText="'Esto es el texto descriptivo de bajo en mi comp'"
            :btn1="{
              text: 'Call to action',
              url: '/top10'
            }"
            :btn2="{
              text: 'Otro btn',
              url: '/otro'
            }"
    > </banner>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="product in products" :key="product.id">
            <product-item :product="product"> </product-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/layout/Banner'
import ProductItem from '@/components/products/ProductItem'

import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Banner, ProductItem
  },
  computed: {
    ...mapState('products', ['products'])
  },
  created(){
    this.fetchProducts();
  },
  methods: {
    ...mapActions('products', ['fetchProducts'])
  }
}
</script>
