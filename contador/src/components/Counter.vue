<template>
<div>
    <h1 class="mb-4">Componente contador</h1>
    <button class="btn btn-success text-center w-100 btn-lg"
        @click="increment(1)"
    >
        Incrementar
    </button>
    <div class="alert alert-primary text-center mt-3">
        {{ counter }}
    </div>
    <button class="btn btn-danger text-center w-100 btn-lg"
        @click="decrement(1)"
    >
        Decrementar
    </button>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: "Counter",
    computed: {
        ...mapState(['counter']),
    },
    methods: {
        ...mapMutations(['increment', 'decrement']),
    }
}
</script>