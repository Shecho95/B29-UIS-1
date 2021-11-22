<template>
    <div v-if="selectedTodo">
        <todo-form :todo="selectedTodo"
            @submitForm="saveTodo"
            submitText="Actualizar todo"
        ></todo-form>
    </div>
    <b-aler v-else> Todo no identificado </b-aler>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import TodoForm from '../components/TodoForm.vue'

export default {
    name: 'TodosUpdate',
    components: { TodoForm },
    computed: {
        ...mapState('todos', ['selectedTodo'])
    },
    methods:{
        ...mapActions('todos', ['updateTodo']),
        saveTodo(todo){
            this.updateTodo(todo).then( () => {
                this.$router.push({ name: 'Todos' })
            })
        }
    }
}
</script>