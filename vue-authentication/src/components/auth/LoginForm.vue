<template>
    <b-form @submit.prevent="$emit('login')">
        <b-form-group
            label="Correo"
            description="No compartimos tus datos con terceros"
        >
            <b-form-input
                id="email"
                name="email"
                type="email"
                placeholder="Introduce tu correo"
                v-model="user.email"
                v-validate="'required|email'"
                :state="validateState('email')"
            > </b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('email') }}
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Contraseña">
            <!-- <b-form-input
                v-validate="'required|min:6|rude_password'"
            > </b-form-input> -->
            <b-form-input
                id="password"
                name="password"
                type="password"
                placeholder="Introduce tu contraseña"
                v-model="user.password"
                v-validate="'required|min:6'"
                :state="validateState('password')"
            > </b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('password') }}
            </b-form-invalid-feedback>
        </b-form-group>

        <b-button class="mt-4"
            variant="primary"
            type="submit"
            :disabled="errors.any() || !user.password"
        >
            Iniciar sesión
        </b-button>
    </b-form>
</template>

<script>
import { BFormGroup, BForm, BFormInput, BFormInvalidFeedback, BButton } from 'bootstrap-vue'

import validateMixin from '@/mixins/validation'

export default {
    name: "LoginForm",
    components: {
        BFormGroup, BForm, BFormInput, BFormInvalidFeedback, BButton
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    mixins: [validateMixin]
}
</script>