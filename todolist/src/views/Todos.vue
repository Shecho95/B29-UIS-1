<template>
    <b-row class="mt-5">
        <b-col cols="6">
            <h2>TODOS pendientes</h2>
            <todos-list :todos="pending"></todos-list>
        </b-col>
        <b-col cols="6">
            <h2>TODOS listos</h2>
            <todos-list :todos="done"></todos-list>
        </b-col>
    </b-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import TodosList from '../components/TodosList.vue'

export default {
    name: "Todos",
    components: {
        TodosList
    },
    computed: {
        ...mapGetters('todos', ['pending', 'done'])
    },
    created(){
        this.fetchTodos();
    },
    methods: {
        ...mapActions('todos', ['fetchTodos'])
    }
}
</script>