<template>
    <b-form @submit.prevent="$emit('submitForm', todo)">
        <b-form-group>
            <b-form-input autocomplete="off_asdiouhdf"
                id="todo"
                v-model="todo.text"
                placeholder="Introduce la tarea"
                :state="!$v.todo.text.$invalid"
                @input="$v.todo.$touch"
            > </b-form-input>
            <b-form-invalid-feedback id="todoError"
                v-if="$v.todo.dirty"
            >
                Este campo es requerido y con una longitud minima de 4 caracteres
            </b-form-invalid-feedback>

            <b-button type="submit"
                class="mt-4"
                variant="primary"
                :disabled="$v.todo.text.$invalid"
            >
                {{ submitText }}
            </b-button>
        </b-form-group>
    </b-form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'TodoForm',
    props:{
        todo: {
            type: Object,
            required: true
        },
        submitText: {
            type: String,
            default: 'Crear todo'
        }
    },
    validations: {
        todo: {
            text: {
                required, minLength: minLength(4)
            }
        }
    }
}
</script>