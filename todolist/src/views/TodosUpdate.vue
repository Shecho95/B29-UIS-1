<template>
    <div v-if="selectedTodo">
        <todo-form :todo="selectedTodo"
            @submitForm="saveTodo"
            submitText="Actualizar todo"
        ></todo-form>
    </div>
    <b-alert show v-else> Todo no identificado </b-alert>
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
    created(){
        if(!this.selectedTodo){
            this.fetchTodo(this.$route.params.id);
        }
    },
    methods:{
        ...mapActions('todos', ['updateTodo', 'fetchTodo']),
        saveTodo(todo){
            this.updateTodo(todo).then( () => {
                this.$router.push({ name: 'Todos' })
            })
        }
    }
}
</script>