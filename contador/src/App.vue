<template>
  <div id="app">
    <p class="text-center mb-0">
      <img alt="Vue logo" src="./assets/logo.png">
    </p>
    <h1 class="text-center"> {{ text }} </h1>

    <div class="container">
      <div class="row">
        <div class="col col-6">
          <counter></counter>
        </div>
        <div class="col col-6">
          <ShowTotals></ShowTotals>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import counter from '@/components/Counter'
import ShowTotals from '@/components/ShowTotals'

export default {
  name: 'App',
  components: {
    counter, ShowTotals,
  },
  data(){
    return {
      text: "Componente principal"
    }
  }
}
</script>

<style lang="scss">
</style>
