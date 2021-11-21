<template>
    <div>
        <h1> Componente de creación de TODO </h1>
        <todo-form :todo="todo" @submitForm="createTodo"></todo-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import TodoForm from '../components/TodoForm.vue'

export default {
    name: 'TodosCreate',
    data(){
        return {
            todo: {
                id: null,
                text: '',
                done: false
            }
        }
    },
    components: {
        TodoForm
    },
    methods: {
        ...mapActions('todos', ['addTodos']),
        createTodo(todo){
            this.addTodos(todo).then( () => {
                this.$router.push('/todos');
            })
        }
    }
}
</script>