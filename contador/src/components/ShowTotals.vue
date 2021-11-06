<template>
<div>
    <h1>Componente de resultados</h1>
    <p class="alert alert-succes text-center fs-3">
        Puntos totales: {{ totalCount }}
    </p>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Counter",
    computed: {
        ...mapState(['counter']),
        totalCount(){
            return `${ this.counter * 5 } pts`
        }
    },
    methods: {
    }
}
</script>