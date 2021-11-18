<template>
    <div id="car" v-if="cart.length">
        <h1>Carrito</h1>
        <b-table striped hover :items="cart" :fields="fields">
            <template #cell(actions)="row">
                <b-button variant="danger" @click="removeItem(row)">
                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                </b-button>
            </template>
        </b-table>
        <b-alert show variant="success"> Valor total: Cop. ${{ totalCost }} </b-alert>
    </div>
    <b-alert variant="info" v-else show> No tienes productos en tu carrito </b-alert>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Cart',
    data(){
        return {
            fields: ['title', 'qty', 'price', 'actions']
        }
    },
    computed:{
        ...mapState('cart', ['cart']),
        ...mapGetters('cart', ['totalCost'])
    },
    methods: {
        ...mapMutations('cart', ['removeProduct']),
        removeItem(row){
            this.removeProduct(row.item);
        }
    }
}
</script>